import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Menu, MenuItem as MuiMenuItem } from "@material-ui/core";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircle,
  ArrowDropDown,
  ArrowDropDownCircle,
} from "@material-ui/icons";
import styled from "styled-components";
import { desktop, mobile } from "../responsive";
import { handleCreateAccount } from "../help";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  font-family: "Roboto", sans-serif;
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
  cursor: pointer;
  margin-left: 20px;
  ${mobile({display:"none"})}
 
`;
const Text1 = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  margin-left: 20px;
 ${mobile({fontSize: "2vh",margintop:"1px", marginLeft:"2px"})}
`;
const DropdownIcon = styled(ArrowDropDownCircle)`
  display: none;
  ${desktop({display:"none"})};
  ${mobile({ display: "block", fontSize: 30, cursor: "pointer" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
  ${mobile({ display: "none" })}
`;

const Input = styled.input`
  border: none;
  width: 100%;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobile({ display: "none" })}
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
  ${mobile({ paddingRight: "10px" })}
`;

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 10px;
  position: relative;
  ${mobile({ marginLeft: "10px" })}
  
  ${desktop({display:"none"})};
`;
const MenuItemWrapper1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 10px;
  position: relative;
  ${mobile({ marginLeft: "10px" })}
 
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  display: none;
  flex-direction: column;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px;
  z-index: 1;

  ${MenuItemWrapper}:hover & {
    display: flex;
  }
`;

const Navbar1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    navigate("/categories");
  };

  const handleClick1 = () => {
    navigate("/product-list");
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Luxe.Lounge</Logo>
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
          <MenuItemWrapper1>

            <Text onClick={handleClick}>Categories</Text>
            <Text onClick={handleClick1}>Products</Text>
          </MenuItemWrapper1>
          {/* {window.innerWidth >= 768 && ( */}
          <MenuItemWrapper>
            <DropdownIcon onClick={handleMenuClick} />
            <DropdownMenu>
              <Link to="/categories">
                <Text1>Categories</Text1>
              </Link>
              <Link to="/product-list">
                <Text1>Products</Text1>
              </Link>
            </DropdownMenu>
          </MenuItemWrapper>
          {/* )} */}
          <AccountCircle style={{ marginRight: "5px", marginLeft: "5px" }} />
          <Link to="/cart">
            <MenuItemWrapper1>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItemWrapper1>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar1;
