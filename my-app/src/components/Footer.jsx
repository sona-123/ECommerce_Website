import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import Newsletter from "./Newsletter";
const Container = styled.div`
  display: flex;
  background-color: #FAFBFC;
  font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
 
  ${mobile({display:"none"})}
`;

const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  padding: 20px;
  ${mobile({display:"none"})}
`;

const Logo = styled.h1`
margin-left: 70px;

font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
`;

const Desc = styled.p`
  // margin: 20px 0px;
  font-family: 'Roboto', sans-serif;
font-family: 'Signika Negative', sans-serif;
  
`;

const SocialContainer = styled.div`
  display: flex;
  margin-left: 80px;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-right:120px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  align-items: center;
  ${mobile({marginleft:"200px"})}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" ,width:"100%"})}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  `;
  
  const Payment = styled.img`
  margin-left: 30px;
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>

      <Title>Useful Links</Title>
        <List>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
       
        {/* </Newsletter> */}
      </Left>
      <Center>
      <Logo>DevTown</Logo>
       
       <Newsletter/>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
