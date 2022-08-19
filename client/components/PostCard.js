import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProfileImage from './ProfileImage';
import PostImages from './PostImages';
import Comment from './Comment';
import CommentForm from './CommentForm';
import { FaTrashAlt, FaRegCommentDots } from "react-icons/fa";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  max-height: 700px;
  border-bottom: 5px solid #e6ecf0;
  padding: 10px;
`; 

const ProfileImageContainer = styled.div`
  width: 55px;
  height: 55px;
  margin-right: 18px;
  border-radius: 50px;
  overflow: hidden;
  float: left;
`;

const PostInformationContainer = styled.div`
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

const Description = styled.span`
  width: 85%;
  padding-left: 10px;
  overflow: auto;
  min-height: 20px;
  margin-top: 20px;
  white-space: pre;
  line-height: 18px;
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none !important; // 윈도우 크롬 등
  }
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
  margin-left: -2px;
  margin-bottom: 5px;
  font-size: 16px;
  opacity: 0.7;
`;

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);
  
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, [liked]);

  const onToggleCommnet = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, [commentFormOpend]);

  return (
    post && (
      <Container>
        <ProfileImageContainer>
          <ProfileImage src={require('../image/user.png')} /> 
        </ProfileImageContainer>
        <PostInformationContainer>
          <Nickname>{ post.User.nickname }</Nickname>
          {id && post.User.id === id
            ? ( <DeleteButton>
                  <FaTrashAlt />
                </DeleteButton> ) 
            : null 
          }
        </PostInformationContainer>
        <ContentContainer>
          {post.Images && <PostImages images={post.Images} />}
          <Description>
            {post.content}
          </Description>
        </ContentContainer>
        <UnderSideContainer>
          <IconsContainer onClick={onToggleLike}>
            {liked 
             ? <IoIosHeartEmpty color="red" />
             : <IoIosHeart color="red" />
            }
          </IconsContainer>
          <IconsContainer onClick={onToggleCommnet}>
            <FaRegCommentDots color="#3498db"/>
          </IconsContainer>
          <Amount>{post.Comments.length}</Amount>
        </UnderSideContainer>
        {commentFormOpend && (
          <>
            {post.Comments && <Comment comment={post.Comments} />}
            <CommentForm />
          </>
        )}
      </Container>
    )
  )
};

export default PostCard;