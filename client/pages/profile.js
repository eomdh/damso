import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
`;

const Profile = () => {
  return (
    <>
      <Head>
        <title>Bluejay | Profile</title>
      </Head>
      <AppLayout>
        <Container>
          <UserProfile />
        </Container>
      </AppLayout>
    </>
  )
};

export default Profile;
