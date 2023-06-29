import styled from 'styled-components';
import Post from './Post';
import ContentButton from '../../components/ContentButton';
import { useNavigate } from 'react-router-dom';
import { AxiosPosts } from '../../api/Posts';
import { useEffect, useState } from 'react';

const PostList = () => {
  const isToken = localStorage.getItem('token') ? true : false;
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await AxiosPosts(page);
      callbackFunctions.getDataSuccess(data);
      callbackFunctions.setPageNumber();
    };
    fetchData();
  }, []);

  // 인피니티 스크롤 로직
  const callbackFunctions = {
    getDataSuccess: (data) => {
      setPosts((prev) => [...prev, ...data]);
    },
    setPageNumber: () => {
      setPage((prev) => prev + 1);
    },
  };

  useEffect(() => {
    const handleScroll = async () => {
      if (
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight
      ) {
        try {
          console.log(
            '스크롤 값',
            window.innerHeight + Math.ceil(window.scrollY),
            document.documentElement.scrollHeight
          );
          const data = await AxiosPosts(page); // then, catch로도 변환 가능
          callbackFunctions.getDataSuccess(data);
          callbackFunctions.setPageNumber();
        } catch (error) {
          console.log(error);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  // navigate 로직
  const goPost = (postId) => {
    navigate(`/${postId}`);
  };
  const navigate = useNavigate();
  const goWrite = () => {
    navigate('/write');
  };

  // time 로직
  const timeChange = (updatedAt) => {
    const currentTime = new Date();
    const writeUpTime = new Date(updatedAt);
    const timeInterval = currentTime.getTime() - writeUpTime.getTime();
    if (timeInterval < 1000 * 60 * 60 * 24) {
      return `${writeUpTime.getHours()}:${writeUpTime.getMinutes()}`;
    } else {
      return `${Math.floor(timeInterval / (1000 * 60 * 60 * 24))}일전`;
    }
  };

  return isToken ? (
    <AllContainer>
      <PostContainer>
        <WriteButtonWrapper>
          <ContentButton
            children="작성하기"
            isactive="true"
            btntype="false"
            clickPath={goWrite}
          />
        </WriteButtonWrapper>
        {posts &&
          posts.map((postData, index) => (
            <Post
              isMine={postData.isMine}
              title={postData.title}
              content={postData.content}
              time={timeChange(postData.updatedAt)}
              key={index}
              onClick={() => goPost(postData.id)}
            />
          ))}
      </PostContainer>
    </AllContainer>
  ) : (
    navigate('/login')
  );
};
const AllContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;
const PostContainer = styled.div`
  width: 783px;
  height: 100%;
  margin: auto;
`;
const WriteButtonWrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 23px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export default PostList;
