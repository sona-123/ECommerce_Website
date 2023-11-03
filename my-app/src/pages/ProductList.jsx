import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import styled from "styled-components";
import { mobile } from "../responsive";
import Products from "../components/Products";
import Navbar1 from "../components/Navbar1";
const Container = styled.div`
  // Your styles for Container 
  font-family: 'Roboto', sans-serif;
  font-family: 'Signika Negative', sans-serif;
  ${mobile({ width: "fitcontent", margin: "10px" })}
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ fontSize: "10px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  margin: 0 5px;
  padding: 8px 16px;
  background-color: ${(props) => (props.active ? "#4CAF50" : "#f1f1f1")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ProductList = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(popularProducts);
  const [productList, setProductList] = useState([]);
  const [firstReload, setFirstReload] = useState(false);
  const [operation, setOperation] = useState(0);

  useEffect(() => {
    if (firstReload === false) {
      setProductList(popularProducts);
      setFirstReload(true);
    }
  }, [firstReload]);

  useEffect(() => {
    if (operation === 1) {
      setProductList(sortedProducts);
    }
    if (operation === 2) {
      setProductList(filteredProducts);
    }
  }, [operation, sortedProducts, filteredProducts]);

 const handleSort = (e) => {
    const sortType = e.target.value;
    // console.log(sortType);
    let sorted;
    if (sortType === "Lowest") {
      sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortType === "Highest") {
      sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else {
      // Default case: do not change the sorting
      sorted = [...filteredProducts];
    }
    // console.log(filteredProducts);
    setSortedProducts(sorted);
    setOperation(1);
    // console.log(sortedProducts);
  };
  // console.log(popularProducts);

  const handleFilter = (e) => {
    const color = e.target.value;
    if (color === "All") {
      setFilteredProducts(popularProducts);
    } else {
      const filtered = popularProducts.filter((product) => product.color === color);
      setFilteredProducts(filtered);
    }
    setOperation(2);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productList.length / itemsPerPage); i++) {
      pageNumbers.push(
        <PageNumber key={i} onClick={() => setCurrentPage(i)} active={i === currentPage}>
          {i}
        </PageNumber>
      );
    }
    return pageNumbers;
  };

  return (
    <Container>
      <Navbar1/>
      <Title style={{marginTop:"30px"}}>Products</Title>
      <FilterContainer >
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handleFilter}>
            <Option value="All">All Colors</Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Green">Green</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option value="Default">Default</Option>
            <Option value="Lowest">Price: Lowest to Highest</Option>
            <Option value="Highest">Price: Highest to Lowest</Option>
          </Select>   
     </Filter>
      </FilterContainer>
      <Products products={currentProducts} />
      <Pagination>{renderPageNumbers()}</Pagination>
    </Container>
  );
};

export default ProductList;
