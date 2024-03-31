import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { SearchBox } from './SearchBox';

export const Navbar = () => {
  const { openCart } = useShoppingCart();
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className='me-auto'>
          <Link to="/" >
            Home
          </Link>
          <Link to="/store">
            Store
          </Link>
          <Link to="/about">
            About
          </Link>
        </Nav>
        <div>
          <SearchBox />
        </div>
        <Button onClick={openCart} variant="outline-primary" className="rounded-circle">
          ShopingCart
        </Button>
      </Container>
    </NavbarBs>
  )
}
