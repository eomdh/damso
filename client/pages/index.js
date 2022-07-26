import React from 'react';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
`;

const Home = () => {
  return (
    <AppLayout>
      <Container>
        <GridContainer>
          Home
        </GridContainer>
      </Container>
    </AppLayout>
  )
};

export default Home;
