import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';
import Link from 'next/link';
import Router from 'next/router';
import useInput from '../hooks/useInput';

import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaUser, FaSearch } from 'react-icons/fa';
import device from '../utils/device';

const Container = styled.div`
  width: 100%;
  height: 55px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  background-color: white;
  z-index: 5;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);

  @media ${device.mobile} {
    position: static;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Icon = styled.div`
  width: 80px;
  height: 70%;
  font-size: 30px;
  margin-left: 10px;
  color: #1864ab;
  display: flex;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }

  @media ${device.tablet} {
    width: 40px;
    margin-left: 5px;
  }
`;

const SearchForm = styled.form`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 20px;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }

  @media ${device.tablet} {
    width: 350px;
  }

  @media ${device.mobileL} {
    width: 150px;
  }
`;

const SearchBar = styled.input`
  all: unset;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: 'Noto Sans', sans-serif;
  font-family: 'Noto Sans KR', sans-serif;
`;

const SearchIconContainer = styled.button`
  position: absolute;
  top: 7px;
  right: 6px;
  font-size: 22px;
  align-items: center;
  cursor: pointer;
  background: none;
  border: none;
  color: #1864ab;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  width: 80px;
  height: 35px;
  border-radius: 5px;
  text-align: center;
  background-color: ${props => props.backgroundColor};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    transform: scale(0.98);
    opacity: 1;
  }

  @media ${device.tablet} {
    width: 40px;
    font-size: 10px;
    margin-right: 5px;
  }
`;

const AppLayout = ({ children }) => {
  const dispatch = useDispatch();

  const { me } = useSelector((state) => state.user);
  const [tag, onChangeTag] = useInput('');

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    Router.push(`/hashtag/${tag}`);
  }, [tag]); 

  return (
    <>
      <Container>
        <IconContainer>
          <Link href="/">
            <Icon>
              <a>
                <AiFillHome />
              </a>
            </Icon>
          </Link>
          <Link href="/profile">
            <Icon>
              <a>
                <FaUser />
              </a>
            </Icon>
          </Link>
        </IconContainer>
        <SearchForm onSubmit={onSubmit}>
          <SearchBar
            value={tag}
            type="text"
            placeholder="Search..."
            onChange={onChangeTag}
          />
          <SearchIconContainer>
            <FaSearch />
          </SearchIconContainer>
        </SearchForm>
        <ButtonContainer>
          {me ? (
            <Link href="/">
              <Button 
                backgroundColor="#1864ab" 
                onClick={onLogout} 
                style={{marginLeft: '95px'}}>
                <a>LOGOUT</a>
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button backgroundColor="#1864ab"><a>LOGIN</a></Button>
              </Link>
              <Link href="/signup">
                <Button backgroundColor="#2b8a3e"><a>SIGNUP</a></Button>
              </Link>
            </>
          )}
        </ButtonContainer>
      </Container>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;