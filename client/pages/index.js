import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  background-color: #e9ecef;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      <Container>
        {isLoggedIn && <PostForm />}
        {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </Container>
    </AppLayout>
  )
};

export default Home;
