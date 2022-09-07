import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../../components/AppLayout';
import UserProfile from '../../components/UserProfile';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const Profile = ({ userInfo }) => {
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
  const user = router.query.id ? userInfo : me;

  useEffect(() => {
    if (!me && !router.query.id) {
      alert("로그인이 필요합니다.");
      router.replace('/');
    };
  }, [me, router.query.id]);

  return (
    <>
      <Head>
        <title>Damso | Profile</title>
      </Head>
      {user && (
        <AppLayout>
          <Container>
            <UserProfile user={ user } />
          </Container>
        </AppLayout>
      )}
    </>
  );
};

export default Profile;
