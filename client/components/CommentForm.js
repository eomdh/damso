import React, { useCallback } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  width: 100%;
  min-height: 50px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;


const CommentForm = () => {
  const onSubmit = useCallback(() => {

  }, [])

  return (
    <Container>
      <FormContainer onSubmit={onSubmit}>

      </FormContainer>
    </Container>
  )
}

export default CommentForm;