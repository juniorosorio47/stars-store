import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductView from '../components/Products/ProductView';
import DataTable from '../components/Table';
import { PaperContainer } from '../components/PaperContainer/styles';


interface IProductsProps {
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    image_url:string;
    price: number;
    inventory: number;
    multiple: number;
}


const Products: React.FunctionComponent<IProductsProps> = (props) => {
    const { product_id } = useParams();
    const [ openView, setOpenView ] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        product_id && setOpenView(true)
    })
    

    const editProduct = useCallback((e)=>{
        console.log('Edit')

        const { id } = e.target.dataset
        

        navigate(`/products/${id}`)

        setOpenView(true)

        console.log(e.target.dataset)
        console.log(id)
    },[])


    const deleteProduct = useCallback((e)=>{
        console.log('Delete')
        console.log(e.target)
    },[])


    return <>
        {product_id && <ProductView isOpen={openView} product_id={Number(product_id)} />}	
        <PaperContainer>
            <h1>Products</h1>

            <h2>List of products</h2>
            <DataTable 
                editItem={editProduct}
                deleteItem={deleteProduct}
                endpoint='products'
            />
        </PaperContainer>
    </>;


};

export default Products;
