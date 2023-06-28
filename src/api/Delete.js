import {Axios} from "./Axios";

export const AxiosDelete = (id, callbackDelete) => {
  const {navigateSuccess} = callbackDelete;
  const token = localStorage.getItem("token");

  Axios.delete(`api/posts/${id}`, {
    headers: {Authorization: `Bearer ${token}`}
  })
    .then((res) => {
      console.log(res); // 얘 왜 안불러와지지?
      navigateSuccess();
    })
    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    })
}