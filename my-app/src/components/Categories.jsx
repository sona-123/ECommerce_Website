import styled from "styled-components";
import { mobile } from "../responsive";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
const Title=styled.h1`
align-items: center
`
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column", // Align items vertically on mobile screens
    width: "100%", // Full width on mobile screens
    // Fixed height on mobile screens
  })}
`;


const Categories = () => {
  return (
   
        
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
        ))}
    </Container>

      
  );
};

export default Categories;

