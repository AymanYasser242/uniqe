import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContentContainer from "./content-container";
import MainContent from "./content";
import ProductView from "./product/product-view";
import Cart from "./cart";
import Signup from "./signup";
import Login from "./login";
import Shop from "./shop";
import Contact from "./contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContentContainer />}>
            <Route index element={<MainContent />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="product/:id" element={<ProductView />} />
            <Route path="cart/" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
