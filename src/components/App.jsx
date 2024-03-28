import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContentContainer from "./content-container";
import HomePage from "./home";
import ProductView from "./product/product-view";
import Shop from "./shop";
import Contact from "./contact";
//import Cart from "./cart";
//import Signup from "./signup";
//import Login from "./login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<ContentContainer />}>
        <Route index element={<HomePage />} />
        {/*<Route path="/signup" element={<Signup />} />*/}
        {/*<Route path="/login" element={<Login />} />*/}
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="product/:id" element={<ProductView />} />
        {/*<Route path="cart/" element={<Cart />} /> */}
      </Route>
    )
  );

  // --------------------------------------------------------------------------------------------------
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
