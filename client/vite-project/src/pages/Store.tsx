
import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import { JSX } from "react/jsx-runtime";
import { useFilteredItems } from "../context/FilteredItemsContext";
import { CategoryBar } from "../components/CategoryBar/CategoryBar";

export const Store = () => {
  const { filteredItems } = useFilteredItems();

  return (
    <>
      
      <CategoryBar />
      <Row md={2} xs={1} lg={3} className="g-3">
        {filteredItems.map(
          (
            item: JSX.IntrinsicAttributes & {
              id: number;
              name: string;
              price: number;
              imgUrl: string;
              category: string;
              stock: number;
            }
          ) => (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          )
        )}
      </Row>
    </>
  );
};
