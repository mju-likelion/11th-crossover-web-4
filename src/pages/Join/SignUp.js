import styled from 'styled-components';
import { DATA } from '../../assets/data/AgreeTerms';
import SignInputBasic from './SignInputBasic';
import NextButton from '../../components/NextButton';
import { validation } from './Validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import checkBox from '../../assets/images/checkbox.svg';
import noncheck from '../../assets/images/noncheck.svg';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    // setValue는 register로 등록한 '값'을 변화시킬 수 있다.
  } = useForm({
    resolver: yupResolver(validation),
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const inputValue = watch();

  const [isCheck, setIsCheck] = useState(false);
  const checked = () => {
    setIsCheck(!isCheck);
  };

  return (
    <AllContainer>
      <InputContainer>
        <Title>회원가입</Title>
        <SignInputBasic
          name="id"
          placeholder="아이디"
          helperText="영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요."
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          setValue={setValue}
          onSubmit={onSubmit}
          inputValue={inputValue}
        />
        <SignInputBasic
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
        <SignInputBasic
          name="email"
          placeholder="이메일"
          helperText="사용하실 이메일을 입력해주세요."
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          setValue={setValue}
          onSubmit={onSubmit}
          inputValue={inputValue}
        />
      </InputContainer>
      <AgreeContainer>
        <AgreeTop>
          <AgreeTitle>
            <Essential>[필수]</Essential> 개인정보보호정책
          </AgreeTitle>
          <AgreeCheck>
            <CheckTitle htmlFor="check">약관동의</CheckTitle>
            {isCheck ? (
              <CheckBox onClick={checked} id="check" src={checkBox} />
            ) : (
              <CheckBox onClick={checked} id="check" src={noncheck} />
            )}
          </AgreeCheck>
        </AgreeTop>
        <AgreeContentWrapper>
          <AgreeContent>{DATA}</AgreeContent>
        </AgreeContentWrapper>
      </AgreeContainer>
      {inputValue.id && inputValue.password && inputValue.email && isCheck ? (
        <NextButton children="완료하기" isfull="true"></NextButton>
      ) : (
        <NextButton children="완료하기"></NextButton>
      )}
    </AllContainer>
  );
};

export default SignUp;

const AllContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 134px;
`;

const InputContainer = styled.div`
  width: 540px;
  height: 592px;
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
const AgreeContainer = styled.div`
  width: 1166px;
  height: 410px;
  padding: 0 34px 24px 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 115px;
`;
const AgreeTop = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const Essential = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.GREEN};
`;
const AgreeTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const AgreeCheck = styled.div`
  width: 116px;
  /* 본 112px */
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const CheckTitle = styled.label`
  width: 78px;
  /* 본 74px */
  height: 24px;
  font-size: 20px;
  font-weight: 600;
`;
const CheckBox = styled.img`
  width: 32px;
  height: 32px;
  margin: 0;
`;
const AgreeContentWrapper = styled.div`
  width: 1113px;
  height: 342px;
  border: 2px solid #717171;
  border-radius: 25px;
  padding: 19px 14px 19px 30px;
`;
const AgreeContent = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 20px;
  line-height: 22px;
  font-size: 16px;
  white-space: pre-line;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.GRAY}; /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
    height: 50%;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff; /*스크롤바 뒷 배경 색상*/
  }
`;
