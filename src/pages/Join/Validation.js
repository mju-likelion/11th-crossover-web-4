import * as yup from 'yup';

export const validation = yup.object().shape({
  id: yup
    .string()
    .required('아이디를 입력해주세요.')
    .matches(/^[A-Za-z0-9]+$/, '사용하실 수 없는 아이디 입니다.')
    .min(5, '사용하실 수 없는 아이디 입니다.')
    .max(10, '사용하실 수 없는 아이디 입니다.'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,14})/,
      '사용하실 수 없는 비밀번호 입니다.'
    )
    .min(8, '사용하실 수 없는 비밀번호 입니다.')
    .max(14, '사용하실 수 없는 비밀번호 입니다.'),
  email: yup.string().email('이메일 형식에 맞지 않습니다.'),
});
