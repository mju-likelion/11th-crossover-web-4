import styled from 'styled-components';
import cancelIcon from '../../assets/images/cancelicon.svg';
import successIcon from '../../assets/images/successicon.svg';
import errorIcon from '../../assets/images/erroricon.svg';

const SignInputBasic = ({
  name,
  placeholder,
  helperText,
  register,
  errors,
  setValue,
  inputValue,
}) => {
  return (
    <>
      <AllContainer >
        <BoxWrapper
          iserror={errors[name] ? 'true' : 'false'}
          issuccess={!errors[name] && inputValue[name] ? 'true' : 'false'}
          htmlFor={name} 
        >
          <InputBox>
            <SignInput
              type={name}
              placeholder={placeholder}
              name={name}
              id={name}
              {...register(name)}
            />

            {inputValue[name] && !errors[name] && (
              <IsSuccessIcon src={successIcon} alt="successIcon" />
            )}
            {errors[name] && <IsSuccessIcon src={errorIcon} alt="errorIcon" />}

            {inputValue[name] ? (
              <CancelIcon
                src={cancelIcon}
                alt="cancelIcon"
                onClick={() => {
                  setValue(name, ''); 
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
