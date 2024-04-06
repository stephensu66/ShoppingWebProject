import { useRef } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utility/formatCurrency";
import storeItems from "../data/items.json";
import { Button, Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Checkout = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  const form = useRef<HTMLFormElement>(null);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((i) => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    const formData: FormData = new FormData(form.current);


    const productDetails = cartItems
      .map((item) => {
        const foundItem = storeItems.find(
          (storeItem) => storeItem.id === item.id
        );
        const itemName = foundItem ? foundItem.name : null;
        return `Product:${itemName} - Quantity:${item.quantity}`;
      })
      .join("\n");
    
    const productDetailsWithTotal = `${productDetails}\nTotal Price: ${formatCurrency(totalPrice)}`;
    formData.append("productDetails", productDetailsWithTotal);

    console.log("FormData", productDetailsWithTotal);
    // console.log("productDetails", formData.get("productDetails"));

    
    
    emailjs
      .send(
        "service_ad511nc",
        "template_y4n86vd",
        {...Object.fromEntries(formData), 
      productDetails: productDetailsWithTotal},
        "_FqwQm636k4k8gFpO"
      )
      .then(
        () => {
          console.log("SUCCESS!");

          cartItems.map(item => removeFromCart(item.id));
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <div>
        <h4>Product:</h4>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="ms-auto fw-bold fs-5 d-flex justify-content-end">
          Total{" "}
          {formatCurrency(totalPrice)}
        </div>
      </div>
      <Container className="row justify-content-center">
        <div className="card col-md-6">
          <div className="card-header fs-4">Basic Information</div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="col-md-13 form-group mb-3">
              <label>First Name</label>
              <input type="text" name="firstname" className="form-control" />
            </div>
            <div className="col-md-13 form-group mb-3">
              <label>Last Name</label>
              <input type="text" name="lastname" className="form-control" />
            </div>
            <div className="col-md-13 form-group mb-3">
              <label>Phone Number</label>
              <input type="text" name="phone" className="form-control" />
            </div>
            <div className="col-md-13 form-group mb-3">
              <label>Address</label>
              <input type="text" name="address" className="form-control" />
            </div>
            <div className="col-md-18 form-group mb-3">
              <label>Email</label>
              <input type="text" name="email" className="form-control" />
            </div>
            <Button type="submit" name="productDetails">Place Order</Button>
          </form>
        </div>
      </Container>
    </>
  );
};
