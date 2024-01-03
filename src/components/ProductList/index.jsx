import { ProductCart } from "./ProductCard";
import { ProductContext } from "../../providers/ProductContext/ProductContext";
import { useContext } from "react";

export const ProductList = () => {
  const { productList } = useContext(ProductContext);
  console.log(productList);
  return (
    <ul>
      {productList.map((product) => (
        <ProductList key={product.id} product={product} />
      ))}
      <ProductCart />
    </ul>
  );
};
