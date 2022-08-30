import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';

const Container = styled.div`
  width: 450px;
  height: 530px;
  background-color: #e9ecef;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
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
  margin-top: -10px;
  margin-bottom: 20px;
`;

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

const ErrorMessage = styled.span`
  margin-top: -10px;
  margin-bottom: 15px;
  color: red;
`;

const SignupForm = () => {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');

  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangeVerifyPassword = useCallback((e) => {
    setVerifyPassword(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, [term]);

  const onSignupSubmit = useCallback((e) => {
    e.preventDefault();
    if (password !== verifyPassword) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    })
    console.log(email, password, nickname);
  }, [email, password, verifyPassword, term]);

  return (
    <Container>
      <TitleContainer>
        <Title>Signup</Title>
      </TitleContainer>
      <Form onSubmit={onSignupSubmit}>
        <Input 
          type="email" 
          name="user-email"
          value={email}
          required
          placeholder="Email"
          onChange={onChangeEmail}>
        </Input>
        <Input 
          type="text"
          name="user-nickname"
          value={nickname}
          required
          placeholder="Nickname"
          onChange={onChangeNickname}>
        </Input>
        <Input 
          type="password"
          name="user-password"
          value={password}
          placeholder="Password"
          onChange={onChangePassword}>
        </Input>
        <Input 
          type="password"
          name="verify-password"
          value={verifyPassword}
          placeholder="Verify Password"
          onChange={onChangeVerifyPassword}>
        </Input>
        <CheckBoxContainer>
          <CheckBox type="checkbox" value={term} onChange={onChangeTerm} />
          <label htmlFor={CheckBox}>약관에 동의합니다.</label>
        </CheckBoxContainer>
        {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        <SubmitButton type="submit">SIGNUP</SubmitButton>
      </Form>
    </Container>  
  )
};

export default SignupForm;