import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, Table, Thead, Tbody, Th, Tr, Td } from './styles';

interface IDataTableProps {
  onRowClick?: MouseEventHandler<HTMLDivElement>;
}


const DataTable: React.FC<IDataTableProps> = ({onRowClick, ...rest}) => {
  const [tableHeaders, setTableHeaders] = useState<String[]>([])
  const [tableData, setTableData] = useState([])

  const loadData = useCallback(async () => {
    try {
      const { data } = await api.get('/products');

      setTableHeaders(Object.keys(data.data.data[0]))
      setTableData(data.data.data)

    }catch (error) {

      
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
          </Tr>
        </Thead>

        <Tbody>
          {tableData.map((row:any) =>(
              <Tr key={row['id']} onClick={onRowClick ? onRowClick : ()=>{console.log('clicked on row with id ' + row['id'])}}>
                {tableHeaders.map((objectKey, index) =>(
                  <Td key={index}> {row[`${objectKey}`]} </Td>
                ))}
              </Tr>
          ))}
        </Tbody>
      </Table>

  </Container>;
}

export default DataTable;