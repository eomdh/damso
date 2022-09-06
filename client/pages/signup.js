import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import SignupForm from '../components/SignupForm';

import styled from 'styled-components';

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
        <title>Damso | Signup</title>
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
