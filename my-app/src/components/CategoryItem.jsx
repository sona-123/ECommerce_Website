import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import categories from "../data"
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
${mobile({
  flexDirection: "column", // Align items vertically on mobile screens
  width: "100%", // Full width on mobile screens
  // Fixed height on mobile screens
})}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    ${mobile({ fontSize: "3vh" })}
    font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
    ${mobile({ height: "3vh",fontsize:"2vh",padding:"1px" })}
`;

const CategoryItem = ({ item }) => {
  // Check if item and item.img are defined
  const navigate=useNavigate();
const handleClick=()=>{
  navigate("/product-list")
}
  if (!item || !item.img) {
    // Handle the case where item or item.img is undefined
    // You can return null or provide a default image URL
    return "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }
  return (

 
    <Container>
      
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleClick}>SHOP NOW</Button>
      </Info>
    </Container>
   
  );
};

export default CategoryItem;