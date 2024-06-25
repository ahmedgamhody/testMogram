import About from "./components/About";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider></Slider>
              <ProductsList></ProductsList>
            </>
          }
        ></Route>

        <Route path="about" element={<About></About>}></Route>

        <Route
          path="product/:productId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
