import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface IProductViewProps {
    product_id:number;
};

interface IProduct {
    id: number;
    name: string;
    description: string;
    image_url:string;
    price: number;
    inventory: number;
    multiple: number;
}

const ProductView: React.FunctionComponent<IProductViewProps> = ({product_id}) => {

    const [productInfo, setProductInfo] = useState<IProduct>()
    const { addToast } = useToast();

    const getProductInfo = useCallback(async () => {
        try {
            const { data } = await api.get(`/products/${product_id}`);
            console.log(data);

            setProductInfo(data.data)

        }catch (err:any){
            addToast({
                title: 'Get product info failed', 
                type: 'error',
                description: `${err.message}`
            });
        }

    },[productInfo]);

    useEffect(() => {

        if(product_id){
            getProductInfo();
        }
        
    },[]);


    return <>
        {productInfo && <>
            <dialog title="Product Details" open={true}>
                <div>
                    <img src={productInfo.image_url} alt={`${productInfo.name} image`} />
                </div>
                <div>
                    <h1>{productInfo.name}</h1>
                    <p>{productInfo.description}</p>
                </div>
                <div>
                    <span>Multiple: {productInfo.multiple}</span>
                    <span>Inventory: {productInfo.inventory}</span>
                    <span>Price: {productInfo.price}</span>
                </div>
            </dialog>
        </>}
    </>;
};

export default ProductView;
