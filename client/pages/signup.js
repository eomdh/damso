import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import SignupForm from '../components/SignupForm';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const Signup = () => {
  return (
    <>
      <Head>
        <title>Bluejay | Signup</title>
      </Head>
      <AppLayout>
        <Container>
          <SignupForm />
        </Container>
      </AppLayout>
    </>
  )
};

export default Signup;
