import React from 'react';
import styled from "styled-components";
import {ReactComponent as Airplane} from "../assets/images/airplaneicon.svg";

const Header = () => {
  return (
    <>
      <HeaderBar>
        <Title>비행기레터</Title>
        <AirplanIcon><Airplane /></AirplanIcon>
      </HeaderBar>
    </>
  );
};

export default Header;

const HeaderBar = styled.div`
  display: flex;
  width: 100%;
  height: 116px;
  border-bottom: 1px solid ${({theme}) => theme.colors.GRAY};
`

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  line-height: 38px;
  color: ${({theme}) => theme.colors.BLUE2};
  margin: 36px 0 42px 363px;
`

const AirplanIcon = styled.div`
  width: 31.94px;
  height: 31.44px;
  margin: 41.48px 0 43.08px 9.73px;
`