import React, { useCallback } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from "react-icons/fa";
import { REMOVE_COMMENT_REQUEST } from '../reducers/post';

const Container = styled.div`
  min-height: 30px;
  padding: 5px 15px 15px 30px;
`;

const InformationContainer = styled.div`
  display: flex;
  height: 20px;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 3px;
`;

const ProfileImageContainer = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 12px;
  border-radius: 50px;
  overflow: hidden;
  float: left;
`;

const Nickname = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const DeleteButton = styled.div`
  display: flex;
  color: #e8537c;
  opacity: 0.6;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Comment = ({ postId, comment }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);

  const onRemoveComment = useCallback(() => {
    dispatch({
      type: REMOVE_COMMENT_REQUEST,
      data: {
        postId: postId,
        commentId: comment.id,
      }
    })
  }, []);

  return (
    <Container>
      <ProfileImageContainer>
          <ProfileImage src={require('../image/user.png')} />
      </ProfileImageContainer>
      <InformationContainer>
        <Nickname>{comment.User.nickname}</Nickname>
        { id && comment.User.id === parseInt(id)
          ? ( <DeleteButton onClick={onRemoveComment}>
                <FaTrashAlt />
              </DeleteButton> )
          : null }
      </InformationContainer>
      <ContentContainer>
        {comment.content}
      </ContentContainer>
    </Container>
  );
};

Comment.propType = {
  comment: PropType.object.isRequired,
};

export default Comment;