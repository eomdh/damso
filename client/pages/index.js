import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <AppLayout>
      <Container>
        Home
      </Container>
    </AppLayout>
  )
};

export default Home;
