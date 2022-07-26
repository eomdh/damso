import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FaUser, FaSearch } from 'react-icons/fa';

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
`;

const SearchForm = styled.form`
  position: relative;
  align-items: center;
  justify-content: center;
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
`;

const SearchBar = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  font-size: 16px;
  display: flex;
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 19px;
  display: flex;
  align-items: center;
  cursor: pointer;
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
`;

const AppLayout = ({ children }) => {  
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
        <SearchForm>
          <SearchBar type="text" placeholder="Search..." />
          <SearchIconContainer>
            <FaSearch></FaSearch>
          </SearchIconContainer>
        </SearchForm>
        <ButtonContainer>
          <Link href="/login">
            <Button backgroundColor="#1864ab"><a>LOGIN</a></Button>
          </Link>
          <Link href="/signup">
            <Button backgroundColor="#2b8a3e"><a>SIGNUP</a></Button>
          </Link>
        </ButtonContainer>
      </Container>
      {children}
    </>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
