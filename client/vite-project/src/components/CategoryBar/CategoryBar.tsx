import { Button } from "react-bootstrap";
import { useFilteredItems } from "../../context/FilteredItemsContext";

export const CategoryBar = () => {
  const { setSelectedCategory } = useFilteredItems();
  return (
    <div className="d-flex justify-content-center gap-4">
      <Button variant="outline-primary" onClick={() => setSelectedCategory("clothes1")}>Clothes1</Button>
      <Button variant="outline-primary" onClick={() => setSelectedCategory("clothes2")}>Clothes2</Button>
    </div>
  );
};
