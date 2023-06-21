import React from 'react';
import styled from "styled-components";
import {Theme} from "../styles/Theme"; //?

const NextButton = ({children, isfull}) => {
  return (
    <>
      <Button isfull={isfull}>{children}</Button>
    </>
  );
};
export default NextButton;

const Button = styled.button`
  width: 540px;
  height: 90px;
  border-radius: 25px;
  color: white;
  font-size: 36px;
  line-height: 44px;
  background-color: ${({isfull, theme}) => isfull==="true" ? theme.colors.BLUE2 : theme.colors.BLUE1};
`