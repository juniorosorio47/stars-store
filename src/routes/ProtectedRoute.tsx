import React from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalNavbar } from '../components/GlobalNavbar';

import { useAuth } from '../hooks/auth';
import SignIn from '../pages/SignIn';
import { GlobalContainer } from '../styles/GlobalContainer';


const ProtectedRoute: React.FC = () => {
    const { user } = useAuth();
    
    return !user ? <SignIn /> : <>
        <GlobalNavbar />
        <GlobalContainer>
            <Outlet />
        </GlobalContainer>
    </>
}

export default ProtectedRoute;