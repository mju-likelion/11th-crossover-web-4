import {Axios} from "./Axios";

export const AxiosDelete = (id, callbackFunctions) => {
  const {navigateSuccess} = callbackFunctions;
  const token = localStorage.getItem("token");

  Axios.delete(`api/posts/${id}`, {
    headers: {Authorization: `Bearer ${token}`}
  })
    .then((res) => {
      console.log(res);
      alert("게시물이 삭제되었습니다.");
      navigateSuccess();
    })
    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    })
}