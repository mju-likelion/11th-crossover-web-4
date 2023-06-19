import React from 'react';
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <LoginBox>
        <LoginTitle>로그인</LoginTitle>
      </LoginBox>
    </>
  );
};

export default Login;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: pink;
`

const LoginTitle = styled.h3`
  font-size: 54px;
  font-weight: 600;
  color: black;
  margin-top: 145px;
`