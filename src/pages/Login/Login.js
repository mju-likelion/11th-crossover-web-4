import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import NextButton from "../../components/NextButton";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validation} from "../Join/Validation";
import LoginInputBasic from "./LoginInputBasic";
import Header from "../../components/Header";
import {useNavigate} from "react-router-dom";

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

  const navigate = useNavigate();
  const goList = () => {
    navigate(`/`);
  }

  return (
    <>
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
            errors={errors}
            setValue={setValue}
            inputValue={inputValue}
          />
        </InputContainer>
        <Button>
        {inputValue.id && inputValue.password ? (
          <NextButton type="submit" children="로그인" isfull="true"></NextButton>
        ) : (
          <NextButton type="submit" children="로그인"></NextButton>
        )}
        </Button>
      </AllContainer>
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

const Button = styled.div`
  margin-top: 58px;
`