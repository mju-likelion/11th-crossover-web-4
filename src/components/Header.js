import React, {useState} from 'react';
import styled from "styled-components";
import Airplane from "../assets/images/airplaneicon.svg";
import Logout from "../assets/images/logout icon.svg";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <HeaderBar>
        <Title>비행기레터</Title>
        <AirplanIcon src={Airplane}/>
        {isLogin && <LogoutIcon src={Logout}/>}
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

const AirplanIcon = styled.img`
  margin: 42px 0 43px 10px;
`

const LogoutIcon = styled.img`
  width: 29px;
  height: 29px;
  margin: 44px 363px 43px auto;
`