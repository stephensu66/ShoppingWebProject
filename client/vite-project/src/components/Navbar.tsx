import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { SearchBar } from "./SearchBar/SearchBar";
import logo from "../assets/images.png";

export const Navbar = () => {
  const { openCart } = useShoppingCart();
  return (
    <NavbarBs style={{ backgroundColor: "#e7ecef" }} className=" shadow-sm mb-0">
      <Container>
        <img
          src={logo}
          alt=""
          className="img-fluid bg-transparent"
          style={{ maxWidth: "40px" }}
        />
        <Nav className="me-1">
          <Link to="/" className="me-3">Store</Link>
          <Link to="/checkout" className="me-3">Checkout</Link>
        </Nav>
        <div style={{ width: "250px" }}>
        <SearchBar  />
        </div>
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
