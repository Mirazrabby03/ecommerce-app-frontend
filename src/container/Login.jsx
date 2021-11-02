import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)),
        url("https://i.ibb.co/8ND3L8x/burgess-milner-OYYE4g-I5-ZQ-unsplash.jpg" ) ;
        display:flex;
        justify-content:center;
        align-items:center;
        `;
const Wrapper = styled.div`
        width:25%;
        padding:20px;
        background-color: white;
        ${mobile({width: "75%"})}

`;
const Title = styled.h1`
        font-size:24px;
        font-weight:300;
`;
const Form = styled.form`
        display:flex;
        flex-direction: column;
`;

const Input = styled.input`
        flex:1;
        min-width:40%;
        margin: 10px 0px ;
        padding:20px;
        ${mobile({padding: "15px", margin: "15px"})}

`;

const Button = styled.button`
        width:40%;
        border:none;
        padding:15px 20px;
        cursor:pointer;
        background-color: teal;
        color:white;
        margin-bottom:10px;
        &:disabled{
                color: green;
                cursor: not-allowed;
        }
`;
const Link = styled.a`
        margin: 5px 0px;
        font-size:12px;
        text-decoration: underline;
        cursor: pointer;

`;
const Error = styled.span`
        color:red;
`;

const Login = () => {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const dispatch = useDispatch();
        const {isFetching, error} = useSelector((state)=> state.user);
        const handleClick = (e)=>{
                e.preventDefault()
                login(dispatch,{username, password})

        }
        return (
        <Container>
            <Wrapper> 
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder ="username" onChange={(e)=> setUsername(e.target.value)} />
                    <Input placeholder ="password" type="password" onChange={(e)=> setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>You have entered wrong credentials </Error>}
                    <Link>Forgot Password?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;
