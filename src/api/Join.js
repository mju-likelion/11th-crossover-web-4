import { Axios } from './Axios';

export const AxiosJoin = (data, callbackFunction) => {
  const { id, password, email } = data;
  Axios.post('/api/auth/register', {
    id,
    password,
    email,
  })
    .then((res) => {
      callbackFunction();
      console.log(res);
    })

    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    });
};
