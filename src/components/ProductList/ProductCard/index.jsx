export const ProductCart = ({ product }) => {

    console.log(product);
  return (
    <li>
      <image src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </li>
  );
};
