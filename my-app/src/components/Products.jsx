import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
`;

const ProductContainer = styled.div`
  width: 250px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #ff6600;
`;

const Products = ({products}) => {
  console.log(products);
  return (
    <Container>
      {products.map((product) => (
        <ProductContainer key={product.id}>
          <ProductImage src={product.img} alt={product.title} />
          <ProductTitle>{product.title}</ProductTitle>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>Price: ${product.price}</ProductPrice>
          {/* Add color and size if available */}
          {product.color && <p>Color: {product.color}</p>}
          {product.size && <p>Size: {product.size}</p>}
        </ProductContainer>
      ))}
    </Container>
  );
};

export default Products;
