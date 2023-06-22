import styled from 'styled-components';
import cancelIcon from '../../assets/images/cancelicon.svg';
import successIcon from '../../assets/images/successicon.svg';
import errorIcon from '../../assets/images/erroricon.svg';

const SignInputBasic = ({
  name,
  placeholder,
  helperText,
  register,
  handleSubmit,
  errors,
  setValue,
  onSubmit,
  inputValue,
}) => {
  return (
    <>
      <AllContainer onSubmit={handleSubmit(onSubmit)}>
        <BoxWrapper
          iserror={errors[name] ? 'true' : 'false'}
          issuccess={!errors[name] && inputValue[name] ? 'true' : 'false'}
          htmlFor={name} //react에서는 htmlFor로 id와 연결, 클릭 부분 확장
        >
          <InputBox>
            <SignInput
              type="text"
              placeholder={placeholder}
              name={name}
              id={name}
              {...register(name)}
            />

            {inputValue[name] && !errors[name] && (
              <IsSuccessIcon src={successIcon} alt="successIcon" />
            )}
            {errors[name] && <IsSuccessIcon src={errorIcon} alt="errorIcon" />}
            {/* 중첩 삼항 연산자에서 변경! */}

            {inputValue[name] ? (
              <CancelIcon
                src={cancelIcon}
                alt="cancelIcon"
                onClick={() => {
                  setValue(name, ''); //어떤 값을, 뭐로 변경시킬지
                  errors[name] = '';
                }}
              />
            ) : (
              ''
            )}
          </InputBox>
        </BoxWrapper>
        {errors[name] && <HelperText>{errors[name].message}</HelperText>}
        {!errors[name] && inputValue[name] && ''}
        {!errors[name] && !inputValue[name] && (
          <HelperText>{helperText}</HelperText>
        )}
        {/* 중첩 삼항 연산자에서 변경 */}
      </AllContainer>
    </>
  );
};
const AllContainer = styled.form`
  width: 540px;
  height: 124px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;
`;
const BoxWrapper = styled.label`
  width: 540px;
  height: 90px;
  border: 2px solid
    ${({ iserror, theme, issuccess }) =>
      iserror === 'true'
        ? theme.colors.RED
        : issuccess === 'true'
        ? theme.colors.GREEN
        : theme.colors.GRAY};

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

const IsSuccessIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const CancelIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: 8px;
`;
const HelperText = styled.div`
  width: 495px;
  height: 19px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  font-weight: 500;
`;
export default SignInputBasic;