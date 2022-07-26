import React from 'react';
import { useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import Profile from './';

const UserInfo = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Profile userInfo={ userInfo } />
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
  
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default UserInfo;
