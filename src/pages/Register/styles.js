import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 550px;
`;

const Input = styled.input`
    height: 28px;
    margin:  5px 0;
    border: 0;
    border-radius: 6px;
    padding: 0 5px;
`;

const SubmitButton = styled.button`
    border: 0;
    height: 28px;
    border-radius: 6px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    font-weight: 500;
    text-align: center;
`;

const SignInButton = styled(Link)`
    text-decoration: none;
    color: #e7e7e7;
    font-size: 10px;
    margin: 10px 0;
`;

const Text = styled.span`
    font-size: 15px;
    color: #fff;
    margin: 10px 0;
`;

export {
    Container,
    Form,
    Input,
    SubmitButton,
    SignInButton,
    Text
}