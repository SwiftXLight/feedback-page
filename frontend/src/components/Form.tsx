import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    z-index: 10;
    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #2D2D2D;
    padding: 30px 40px;
    text-align: center
    background: #FFFFFF;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
`;

const MyForm = styled.form`
    height: 890px;
    z-index: 9;
    background color: #D8D8D8;
    color: #D8D8D8;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 560px;
    margin-left: 10vw;
`;

const Title = styled.h1`
    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    color: #3E3E3E;
    margin-bottom: 20px;
    margin-top: 15vh;
`;

const SubmitButton = styled.button`
    z-index: 10;
    padding: 28px 52px;
    margin-top: 14px;
    max-width: 220px;

    background: #FAD34F;
    border-radius: 500px;
    border: none;
    font-family: 'Apercu Arabic Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    &:hover {
        cursor: pointer;
    }
`;

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const newMessage = {
            name: name,
            email: email,
            message: message,
        };

        axios.post('https://frozen-forest-95134.herokuapp.com/messages', newMessage)
        .then((res: any) => {           
            setName("");
            setEmail("");
            setMessage("");
            alert('Your feedback has been successfully sent!')
        })
        .catch((err: string) => err);       
    }

    return (
        <MyForm onSubmit={handleSubmit}>
            <Title>Reach out to us!</Title>
            <Input
            type="text" 
            value={name}
            placeholder="Your name*"
            onChange={(e) => setName(e.target.value)}
            />
            <Input
            type="email" 
            value={email}
            placeholder="Your e-mail*"
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            type="text" 
            value={message}
            placeholder="Your message*"
            onChange={(e) => setMessage(e.target.value)}
            />
            <SubmitButton type="submit">Send message</SubmitButton>
        </MyForm>
);
}

export default Form;
