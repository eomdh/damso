import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import TextArea from 'react-textarea-autosize';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Form = styled.form`
  width: 100%;
  min-height: 50px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentInput = styled(TextArea)`
  width: 90%;
  border: none;
  padding: 8px;
  font-size: 16px;
  min-height: 40px;
  max-height: 300px;
  border-radius: 10px;
  background-color: #f8f9fa;
`;

const CommentUpdateForm = ({ commentId, commentContent, setEditMode }) => {
  const dispatch = useDispatch();
  const [commentInput, setCommentInput] = useState(commentContent);

  const onChangeComment = useCallback((e) => {
    const {target: {value}} = e;
    setCommentInput(e.target.value);
    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    };
  }, [commentInput]);

  const onSubmit = useCallback(() => {
    dispatch ({
      type: UPDATE_COMMENT_REQUEST,
      data: {
        commentId: commentId,
        content: ContentInput,
      }
    });
  });

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <ContentInput 
          value={commentInput}
          onChange={onChangeComment}
          style={{
            resize: "none",
            outline: "none",
            overflow: "hidden",
          }}
        />
      </Form>
    </Container>
  );
};

CommentUpdateForm.propTypes = {
  commentId: PropTypes.number.isRequired,
  commentContent: PropTypes.string.isRequired,
  setEditMode: PropTypes.func.isRequired,
};

export default CommentUpdateForm;