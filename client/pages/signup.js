import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import SignupForm from '../components/SignupForm';

import styled from 'styled-components';
import device from '../utils/device';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  margin-top: 80px;

  @media ${device.mobileL} {
    margin-top: 30px;
  }
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
