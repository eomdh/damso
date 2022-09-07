import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../../reducers/post';
import { END } from 'redux-saga';
import axios from 'axios';
import AppLayout from '../../components/AppLayout';
import Post from '../../components/Post';
import wrapper from '../../store/configureStore';

import styled from 'styled-components';
import device from '../../utils/device';

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

const UserPosts = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: id,
          });
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  return (
    <AppLayout>
      <Head>
        <title>
          Damso | {userInfo.nickname}님의 글
        </title>
        <meta name="description" content={`${userInfo.nickname}님의 게시글`} />
        <meta property="og:title" content={`${userInfo.nickname}님의 게시글`} />
        <meta property="og:description" content={`${userInfo.nickname}님의 게시글`} />
        <meta property="og:image" content='https://localhost:3000/favicon.ico' />
        <meta property="og:url" content={`https://localhost:3065/user/${id}`} />
      </Head>
      {userInfo ? (
        <Container>
          <GridContainer>
            {mainPosts.map((post) => <Post key={post.id} post={post} />)}
          </GridContainer>
        </Container>
      ) : null}
    </AppLayout>
  )  
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  };

  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_USER_POSTS_REQUEST,
    data: context.params.id,
  })

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default UserPosts;