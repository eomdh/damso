import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AppLayout from '../components/AppLayout';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
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
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

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