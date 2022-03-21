import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Users from '../pages/Users';
import Clients from '../pages/Clients';

import ProtectedRoute from './ProtectedRoute';
import SignIn from '../pages/SignIn';
import { GlobalNavbar } from '../components/GlobalNavbar';

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path='/' element={<ProtectedRoute />}>
            
            <Route index element={<Home/>} />
            <Route path="/products" >
                <Route index element={<Products />} />
                <Route path=':product_id' element={<Products />} />
            </Route>
            <Route path="/orders" element={<Orders/>} />
            <Route path="/clients" element={<Clients/>} />
            <Route path="/users" element={<Users/>} />
        </Route>
        <Route path="/signin" element={<SignIn/>} />
    </Routes>
)

export default AppRoutes;
