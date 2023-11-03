import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: fit-content;
  background-color: #FAFBFC;
  display: flex;
   margin-right: 20px;
  padding: 20px;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  // border: black;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-family: 'Signika Negative', sans-serif;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Signika Negative', sans-serif;

`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  font-family: 'Signika Negative', sans-serif;
  
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  margin-left:0,
  font-family: 'Roboto', sans-serif;
  justify-content: space-between;
  border: 0px solid black;
  font-family: 'Roboto', sans-serif;
  font-family: 'Signika Negative', sans-serif;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Signika Negative', sans-serif;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-family: 'Signika Negative', sans-serif;
`;

const Newsletter = () => {
  return (
    <Container>
      {/* <Title>Newsletter</Title> */}
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
