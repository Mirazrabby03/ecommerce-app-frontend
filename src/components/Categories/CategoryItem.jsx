import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {mobile} from '../../responsive';
const Container = styled.div`
    flex:1;
    height:70vh;
    margin: 3px;
    position: relative;
`;
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    ${mobile({height: "30vh"})}
    
`;
const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    color: white;
    margin-bottom:20px;
    font-weight: 600;

`;
const Button = styled.button`
    border:none;
    background-color: white;
    color: gray;
    padding:10px;
    cursor: pointer;
    font-weight: 600;
`;
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to= {`/products/${item.cat}`}>
            <Image src={item.img}/>
            <Info>
                <Title> {item.title} </Title>
                <Button>SHOP NOW</Button>
            </Info>
            </Link>
        </Container>
    )
}   

export default CategoryItem;
