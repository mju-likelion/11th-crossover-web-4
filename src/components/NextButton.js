import React from 'react';
import styled from 'styled-components';

const NextButton = ({ children, isfull, clickPath }) => {
  return (
    <>
      <Button isfull={isfull} onClick={clickPath}>
        {children}
      </Button>
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
  background-color: ${({ isfull, theme }) =>
    isfull === 'true' ? theme.colors.BLUE2 : theme.colors.BLUE1};
`;
