import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useState } from "react";
const Container = styled.div`
font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 10px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const [products, setProducts] = useState([
    // Sample product data array
    { id: 1, title: "Denim Jumpsuit", color: "black", price: 20 },
    { id: 2, title: "Cotton Shirt", color: "white", price: 15 },
    // Add more products as needed
  ]);

  const [selectedColor, setSelectedColor] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleColorFilter = (color) => {
    setSelectedColor(color);
  };

  const handleSort = (value) => {
    setSortBy(value);
  };

  // Filter products by color
  const filteredProducts = selectedColor
    ? products.filter((product) => product.color === selectedColor)
    : products;

  // Sort products based on the selected sorting option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "lowToHigh") {
      return a.price - b.price;
    } else if (sortBy === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });
  return (
    <Container>
    
   
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. ``
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
        <Filter>
          <FilterTitle>Color</FilterTitle>
          <FilterColor onClick={() => handleColorFilter("black")} color="black" />
          <FilterColor onClick={() => handleColorFilter("white")} color="white" />
          {/* Add more color options as needed */}
        </Filter>
        <Filter>
          <FilterTitle>Sort By</FilterTitle>
          <FilterSize onChange={(e) => handleSort(e.target.value)}>
            <FilterSizeOption value="">Select</FilterSizeOption>
            <FilterSizeOption value="lowToHigh">Low to High</FilterSizeOption>
            <FilterSizeOption value="highToLow">High to Low</FilterSizeOption>
          </FilterSize>
        </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
  
    </Container>
  );
};

export default Product;
