import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { FaEdit, FaTrash } from 'react-icons/fa'

import { Container, Table, Thead, Tbody, Th, Tr, Td } from './styles';
import IconButton from '../IconButton';

interface IDataTableProps {
  onRowClick?: MouseEventHandler<HTMLDivElement>;
  endpoint:string;
  deleteItem:MouseEventHandler<HTMLButtonElement>;
  editItem:MouseEventHandler<HTMLButtonElement>;
}


const DataTable: React.FC<IDataTableProps> = ({endpoint, onRowClick, deleteItem, editItem, ...rest}) => {
  const [tableHeaders, setTableHeaders] = useState<String[]>([])
  const [tableData, setTableData] = useState([])

  const loadData = useCallback(async () => {
    try {
      const { data } = await api.get(`/${endpoint}`);
      console.log(data.data.data)

      setTableHeaders(Object.keys(data.data.data[0]))
      setTableData(data.data.data)

    }catch (error) {
      console.log(error)
      
    }
  },[])

  useEffect(() => {
    loadData()
  },[])

  return <Container>
      <Table { ...rest}>
        <Thead>
          <Tr>
            {tableHeaders.map((header, index) =>(
              <Th key={index}>{header}</Th>
            ))}
            <Th key={Math.random()}>
              Actions
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {tableData.map((row:any, i) =>(
              <Tr key={row['id']} onClick={onRowClick ? onRowClick : ()=>{console.log('clicked on row with id ' + row['id'])}}>
                {tableHeaders.map((objectKey, index) =>(
                  objectKey==='image' 
                  ? 
                    <Td key={index}> 
                      <img src={row[`${objectKey}`]} />
                    </Td>
                  : 
                    <Td key={index}> {row[`${objectKey}`]} </Td>
                ))}
                <Td key={i}>
                  <IconButton icon={FaEdit} onClick={editItem} data-id={row['id']} />
                  <IconButton icon={FaTrash} onClick={deleteItem} data-id={row['id']} />
                </Td>
              </Tr>
          ))}
        </Tbody>
      </Table>

  </Container>;
}

export default DataTable;