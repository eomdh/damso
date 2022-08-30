import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import device from '../utils/device';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 55px);
  background-color: #e9ecef;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled.div`
  width: 45%;
  background-color: white;
  display: gird;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;

  @media ${device.laptop} {
    grid-template-columns: 1fr 2.5fr 1fr;
    grid-gap: 0;
    width: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 3fr 1fr;
    grid-gap: 0;
    width: 100%;
  }
  
  @media ${device.mobile} {
    grid-template-columns: 0fr 1fr 0fr;
    width: 100%;
    display: flex;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const { mainPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  return (
    <AppLayout>
      <Container>
        <GridContainer>
          <PostForm />
          {mainPosts.map((post) => <Post key={post.id} post={post} />)}
        </GridContainer>
      </Container>
    </AppLayout>
  )  
};

export default Home;
