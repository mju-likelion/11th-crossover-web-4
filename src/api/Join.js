import { Axios } from './Axios';

export const AxiosJoin = (data, callbackFunction) => {
  const { id, password, email } = data;
  Axios.post('/api/auth/register', {
    id,
    password,
    email,
    // 구조분해할당 + key랑 value가 동일 시 요약 가능
  })
    .then((res) => {
      callbackFunction();
    })

    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    });
};
