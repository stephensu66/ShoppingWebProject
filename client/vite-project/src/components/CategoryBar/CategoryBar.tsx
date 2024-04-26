import { Button } from "react-bootstrap";
import { useFilteredItems } from "../../context/FilteredItemsContext";




export const CategoryBar = () => {
  const { setSelectedCategory } = useFilteredItems();

  const categories = [
    {
      name: "Frozen",
      subcategories: ["Nann Pizza", "Onion Gravy", "Grilled Bacon"]
    },
    {
      name: "Fresh",
      subcategories: ["Grapes", "Apples", "Bananas"]
    },
    {
      name: "Beverage",
      subcategories: ["Coca cola", "The Ravn Coffee", "Nerada Tea"]
    },
    {
      name: "Home",
      subcategories: ["Work Desk", "Sofa", "Leather Chair"]
    },
    {
      name: "Pet-food",
      subcategories: ["Dog Food", "Cat Food", "Fish Food"]
    }
  ]

  return (
    <div className="d-flex justify-content-center align-items-center gap-5 mb-2">
      <h5 className="me-1">Category:</h5>
      <div  className="d-flex  gap-5">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant="outline-primary"
          onClick={() => setSelectedCategory(category.name)}
          style={{ height: "auto", justifyContent:"center" }}
        >
          {category.name}
        </Button>
      ))}
      </div>
    </div>
  );

};
