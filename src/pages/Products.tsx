import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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



    return <>
        <PaperContainer>
            <h1>Products</h1>
            {product_id && <ProductView product_id={Number(product_id)} />}

            <h2>List of products</h2>
            <DataTable />
        </PaperContainer>
    </>;


};

export default Products;
