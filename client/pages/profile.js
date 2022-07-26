import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
  return (
    <>
      <Head>
        <title>Bluejay | Profile</title>
      </Head>
      <AppLayout>
        <div>Profile Page</div>
      </AppLayout>
    </>
  )
};

export default Profile;
