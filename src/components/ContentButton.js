import React from 'react';
import styled from 'styled-components';

const ContentButton = ({children, isactive, btntype, clickPath}) => {
  return (
    <>
      <Button
        btntype={btntype}
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
  background-color: ${({btntype, theme, isactive}) =>
          btntype === 'true'
                  ? theme.colors.GRAY
                  : isactive === 'true'
                          ? theme.colors.BLUE2
                          : theme.colors.BLUE1};
`;
