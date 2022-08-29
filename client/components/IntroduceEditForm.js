import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeIntroduce } from '../reducers/user';
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

const IntroduceEditForm = ({ setOnEditForm }) => {
  const dispatch = useDispatch();
  
  const { introduce } = useSelector((state) => state.user.me);
  const [introduceInput, setIntroduceInput] = useState(introduce);
  const [isAvailablePosting, setIsAvailablePosting] = useState(false);

  const onChangeIntroduce = useCallback((e) => {
    const {target: {value}} = e;
    setIntroduceInput(e.target.value);
    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 100) {
      setIsAvailablePosting(false);
    };
  }, [introduceInput]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (!isAvailablePosting) {
      return alert("글자수가 너무 많습니다.");
    }
    dispatch(changeIntroduce(introduceInput));
    setOnEditForm(prev => !prev);
  }, [introduceInput]);

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Input
          value={introduceInput}
          onChange={onChangeIntroduce}
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

export default IntroduceEditForm;