import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 50px;
  background-color: #003580;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const Title = styled.h1``;

const SubTitle = styled.span``;

const MailCointainer = styled.div``;

const InputText = styled.input`
  width: 300px;
  height: 20px;
  padding: 10px;
  border: none;
  margin-right: 5px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MailList = () => {
  return (
    <Conatiner>
      <Title>Save time, save money</Title>
      <SubTitle>Sign up and we'll send you the best deals to you</SubTitle>
      <MailCointainer>
        <InputText placeholder="Your Email" />
        <Button>Subscribe</Button>
      </MailCointainer>
    </Conatiner>
  );
};

export default MailList;
