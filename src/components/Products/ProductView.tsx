import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import Modal from '../Modal';

interface IProductViewProps {
    product_id:number;
    isOpen:boolean;
};

interface IProduct {
    id: number;
    name: string;
    description: string;
    image:string;
    price: number;
    inventory: number;
    multiple: number;
}

const ProductView: React.FunctionComponent<IProductViewProps> = ({product_id, isOpen}) => {

    const [openEdit, setOpenEdit] = useState(isOpen)


    const [productInfo, setProductInfo] = useState<IProduct>()
    const { addToast } = useToast();

    const getProductInfo = useCallback(async () => {
        try {
            const { data } = await api.get(`/products/${product_id}`);

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
            setOpenEdit(true)
        }

        
        
    },[openEdit]);




    return <>
        {productInfo && <>
            <Modal title="Product Details" isOpen={openEdit} setIsOpen={setOpenEdit}>
                <title>Product Details</title>
                    <>
                        <div>
                            <img src={productInfo.image} alt={`${productInfo.name} image`} />
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
                    </>
                
            </Modal>
        </>}
    </>;
};

export default ProductView;
