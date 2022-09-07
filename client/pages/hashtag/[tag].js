import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../reducers/user';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
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

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #e6ecf0;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const Tag = styled.span`
  font-size: 24px;
  font-weight: 700;
  margin-left: 23px;
`;

const Amount = styled.span`
  font-size: 17px;
  color: #657785;
  padding-top: 8px;
  margin-right: 20px;
`;

const HashtagPosts = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { tag } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: tag,
          });
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts, tag]);

  return (
    <AppLayout>
      <Head>
        <title>
          Damso | #{tag}
        </title>
        <meta name="description" content={`#${tag}`} />
        <meta property="og:title" content={`#${tag}`} />
        <meta property="og:description" content={`#${tag}`} />
        <meta property="og:image" content='https://localhost:3000/favicon.ico' />
        <meta property="og:url" content={`https://localhost:3065/hashtag/${tag}`} />
      </Head>
      <Container>
        <GridContainer>
          <TitleContainer>
            <Tag>#{ tag }</Tag>
            <Amount>{ mainPosts.length }개</Amount>
          </TitleContainer>
          {mainPosts.map((post) => <Post key={post.id} post={post} />)}
        </GridContainer>
      </Container>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  };

  context.store.dispatch({
    type: LOAD_HASHTAG_POSTS_REQUEST,
    data: context.params.tag,
  });

  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default HashtagPosts;