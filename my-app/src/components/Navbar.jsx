// import React from "react";
// import { Link } from "react-router-dom";
// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import styled from "styled-components";
// import { mobile } from "../responsive";

// const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: "50px" })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ padding: "10px 0px" })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;

// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
// `;

// const Navbar = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           {/* <Language>EN</Language> */}
//           <SearchContainer>
//             <Input placeholder="Search" />
//             <Search style={{ color: "black", fontSize: 16, borderRadius: 24}} />
//           </SearchContainer>
//         </Left>
//         <Center>
//           <Link to="/">
//             <Logo>Luxe.Lounge</Logo>
//           </Link>
//         </Center>
//         <Right>
//           <Link to="/register">
//             <MenuItem>REGISTER</MenuItem>
//           </Link>
//           <Link to="/login">
//             <MenuItem>SIGN IN</MenuItem>
//           </Link>
//           <Link to="/cart">
//             <MenuItem>
//               <Badge badgeContent={4} color="primary">
//                 <ShoppingCartOutlined />
//               </Badge>
//             </MenuItem>
//           </Link>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Badge, Menu, MenuItem as MuiMenuItem } from "@material-ui/core";
// import { Search, ShoppingCartOutlined, AccountCircle, ArrowDropDown } from "@material-ui/icons";
// import styled from "styled-components";
// import { mobile } from "../responsive";
// import { handleCreateAccount } from "../help";
// const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: "50px" })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ padding: "10px 0px" })}
// `;


// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   font-family: 'Roboto', sans-serif;

//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   font-family: 'Roboto', sans-serif;


// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: left;
//   font-family: 'Roboto', sans-serif;

// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   font-family: 'Roboto', sans-serif;

//   ${mobile({ fontSize: "24px" })}
// `;

// const Right = styled.div`
//   flex: 1;
//   font-family: 'Roboto', sans-serif;

//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
// `;

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user's authentication status
//   const [anchorEl, setAnchorEl] = useState(null); // State to manage dropdown menu anchor element

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Container>
//       <Wrapper>
//       <Left>
// {/* <Language>EN</Language>  */}
//          {/* <SearchContainer>
//       <Input placeholder="Search" />
//      <Search style={{ color: "black", fontSize: 16, borderRadius: 24}} />
//     </SearchContainer> */}
//      </Left>
//         <Center>
//           <Link to="/">
//             <Logo>Luxe.Lounge</Logo>
//           </Link>
//         </Center>
//         <Right>
//           {/* {!(handleCreateAccount) && ( // Show "REGISTER" and "SIGN IN" links if not logged in
//             */} 
//              <> 
//               <Link to="/register">
//                 <MenuItem>REGISTER</MenuItem>
//               </Link>
//               <Link to="/login">
//                 <MenuItem>SIGN IN</MenuItem>
//               </Link>
//             </>
//           {/* )} */}
//           {/* {(handleCreateAccount) && ( // Show user icon, cart, and categories with dropdown if logged in
//             <> */}
//               {/* <MenuItem onClick={handleMenuClick}>
//                 <AccountCircle style={{ marginRight: "5px" }} />
//                 User
//                 <ArrowDropDown />
//               </MenuItem> */}
//               {/* <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
               
//                 <MuiMenuItem onClick={handleMenuClose}>Profile</MuiMenuItem>
//                 <MuiMenuItem onClick={handleMenuClose}>Settings</MuiMenuItem>
//               </Menu> */}
//               {/* <Link to="/cart">
//                 <MenuItem>
//                   <Badge badgeContent={4} color="primary">
//                     <ShoppingCartOutlined />
//                   </Badge>
//                 </MenuItem>
//               </Link> */}
//               {/* Add categories dropdown here */}
//             {/* </>
//           )} */}
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Navbar;
