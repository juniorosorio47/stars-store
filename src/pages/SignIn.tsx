import React, { useRef, useCallback, useEffect } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web'; 
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import { useToast } from '../hooks/toast';
import getValidationErrors from '../utils/getValidationErrors';

import Input from '../components/Input'; 
import Button from '../components/Button';

import { Container, Content, Background, AnimationContainer } from '../styles/SignIn';
import { useNavigate } from 'react-router-dom';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const { signIn } = useAuth();
    const { addToast } = useToast();

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/signin");
    },[])

    const handleSubmit = useCallback( async (data:SignInFormData) => {

        formRef.current?.setErrors({});
        
        try{
            const schema = Yup.object().shape({
                email: Yup.string().required('Email is required').email('Type a valid email'),
                password: Yup.string().required('Password is required'),
            })

            await schema.validate(data, {
                abortEarly:false,
            });

            await signIn({
                email: data.email,
                password: data.password,
            });

            
            addToast({title: 'Login success!', type: 'success' });
            
            navigate("/");

        } catch(err){
            if( err instanceof Yup.ValidationError){
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors);
            }
            
            addToast({
                title: 'Authentication error', 
                type: 'error',
                description: 'Error authenticating, please check your credentials and try again'
            });
        }

        

    }, [signIn, addToast])

    




    return(
        <Container>
            <AnimationContainer>
                <Content>
                    <img src={"https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"} alt="logo"/>

                    <Form onSubmit={handleSubmit} ref={formRef} >
                        <h1>Login</h1>

                        <Input type="email" icon={FiMail} name="email" placeholder="Email" />
                        <Input type="password" icon={FiLock} name="password"  placeholder="Password" />

                        <Button type="submit">Login</Button>
                        <Link to="forgot-password">Forgot password?</Link>
                    </Form >

                    <Link to="/register">
                        <FiLogIn/>
                        Create account
                    </Link>
                </Content>
            </AnimationContainer>
            <Background/>
        </Container>
    )};

export default SignIn;

