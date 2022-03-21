import React, { useCallback } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import {NavbarContainer, Nav, ButtonLink, LogoutButton} from './styles'

export const GlobalNavbar = () => {
  const { signOut, user } = useAuth();

  return (
    <>
      <NavbarContainer>
        <a href="/">Star Atacado</a>
        <Nav>
          <ButtonLink href="/products">Products</ButtonLink>
          <ButtonLink href="/orders">Orders</ButtonLink>
          <ButtonLink href="/clients">Clients</ButtonLink>
          <ButtonLink href="/users">Users</ButtonLink>
        </Nav>
        <div>
          <LogoutButton onClick={signOut}> 
            <IoLogOutOutline/>
          </LogoutButton>
        </div>

      </NavbarContainer>
    </>
  )
}