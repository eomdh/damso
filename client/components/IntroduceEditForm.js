import React, { useCallback } from 'react';
import styled from 'styled-components';
import TextArea from 'react-textarea-autosize';
import { BsCheckCircleFill } from 'react-icons/bs';

const FormContainer = styled.div`
  height: 53px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 18px;
`;

const Input = styled(TextArea)`
  font-size: 16px;
  width: 350px;
  max-height: 50px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const IconContainer = styled.button`
  all: unset;
  margin-top: 2px;
  margin-left: 8px;
  font-size: 22px;
  color: #1864ab;
  cursor: pointer;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
`;

const IntroduceEditForm = ({ setOnEditForm, data }) => {
  const onClickEditForm = useCallback(() => {
    setOnEditForm(prev => !prev);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  });
  
  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={ data }
          style={{
            resize: "none",
            outline: "none",
            overflow: "hidden",
          }}/>
          <IconContainer type="submit">
            <BsCheckCircleFill onClick={onClickEditForm}/>
          </IconContainer>
      </Form>
    </FormContainer>
  );
};

export default IntroduceEditForm;