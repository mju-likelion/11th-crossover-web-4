import {Axios} from "./Axios";

export const AxiosDelete = (id, callbackDelete) => {
  const {navigateSuccess} = callbackDelete;
  const token = localStorage.getItem("token");

  Axios.delete(`api/posts/${id}`, {
    headers: {Authorization: `Bearer ${token}`}
  })
    .then((res) => {
      console.log(res);
      navigateSuccess();
    })
    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    })
}