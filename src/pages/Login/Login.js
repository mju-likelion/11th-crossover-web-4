import React from 'react';
import styled from "styled-components";
import SignInputBasic from "../../components/SignInputBasic";
import NextButton from "../../components/NextButton";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <LoginTitle>로그인</LoginTitle>
        <IDBox>
          <SignInputBasic/>
        </IDBox>
        <PWBox>
          <SignInputBasic/>
        </PWBox>
        <Button>
          <NextButton isfull="false">로그인</NextButton>
        </Button>
      </LoginContainer>


    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const IDBox = styled.div`
  background-color: antiquewhite;
  margin-top: 65px;
`

const PWBox = styled.div`
  background-color: aquamarine;
  margin-top: 21px;
`

const Button = styled.div`
  background-color: mediumpurple;
  margin-top: 61px;
`