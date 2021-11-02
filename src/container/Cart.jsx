import { Add, Remove } from '@material-ui/icons';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Announcement from '../components/Announcement/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_STRIPE_KEY;   

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding:20px;
    ${mobile({padding: "10px"})}
`;
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;

const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor:pointer;
    border: ${(props)=>props.type ==="filled" && "none"};
    background-color: ${(props)=>props.type ==="filled" ? "black" : "transparent"};
    color: ${(props)=>props.type ==="filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({display: "none"})}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin 0px 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;
const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;
const Image = styled.img`
    width:200px;
`;
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
`;
const ProductName = styled.span`
    
`;
const ProductId = styled.div`
    
`;
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=> props.color};
`;
const ProductSize = styled.div`
    
`;
const PriceDetail = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    ${mobile({margin: "5px 15px"})}
`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;
    margin:5px;
    ${mobile({marginBottom: "20px"})}
`;
const Hr = styled.hr`
    background-color: #eee;
    height:1px;
    border: none;
`;
const Summary = styled.div`
    flex:1;
    border:1px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:70vh;
`;
const SummaryTitile = styled.h1`
    font-weight:200;
`;
const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight: ${props => props.type === "total" && 700};
    font-size: ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
    
`;
const SummaryItemPrice = styled.span`
    
`;
const Button = styled.button`
    width:100%;
    background-color:black;
    color: white;
    padding:10px;
    font-weight:600;
    
`;

const Cart = () => {
    const cart = useSelector(state=> state.cart);
    const [quantity, setQuantity] = useState(1);
    const[stripeToken, setStripeToken] = useState(null);

    const onToken=(token)=>{
        setStripeToken(token);
    };
    console.log(stripeToken);

    const handleQuantity = (type)=>{
        if(type === "dec"){
         quantity>1 && setQuantity(quantity - 1)
        }else{
            setQuantity(quantity + 1)
        }
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>YOUR SHOPPING CART</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                    <TopText> Shopping Cart(2)</TopText>
                    <TopText> Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        { cart.products.map((product)=>(

                        
                            <Product>
                            <ProductDetail>
                                <Image src= {product.img} />
                                <Details>
                                    <ProductName><b>Product: </b> {product.title}</ProductName>
                                    <ProductId><b>ID: </b> {product._id}</ProductId>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><b>Size: </b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add onClick={()=>handleQuantity("inc")}/>
                                    <ProductAmount>{product.quantity} </ProductAmount>
                                    <Remove  onClick={()=>handleQuantity("dec")}/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                        ))
                        }
                            <Hr />
                       
                    </Info>
                    <Summary>
                        <SummaryTitile>ORDER SUMMARY</SummaryTitile>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout 
                        name= "E-Bazar"
                        image="https://i.ibb.co/gFHxZWD/eng-pl-Mens-Winter-Jacket-White-Bolf-5423-69765-1.jpg"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart;
