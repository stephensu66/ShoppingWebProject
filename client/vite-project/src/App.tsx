import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Store } from "./pages/Store";
import { Checkout } from "./pages/Checkout";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { FilteredItemsProvider } from "./context/FilteredItemsContext"; 

function App() {
  return (
    <ShoppingCartProvider>
      <FilteredItemsProvider>
        <Navbar />
        <div style={{ backgroundColor: "#a3cef1", paddingTop: "20px" }}>
        <Container >
          <Routes >
            
            <Route path="/" element={<Store />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Container>
        </div>
      </FilteredItemsProvider>
    </ShoppingCartProvider>
      
    
  )
}

export default App
