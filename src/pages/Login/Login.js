import React from 'react';
import styled from "styled-components";
import SignInputBasic from "../../components/SignInputBasic";
import NextButton from "../../components/NextButton";

const Login = () => {
  return (
    <>
      <LoginContainer>
        <SignInputBasic
          placeholder='아이디'
          name='id'
          helperText='영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요.'
        />
        <SignInputBasic
          placeholder='비밀번호'
          name='password'
          helperText='영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.'
        />
        <NextButton isfull='true'>로그인</NextButton>
      </LoginContainer>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ;
`