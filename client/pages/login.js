import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <>
      <Head>
        <title>Bluejay | Login</title>
      </Head>
      <AppLayout>
        <Container>
          <LoginForm />
        </Container>
      </AppLayout>
    </>    
  )
};

export default Login;
