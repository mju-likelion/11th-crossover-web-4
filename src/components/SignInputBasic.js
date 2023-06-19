import styled from 'styled-components';

const SignInputBasic = () => {
  return (
    <>
      <AllContainer>
        <BoxWrapper>
          <InputBox>
            <SignInput placeholder="기본값" />
            <SignIcon />
          </InputBox>
        </BoxWrapper>
        <HelperText>helper text</HelperText>
      </AllContainer>
    </>
  );
};
const AllContainer = styled.div`
  width: 540px;
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxWrapper = styled.div`
  width: 540px;
  height: 90px;
  border: 2px solid ${(props) => props.theme.colors.GRAY};
  background-color: #ffffff;
  padding: 29px 31px;
  margin-bottom: 10px;
  border-radius: 25px;
`;
const InputBox = styled.div`
  width: 483px;
  height: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const SignInput = styled.input`
  width: 440px;
  height: 24px;
  font-size: 20px;
  border: none;
`;
const SignIcon = styled.div`
  width: 32px;
  height: 32px;
`;

const HelperText = styled.div`
  width: 495px;
  height: 19px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  font-weight: 500;
`;
export default SignInputBasic;
