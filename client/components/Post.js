import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../reducers/post';
import ProfileImage from './ProfileImage';
import PostImages from './PostImages';
import PostContent from './PostContent';
import PostUpdateForm from './PostUpdateForm';
import Comment from './Comment';
import CommentForm from './CommentForm';
import moment from 'moment';

import styled from 'styled-components';
import { FaTrashAlt, FaPen, FaRegCommentDots } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 10px solid #e6ecf0;
  padding: 15px 0px;
`; 

const ProfileImageContainer = styled.div`
  width: 55px;
  height: 55px;
  margin: 0px 15px;
  border-radius: 50px;
  overflow: hidden;
  float: left;
`;

const InformationContainer = styled.div`
  height: 52px;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-top: 3px;
`;

const ALink = styled.a`
  color: black;
  cursor: pointer;
`;

const Nickname = styled.span`
  margin-top: 2px;
  font-size: 18px;
  font-weight: 600;
`;

const Date = styled.span`
  all: unset;
  position: absolute;
  margin-top: 28px;
  margin-left: 2px;
  color: #657785;
  font-size: 15px;
`;

const OverIcons = styled.div`
  display: flex;
  margin-top: 5px;
  margin-right: 20px
`;

const UpdateButton = styled.div`
  color: #1864ab;
  opacity: 0.6;
  font-size: 20px;
  cursor: pointer;
  margin-right: 12px;
  transition: all 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const DeleteButton = styled.div`
  color: #e8537c;
  opacity: 0.6;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 85%;
  min-height: 20px;
  margin-top: 35px;
  line-height: 18px;
  font-size: 17px;
`;

const UnderSideContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
  margin-right: 20px;
`;

const UnderIcons = styled.div`
  color: ${props => props.color};
  opacity: 0.7;
  padding: 7px;
  font-size: 20px;
  transition: all 0.1s linear;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const Amount = styled.div`
  margin: 0px 10px 5px -3px;
  font-size: 16px;
  opacity: 0.7;
`;

const CommentContainer = styled.div`
  width: 100%;
  max-height: 500px;
  margin: 10px 0px 0px 0px;
  padding-top: 10px;
  border-top: 2px solid #e6ecf0;
`;

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const liked = post.Likers.find((v) => v.id === id);
  const [editMode, setEditMode] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);
  const postDate = (post.createdAt === post.updatedAt) ? post.createdAt : post.updatedAt;
  const updated = (post.createdAt === post.updatedAt) ? false : true;

  const onChangeEditMode = useCallback(() => {
    setEditMode(true);
  }, [editMode]);

  const onRemovePost = useCallback(() => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch({
        type: REMOVE_POST_REQUEST,
        data: post.id,
      });
    } else {
      return;
    };
  }, []);

  const onLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    };
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다");
    };
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, [commentFormOpend]);

  return (
    post && (
      <Container>
        <ProfileImageContainer>
          <Link href="/profile/[id]" as={`/profile/${post.User.id}`}>
            <a>
              <ProfileImage path={post.User.profileImagePath ? post.User.profileImagePath : null}/>
            </a>
          </Link>
        </ProfileImageContainer>
        <InformationContainer>
          <Link href="/profile/[id]" as={`/profile/${post.User.id}`}>
            <ALink>
              <Nickname>{post.User.nickname}</Nickname>
            </ALink>
          </Link>
          <Date>
            {moment(postDate).format('YYYY/MM/DD h:mm')}
            {updated ? " (수정됨)" : null}
          </Date>
          {id && post.User.id === parseInt(id) && !editMode
            ? <OverIcons>
                <UpdateButton onClick={onChangeEditMode}>
                  <FaPen />
                </UpdateButton>
                <DeleteButton onClick={onRemovePost}>
                  <FaTrashAlt />
                </DeleteButton> 
              </OverIcons>
            : null 
          }
        </InformationContainer>
        {editMode
        ? <PostUpdateForm 
            post={post}
            setEditMode={setEditMode}
          />
        : <>
            <ContentContainer>
              {post.Images.length >= 1 && <PostImages images={post.Images} />}
              <Content>
                <PostContent content={post.content} />
              </Content>
            </ContentContainer>
            <UnderSideContainer>
              <UnderIcons>
                {liked 
                ? <IoIosHeart color="red" onClick={onUnlike} />
                : <IoIosHeartEmpty color="red" onClick={onLike} />
                }
              </UnderIcons>
              <Amount>{post.Likers.length}</Amount>
              <UnderIcons onClick={onToggleComment}>
                <FaRegCommentDots color="#3498db" />
              </UnderIcons>
              <Amount>{post.Comments.length}</Amount>
            </UnderSideContainer>
          </>
        }
        {commentFormOpend && (
          <>
            <CommentContainer>
              {post.Comments.map((v) => <Comment key={v.id} comment={v} postId={post.id} />)}
            </CommentContainer>
            <CommentForm post={post}/>
          </>
        )}
      </Container>
    )
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Post;