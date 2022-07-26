import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  justify-content: center;
  z-index: 9;
`;

const FollowListContainer = styled.div`
  width: 800px;
  background-color: white;
  border-radius: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  align-items: center;
  top: 0;
`;

const Tab = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #657785;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-bottom: ${props =>
    props.tabState ? `4px solid #87CEEB` : `1px solid #e6ecf0`};
  &:hover {
    background-color: #87CEEB;
    color: white;
  }
`;

const FollowList = () => {
  return (
    <Container>
      <FollowListContainer onClick={(e) => {e.stopPropagation();}}>
        <MenuContainer>
          <Tab
            tabState={"following"}
            style={{ borderTopLeftRadius: "20px" }}>
            팔로잉
          </Tab>
          <Tab
            tabState={"follower"}
            style={{ borderTopRightRadius: "20px" }}>
            팔로워
          </Tab>
        </MenuContainer>
      </FollowListContainer>
    </Container>
  )
};

export default FollowList;