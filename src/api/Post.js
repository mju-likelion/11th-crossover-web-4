import {Axios} from "./Axios";

export const AxiosPost = (id, callbackPost) => {
  const {getData} = callbackPost;
  const token = localStorage.getItem("token"); // 토큰값 읽기, String형태

  Axios.get(`/api/posts/${id}`, {
    // 로그인 회원가입을 제외한 모든 api 요청에는 헤더에 토큰을 넣어주어야 함
    headers: {Authorization: `Bearer ${token}`}
  })
    .then((res) => {
      console.log(res);
      getData(res.data); // 성공 시에 데이터 받아옴!
  })
    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    })
}