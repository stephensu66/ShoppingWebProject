import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { SearchBar } from "./SearchBar/SearchBar";
import logo from "../assets/images.png";

export const Navbar = () => {
  const { openCart } = useShoppingCart();
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <img
          src={logo}
          alt=""
          className="img-fluid bg-transparent"
          style={{ maxWidth: "40px" }}
        />
        <Nav className="me-1">
          <Link to="/" className="me-3">Home</Link>
          <Link to="/store" className="me-3">Store</Link>
          <Link to="/checkout" className="me-3">Checkout</Link>
        </Nav>
        <SearchBar />
        <Button
          onClick={openCart}
          variant="outline-primary"
          className="rounded-circle"
        >
          ShopingCart
        </Button>
      </Container>
    </NavbarBs>
  );
};
