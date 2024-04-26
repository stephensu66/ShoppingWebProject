import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utility/formatCurrency";
import storeItems from "../database/items.json";

type CartItemProps = {
  id: number;
  
};
export function CartItem({ id }: CartItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  const quantity = getItemQuantity(id);
  
  if (item == null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          <div>
            {quantity > 0 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-6">quality: {quantity}</span>
                </div>
                <Button onClick={() => {increaseCartQuantity(id); console.log({quantity})}} disabled={quantity >= item.stock}>+</Button>
              </span>
            )}
          </div>
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
