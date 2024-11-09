import styled from "styled-components";



const Container = styled.div`
    display: flex;
    margin-top: 70px;
    padding-bottom: 70px;
    align-items: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 550px;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 70%;
    min-height:100px;
    padding: 8px;
`;
const Text = styled.h1`
    color: #fff;
    font-style: italic;
    margin: 20px 0;
`;

const RegisterBTN = styled.button`
    border: 0;
    height: 28px;
    border-radius: 6px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    font-weight: 500;
    text-align: center;
    margin-top: 5px;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
        background-color: #e7e7e7;
        color: #3498db;
    }
    &:active{
        background-color: #444
    }
`;

const SignOutBTN= styled.button`
    border: 0;
    position:  fixed ;
    top: 5%;
    left: 5%;
    width:60px;
    height: 60px;
    border-radius: 30px;
    background-color: #e70000;
    &:hover {
        background-color: #e7e7e7;
        color: #000;
    }
    &:active{
        background-color: #444;
        color: #e70000;
    }
    user-select: none;
    cursor: pointer;
    
`;




export {
    Container,
    TextArea,
    Text,
    RegisterBTN,
    Form,
    SignOutBTN

}