import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import NextButton from "../../components/NextButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validation} from "../Join/Validation";
import LoginInputBasic from "./LoginInputBasic";
import Header from "../../components/Header";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
    setValue, // setValue는 register로 등록한 '값'을 변화시킬 수 있다.
  } = useForm({
    resolver: yupResolver(validation),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const inputValue = watch();

  return (

    <>
      <Header isLogin="true" />
        <AllContainer onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Title>로그인</Title>
            <LoginInputBasic
              name="id"
              placeholder="아이디"
              helperText="영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
              register={register}
              errors={errors}
              setValue={setValue}
              inputValue={inputValue}
            />

            <LoginInputBasic
              name="password"
              placeholder="비밀번호"
              helperText="영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요."
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              setValue={setValue}
              onSubmit={onSubmit}
              inputValue={inputValue}
            />
          </InputContainer>
          {inputValue.id && inputValue.password ? (
            <NextButton type="submit" children="로그인" isfull="true"></NextButton>
          ) : (
            <NextButton type="submit" children="로그인"></NextButton>
          )}
        </AllContainer>

        {/*<LoginContainer>*/}
        {/*  <Title>로그인</Title>*/}
        {/*  <IDBox>*/}
        {/*    <SignInputBasic*/}
        {/*      placeholder='아이디'*/}
        {/*      name='id'*/}
        {/*      helperText='영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요.'*/}
        {/*    />*/}
        {/*  </IDBox>*/}
        {/*  <PWBox>*/}
        {/*    <SignInputBasic*/}
        {/*      placeholder='비밀번호'*/}
        {/*      name='password'*/}
        {/*      helperText='영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요.'*/}
        {/*    />*/}
        {/*  </PWBox>*/}
        {/*  <NextButton*/}
        {/*  >로그인</NextButton>*/}
        {/*</LoginContainer>*/}
        {/*<SignUp>회원가입</SignUp>*/}
      </>
  );
};

export default Login;

const AllContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 134px;
`
const InputContainer = styled.div`
  width: 540px;
  height: 592px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.div`
  width: 199px;
  height: 74px;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 65px;
`

const ErrorText = styled.div`
  text-align: left;
  width: 495px;
  height: 19px;
`


// const LoginContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `
//
// const Title = styled.div`
//   font-size: 54px;
//   font-weight: 600;
//   margin: 145px 0 65px 0;
// `
//
// const IDBox = styled.div`
//   margin-bottom: 21px;
// `
//
// const PWBox = styled.div`
//   margin-bottom: 61px;
// `
//
// const SignUp = styled.div`
//   float: right;
//   margin-right: 685px;
//   margin-top: 61px;
//   font-size: 20px;
//   font-weight: 600;
//   color: ${({theme}) => theme.colors.GRAY};
// `