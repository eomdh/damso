import React, { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const Login = () => {
  return (
    <>
      <Head>
        <title>Damso | Login</title>
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
