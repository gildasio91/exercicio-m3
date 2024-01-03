import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";


export const ProductContext = createContext({});

export const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  console.log( "teste1");

  const getProducts = async () => {
    console.log( "teste2");
    
  try {
    const { data } = await api.get("/products");
    console.log(data, "teste3");
    setProductList(data);
  } catch (error) {
    console.log(error);
  }
};
  useEffect(() => {
    console.log("teste4")
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productList }}>
      {children}
    </ProductContext.Provider>
  );
};


