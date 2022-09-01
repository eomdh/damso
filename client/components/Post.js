import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import PostImages from './PostImages';
import PostContent from './PostContent';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../reducers/post';
import { FaTrashAlt, FaRegCommentDots } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  border-bottom: 10px solid #e6ecf0;
  padding: 10px;
`; 

const ProfileImageContainer = styled.div`
  width: 55px;
  height: 55px;
  margin-right: 10px;
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

const Nickname = styled.span`
  margin-top: 3px;
  font-size: 18px;
  font-weight: 600;
`;

const Date = styled.span`
`;

const DeleteButton = styled.div`
  display: flex;
  color: #e8537c;
  opacity: 0.6;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  margin-right: 16px;
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
  margin-top: 20px;
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

const IconsContainer = styled.div`
  color: ${props => props.color};
  opacity: 0.7;
  padding: 7px;
  border-radius: 50%;
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
  margin: 10px 0px 0px -10px;
  padding-top: 10px;
  border-top: 2px solid #e6ecf0;
`;

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const liked = post.Likers.find((v) => v.id === id);
  const [commentFormOpend, setCommentFormOpend] = useState(false);
  
  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
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
          <ProfileImage src={require('../image/user.png')} />
        </ProfileImageContainer>
        <InformationContainer>
          <Nickname>{post.User.nickname}</Nickname>
          {id && post.User.id === parseInt(id)
            ? ( <DeleteButton onClick={onRemovePost}>
                  <FaTrashAlt />
                </DeleteButton> )
            : null 
          }
        </InformationContainer>
        <ContentContainer>
          {post.Images && <PostImages images={post.Images} />}
          <Content>
            <PostContent content={post.content} />
          </Content>
        </ContentContainer>
        <UnderSideContainer>
          <IconsContainer>
            {liked 
             ? <IoIosHeart color="red" onClick={onUnlike}/>
             : <IoIosHeartEmpty color="red" onClick={onLike} />
            }
          </IconsContainer>
          <Amount>{post.Likers.length}</Amount>
          <IconsContainer onClick={onToggleComment}>
            <FaRegCommentDots color="#3498db"/>
          </IconsContainer>
          <Amount>{post.Comments.length}</Amount>
        </UnderSideContainer>
        {commentFormOpend && (
          <>
            <CommentContainer>
              {post.Comments.map((v) => <Comment comment={v} postId={post.id} />)}
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
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default Post;