import React, { useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  height: 75%;
  background-color: #e9ecef;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 27px;
  color: #212529;
`;

const Form = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Input = styled.input`
  all: unset;
  border-radius: 10px;
  width: 85%;
  height: 30px;
  padding: 8px 15px;
  background-color: white;
  opacity: 0.8;
  margin-bottom: 25px;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

const CheckBoxContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: flex-start;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const CheckBox = styled.input``;

const SubmitButton = styled.button`
  all: unset;
  border-radius: 10px;
  width: 85%;
  height: 30px;
  padding: 8px 15px;
  background-color: #1864ab;
  color: white;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  cursor: pointer;
  opacity: 0.9;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

const SignupForm = () => {
  const onSignupSubmit = useCallback(() => {

  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>Signup</Title>
      </TitleContainer>
      <Form onSubmit={onSignupSubmit}>
        <Input type="email" placeholder="Email"></Input>
        <Input type="text" placeholder="Nickname"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Input type="password" placeholder="Verify Password"></Input>
        <CheckBoxContainer>
          <CheckBox type="checkbox" />
          <label htmlFor={CheckBox}>약관에 동의합니다.</label>
        </CheckBoxContainer>
        <SubmitButton type="submit">가입하기</SubmitButton>
      </Form>
    </Container>  
  )
};

export default SignupForm;