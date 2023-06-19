import React, {useState} from 'react';
import styled from "styled-components";
import Airplane from "../assets/images/airplaneIcon.svg";
import Logout from "../assets/images/logout icon.svg";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <HeaderBar>
        <Logo src={Airplane} alt="logo" />
        {isLogin && <LogoutIcon src={Logout} alt="logout"/>}
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

const Logo = styled.img`
  width: 174px;
  height: 34px;
  margin: 42px 0 43px 363px;
`

const LogoutIcon = styled.img`
  width: 29px;
  height: 29px;
  margin: 44px 363px 43px auto;
`