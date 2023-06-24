import styled from "styled-components";
import NextButton from "../../components/NextButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginInputBasic from "./LoginInputBasic";
import { useNavigate } from "react-router-dom";
import { validation } from "./Validation";
import {AxiosLogin} from "../../api/Login";
const Login = () => {
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(validation),
  });

  const inputValue = watch();
  const goSignUp = () => {
    navigate(`/join`);
  }

  const callbackFunctions = {
    navigateSuccess : ()=> navigate('/')
  };
  const onSubmit = (data) => {
    AxiosLogin(data, callbackFunctions);
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
            <NextButton
              type="submit"
            children="로그인"
            isfull="true"
            ></NextButton>
            ) : (
            <NextButton type="submit" children="로그인"></NextButton>
            )}
        </Button>
      </AllContainer>
      <SignUpLink onClick={goSignUp}>회원가입</SignUpLink>
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
`;
const InputContainer = styled.div`
  width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  width: 199px;
  height: 74px;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 65px;
`;
const Button = styled.div`
  //margin-top: 58px;
`

const SignUpLink = styled.p`
  float: right;
  margin-right: 705px;
  margin-top: 31px;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.GRAY};
  cursor: pointer;
`