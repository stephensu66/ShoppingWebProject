import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
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
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Container>
      </FilteredItemsProvider>
    </ShoppingCartProvider>
      
    
  )
}

export default App
