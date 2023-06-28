import React from 'react';
import styled from 'styled-components';
// import {Theme} from "../styles/Theme";

const ContentButton = ({ children, isactive, onBtn, clickPath }) => {
  return (
    <>
      <Button
        // type="submit"
        onBtn={onBtn}
        isactive={isactive}
        onClick={clickPath}
      >
        {children}
      </Button>
    </>
  );
};

export default ContentButton;

const Button = styled.button`
  width: 233px;
  height: 70px;
  border-radius: 25px;
  color: white;
  font-size: 21px;
  line-height: 44px;
  background-color: ${({ onBtn, theme, isactive }) =>
    onBtn === 'true'
      ? theme.colors.GRAY
      : isactive === 'true'
      ? theme.colors.BLUE2
      : theme.colors.BLUE1};
`;
