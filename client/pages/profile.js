import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!me) {
      alert("로그인 후 이용해주세요.");
      Router.replace('/');
    };
  }, [me]);

  return (
    <>
      <Head>
        <title>Damso | Profile</title>
      </Head>
      {me && (
        <AppLayout>
          <Container>
            <UserProfile me={ me }/>
          </Container>
        </AppLayout>
      )}
    </>
  )
};

export default Profile;
