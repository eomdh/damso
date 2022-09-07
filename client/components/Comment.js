import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_COMMENT_REQUEST } from '../reducers/post';
import ProfileImage from './ProfileImage';
import moment from 'moment';

import styled from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";

const Container = styled.div`
  min-height: 30px;
  padding: 5px 15px 15px 30px;
`;

const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  align-items: center;
  margin: 3px 10px 0px 10px;
`;

const ProfileImageContainer = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 12px;
  border-radius: 50px;
  overflow: hidden;
  float: left;
`;

const ALink = styled.a`
  color: black;
  cursor: pointer;
`;

const Nickname = styled.span`
  font-size: 17px;
  font-weight: 600;
`;

const Date = styled.span`
  margin-left: 8px;
  color: #657785;
  font-size: 13px;
`;

const DeleteButton = styled.div`
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
  padding-top: 15px;
  font-size: 15px;
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
        <Link href="/profile/[id]" as={`/profile/${comment.User.id}`}>
          <a>
            <ProfileImage path={comment.User.profileImagePath ? comment.User.profileImagePath : null} />
          </a>
        </Link>
      </ProfileImageContainer>
      <InformationContainer>
        <>
          <Link href="/profile/[id]" as={`/profile/${comment.User.id}`}>
            <ALink><Nickname>{comment.User.nickname}</Nickname></ALink>
          </Link>
          <Date>{ moment(comment.createdAt).format('YYYY/MM/DD h:mm') }</Date>
        </>
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

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};

export default Comment;