import {Axios} from "./Axios";

export const AxiosLogin = (data, callbackFunctions) => {
  const {navigateSuccess} = callbackFunctions;
  const { id, password } = data;

  Axios.post(`/api/auth/login`, {
    id,
    password,
  })
    .then((res) => {
      localStorage.setItem("token", res.data.accessToken);
      navigateSuccess();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    })
};