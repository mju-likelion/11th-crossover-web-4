import { Axios } from './Axios';

export const AxiosPost = (id, callbackPost) => {
  const { getData } = callbackPost;
  const token = localStorage.getItem('token');

  Axios.get(`/api/posts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      console.log(res);
      getData(res.data);
    })
    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    });
};
