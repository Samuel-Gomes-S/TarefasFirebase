import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 8px 10px 8px 5px;   
    width: 90%;
    max-width: 550px;
    flex-direction:  column;
    background-color: #bfbfbf;
    margin-top: 15px;
    border-radius: 4px;

`;

const DescriptionArea = styled.div`
    display: flex;
    width: 100%;
    padding: 8px 0;
`;

const Description = styled.p`
    color:  #000;
`;

const ButtonArea = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    width: 100%;
`;

const ConcludeBTN = styled.button`
    margin-left: 10px;
    width: 80px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: #adf8a5;
    user-select: none;
    transition: all 0.3s, color 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #e7e7e7;
        color: #16ee00;
    }
    &:active{
        background-color: #444
    }
`;

const EditBTN = styled.button`
    width: 80px;
    border-radius: 50px;
    background-color: #3498db;
    color: #000;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s, color 0.3s;
    &:hover {
        background-color: #e7e7e7;
        color: #3498db;
    }
    &:active{
        background-color: #444
    }
`;


export {
    Container,
    DescriptionArea,
    Description,
    ButtonArea,
    EditBTN,
    ConcludeBTN
}