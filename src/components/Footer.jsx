import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    padding: 20px;

`;
const Logo = styled.h1`
    
`;
const Desc = styled.div`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
    // align-items: center;
    // justify-content: space-between;
    
`;
const SocialIcon = styled.div`
    cursor: pointer;
    width:40px;
    height:40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: felx;
    align-items: center;
    justify-content: center;
    margin-right:20px;

`;
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"})}
`;
const Title= styled.h3`
    margin-bottom: 30px;
`;
const List= styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem= styled.li`
    width: 50%;
    margin-bottom: 10px;
    
`;
const Right = styled.div`
flex:1;
    padding:20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;

`;

const Footer = () => {
    return (
        <Container>
            <Left>
        <Logo>E-Bazar</Logo>
        <Desc>
            We believe in a world where you have total freedom to be you, without judgement. 
            To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is.
             So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – 
             no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence 
             to be whoever you want to be.
            </Desc>
            <SocialContainer >
                <SocialIcon color="385999">
                   <Facebook/> 
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
            </Left>
            <Center> 
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>About us</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{marginRight: "10px"}} />
                    19/B, Avenue 1, Pallabi, Mirpur, Dhaka-1216
                </ContactItem>
                <ContactItem> <Phone style={{marginRight: "10px"}}/>
                +880-9667540021
                </ContactItem>
                <ContactItem> <MailOutline style={{marginRight: "10px"}}/>
                    contact@e-bazar.com
                </ContactItem>
                <Payment> 
                   <img src="https://i.ibb.co/ctxphBn/44-440249-paypal-payment-methods-icons-hd-png-download.png" alt ="" style={{width:"50%"}}/>
                   </Payment>
            </Right>
            
            
            

        </Container>
    )
}

export default Footer;
