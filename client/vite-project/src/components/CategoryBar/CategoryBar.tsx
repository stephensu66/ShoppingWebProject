import { Button } from "react-bootstrap";
import { useFilteredItems } from "../../context/FilteredItemsContext";

export const CategoryBar = () => {
  const { setSelectedCategory } = useFilteredItems();
  return (
    <div className="d-flex justify-content-center gap-5">
      <h5>Category:</h5> 
      <Button variant="outline-primary" onClick={() => setSelectedCategory("clothes")}>Clothes</Button>
      <Button variant="outline-primary" onClick={() => setSelectedCategory("shoes")}>Shoes</Button>
      <Button variant="outline-primary" onClick={() => setSelectedCategory("flowers")}>Flowers</Button>
      <Button variant="outline-primary" onClick={() => setSelectedCategory("pets")}>Pets</Button>
    </div>
  );
};
