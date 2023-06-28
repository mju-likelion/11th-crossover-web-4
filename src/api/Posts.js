import { Axios } from './Axios';

// 전체 조회 api
export const AxiosPosts = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await Axios.get('/api/posts', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// 작성 Write api
export const AxiosWrite = (data, goList) => {
  const token = localStorage.getItem('token');
  Axios.post('/api/posts', data, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => {
      console.log(res);
      goList();
    })
    .catch((error) => {
      console.log(error);
      error.response.data.message.map((message) => alert(message));
    });
};
