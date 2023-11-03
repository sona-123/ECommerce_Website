import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Menu, MenuItem as MuiMenuItem } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
  ArrowDropDown,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { handleCreateAccount } from "../help";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  font-family: 'Roboto', sans-serif;
  ${mobile({ height: "auto" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 10px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "flex-start" })}
`;

const Text = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: black;
  cursor:pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
  ${mobile({display: "none"})}
`;

const Input = styled.input`
  border: none;
  width: 100%;
  ${mobile({ display:"none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ display:"none" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  color: black;
  ${mobile({ fontSize: "18px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ 
    flex: "0 0 auto", // Don't allow flex-grow for mobile screens
    paddingRight: "10px" // Add some right padding for better spacing
  })}
`;


const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px; margin-right:10px;
  ${mobile({ marginLeft: "10px" })}
`;

const Navbar1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
const navigate=useNavigate();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
const handleClick=()=>{
  navigate("/categories");
}
const handleClick1=()=>{
  navigate("/product-list");
}
  return (
    <Container>
      <Wrapper>
        <Left>
             
                  <Logo >Luxe.Lounge</Logo>
              
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{
                color: "black",
                fontSize: 16,
                borderRadius: 24,
                marginLeft: "10px",
              }}
            />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItemWrapper>
            {/* <Link to="/categories"> */}
              <Text onClick={handleClick}>Categories</Text>
              {/* <Text onClick={handleClick1}>Products</Text> */}
            {/* </Link> */}
          </MenuItemWrapper>
          <MenuItemWrapper>
            {/* <Link to="/categories"> */}
              {/* <Text onClick={handleClick}>Categories</Text> */}
              <Text onClick={handleClick1}>Products</Text>
            {/* </Link> */}
          </MenuItemWrapper>
          <MenuItemWrapper onClick={handleMenuClick}>
            <AccountCircle style={{ marginRight: "5px" }} />
            <ArrowDropDown />
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MuiMenuItem onClick={handleMenuClose}>Profile</MuiMenuItem>
              <MuiMenuItem onClick={handleMenuClose}>Settings</MuiMenuItem>
            </Menu>
          </MenuItemWrapper>
          <Link to="/cart">
            <MenuItemWrapper>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItemWrapper>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar1;
