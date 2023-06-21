import styled from 'styled-components';
import { data } from '../assets/data/AgreeTerms';
import SignInputBasic from './SignInputBasic';
import NextButton from './NextButton';
import { useEffect, useState } from 'react';

const SignUp = () => {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    setIsValid(!isValid);
  }, []);

  return (
    <AllContainer>
      <InputContainer>
        <Title>회원가입</Title>
        <SignInputBasic
          name="id"
          placeholder="아이디"
          helperText="영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요."
        />
        <SignInputBasic
          name="password"
          placeholder="비밀번호"
          helperText="영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여 주세요."
        />
        <SignInputBasic
          name="email"
          placeholder="이메일"
          helperText="사용하실 이메일을 입력해주세요."
        />
      </InputContainer>
      <AgreeContainer>
        <AgreeTop>
          <AgreeTitle>
            <Essential>[필수]</Essential> 개인정보보호정책
          </AgreeTitle>
          <AgreeCheck>
            <CheckTitle>약관동의</CheckTitle>
            <CheckBox type="checkbox" />
          </AgreeCheck>
        </AgreeTop>
        <AgreeContentWrapper>
          <AgreeContent>{data}</AgreeContent>
        </AgreeContentWrapper>
      </AgreeContainer>
      <NextButton children="완료하기"></NextButton>
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
const CheckTitle = styled.div`
  width: 78px;
  /* 본 74px */
  height: 24px;
  font-size: 20px;
  font-weight: 600;
`;
const CheckBox = styled.input`
  width: 32px;
  height: 32px;
  margin: 0;
`;
const AgreeContentWrapper = styled.div`
  width: 1113px;
  height: 342px;
  border: 2px solid #717171;
  border-radius: 25px;
  padding: 19px 3px 19px 30px;
`;
const AgreeContent = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: green; */
  overflow-y: scroll;
  white-space: pre-line;
  /* line-height: 22px; */
  font-size: 16px;
  /* 줄 바꿈만 허용, 나머지 연속 띄어쓰기와 들여쓰기는 무시 */

  &::-webkit-scrollbar-thumb {
    background: #e89a3e;
    border-radius: 12px;
  }
`;
