import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_INTRODUCE_REQUEST } from '../reducers/user';
import TextArea from 'react-textarea-autosize';
import useInput from '../hooks/useInput';

import styled from 'styled-components';
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
  font-family: 'Noto Sans KR', sans-serif;
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

const IntroduceEditForm = ({ setOnEditForm }) => {
  const dispatch = useDispatch();
  
  const { introduce } = useSelector((state) => state.user.me);
  const [introduceInput, onChangeIntroduceInput] = useInput(introduce);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (introduceInput.length > 35) {
      return alert("글자수가 너무 많습니다.");
    };

    dispatch({
      type: CHANGE_INTRODUCE_REQUEST,
      data: introduceInput,
    });
    
    setOnEditForm(prev => !prev);
  }, [introduceInput]);

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Input
          value={introduceInput}
          onChange={onChangeIntroduceInput}
          style={{
            resize: "none",
            outline: "none",
            overflow: "hidden",
          }}/>
          <IconContainer type="submit">
            <BsCheckCircleFill />
          </IconContainer>
      </Form>
    </FormContainer>
  );
};

IntroduceEditForm.propTypes = {
  setOnEditForm: PropTypes.func.isRequired,
};

export default IntroduceEditForm;