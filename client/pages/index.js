import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  background-color: #e9ecef;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  width: 45%;
  display: gird;
  background-color: white;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
`;

const Home = () => {
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      <Container>
        <GridContainer>
          <PostForm />
          {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </GridContainer>
      </Container>
    </AppLayout>
  )  
};

export default Home;
