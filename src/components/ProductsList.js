import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const api = "https://fakestoreapi.com/products";

  const getAllProducts = () => {
    fetch(`${api}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategories = () => {
    fetch(`${api}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  const getCategoriesByName = (category) => {
    fetch(`${api}/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getAllProducts();
    getCategories();
  }, []);

  return (
    <div className="products pt-5 pm-5">
      <h2 className="text-center">Our Products</h2>
      <div className="text-center">
        <button
          onClick={() => {
            getAllProducts();
          }}
          className="btn btn-info m-2"
        >
          All
        </button>
        {categories.map((category) => (
          <button
            onClick={() => {
              getCategoriesByName(category);
            }}
            key={category}
            className="btn btn-info m-2"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="row pt-5">
          {products.map((pro) => (
            <div className="col-lg-3 mb-4 col-md-6 col-sm-12" key={pro.id}>
              <Product product={pro} showButton={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
