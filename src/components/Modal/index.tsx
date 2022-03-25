import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import IconButton from '../IconButton';

import { DialogContainer } from './styles';

interface IModalProps {
    isOpen: boolean;
    setIsOpen:any;
    title: string;
}

const Modal: React.FC<IModalProps> = ({isOpen, setIsOpen, title, children, ...rest}) => {

    const navigate = useNavigate()

    const closeModal = useCallback((e) =>{
        console.log(e.target)

        // setIsOpen(false);
        navigate(-1)

    }, [])

    useEffect(() => {
        setIsOpen(!isOpen)
    },[])


    return isOpen ? 
        <DialogContainer id="modal" open={isOpen} title={title} {...rest}>
            <header>
                <h1>{title}</h1>
                <IconButton onClick={closeModal} icon={AiOutlineCloseSquare}/>
            </header>
            <main>
                { children }
            </main>
            <footer>
                <button>Save</button>
                <button>Cancel</button>
            </footer>
        </DialogContainer>
    :
    <></>;
} 

export default Modal;