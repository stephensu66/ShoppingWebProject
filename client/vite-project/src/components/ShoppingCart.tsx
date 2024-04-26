
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext';
import {CartItem} from "./CartItem"
import { formatCurrency } from '../utility/formatCurrency';
import storeItems from "../database/items.json";
import { Link } from 'react-router-dom';

type ShoppingCartProps = {
    isOpen: boolean;
}
export function ShoppingCart ({ isOpen }: ShoppingCartProps) {
    const {closeCart, cartItems,removeFromCart } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem  key={item.id}  {...item} />
                ))}
                <div className='ms-auto fw-bold fs-5'>Total {formatCurrency(cartItems.reduce((total,cartItem) => {
                    const item=storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                },0 ))}</div>
                <Button onClick={()=> cartItems.map(cartItem=> removeFromCart(cartItem.id))}>Clear cart</Button>
                <Button onClick={closeCart} className={`btn ${cartItems.length ===0 ? 'btn-secondary' : 'btn-primary'}`}>
                        <Link to="/checkout" className= "text-decoration-none text-white">Proceed to Checkout</Link>
                    </Button>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
