import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Product from "./Product";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return <Product product={product} showButton={false}></Product>;
}

export default ProductDetails;
