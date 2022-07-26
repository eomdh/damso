import React, { useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 30%;
  height: 50%;
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

const Button = styled.button`
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

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginSubmit = useCallback(() => {
  },[]);

  return (
    <Container>
      <TitleContainer>
        <Title>Login</Title>
      </TitleContainer>
      <Form onSubmit={onLoginSubmit}>
        <Input type="email" value={email} placeholder="Email"></Input>
        <Input type="password" value={password} placeholder="Password"></Input>
        <Button type="submit">로그인</Button>
      </Form>
    </Container>
  )
};

export default LoginForm;