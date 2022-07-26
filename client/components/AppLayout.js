import React from 'react';
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

const LinkIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LinkIcon = styled.div`
  width: 80px;
  height: 70%;
  font-size: 30px;
  margin-left: 10px;
  color: #70a1ff;
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
  font-size: 13px;
  display: flex;
`;

const SearchIconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  font-size: 19px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #70a1ff;
`;

const AppLayout = ({ children }) => {
  return (
    <>
      <Container>
        <LinkIconContainer>
          <Link href="/">
            <LinkIcon>
              <a>
                <AiFillHome />
              </a>
            </LinkIcon>
          </Link>
          <Link href="/profile">
            <LinkIcon>
              <a>
                <FaUser />
              </a>
            </LinkIcon>
          </Link>
        </LinkIconContainer>
        <SearchForm>
          <SearchBar type="text" />
          <SearchIconContainer>
            <FaSearch></FaSearch>
          </SearchIconContainer>
        </SearchForm>

      </Container>
      {children}
    </>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
