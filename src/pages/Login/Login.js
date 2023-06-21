import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SignInputBasic from "../../components/SignInputBasic";
import NextButton from "../../components/NextButton";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validation} from "../Join/Validation";

const Login = () => {
  // const [isActive, setIsActive] = useState(false);
  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");
  const { formState: { errors} } = useForm( {
    resolver: yupResolver(validation), mode: 'onChange'});
  // const changeId = (e) => {
  //   setId(e.target.value);
  // };
  // const changePw = (e) => {s
  //   setPw(e.target.value);
  // };
  // useEffect(() => {
  //   console.log(id);
  // }, [id]);
  // useEffect(() => {
  //   console.log(pw);
  // }, [pw]);

  return (
    <>
      <LoginContainer>
        <Title>로그인</Title>
        <IDBox>
          <SignInputBasic
            placeholder='아이디'
            name='id'
            helperText='영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요.'
            // onChange={changeId}
          />
        </IDBox>
        <PWBox>
          <SignInputBasic
            placeholder='비밀번호'
            name='password'
            helperText='영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.'
            // onChange={changePw}
          />
        </PWBox>
        <NextButton
          // isfull={errors.id && errors.password ? false: true}
        >로그인</NextButton>
      </LoginContainer>
      <SignUp>회원가입</SignUp>
    </>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  font-size: 54px;
  font-weight: 600;
  margin: 145px 0 65px 0;
`

const IDBox = styled.div`
  margin-bottom: 21px;
`

const PWBox = styled.div`
  margin-bottom: 61px;
`

const SignUp = styled.div`
  float: right;
  margin-right: 685px;
  margin-top: 61px;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.GRAY};
`