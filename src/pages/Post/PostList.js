import styled from 'styled-components';
import Post from './Post';
import ContentButton from '../../components/ContentButton';
import { useNavigate } from 'react-router-dom';
import { AxiosPosts } from '../../api/Posts';
import { useEffect, useState } from 'react';
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const goWrite = () => {
    navigate('/write');
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await AxiosPosts();
      setPosts(data);
    };
    fetchData();
  }, []);

  const goPost = (postId) => {
    navigate(`/${postId}`);
  };
  console.log('posts입니다', posts);

  return (
    <AllContainer>
      <PostContainer>
        <WriteButtonWrapper>
          <ContentButton
            children="작성하기"
            isactive="true"
            type="false"
            clickPath={goWrite}
          />
        </WriteButtonWrapper>
        {posts.map((postData, index) => (
          <Post
            isMine={postData.isMine}
            title={postData.title}
            content={postData.content}
            time={postData.updatedAt}
            key={index}
            onClick={() => goPost(postData.id)}
          />
        ))}
      </PostContainer>
    </AllContainer>
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
  /* 컨테이너의 width가 확보되어 margin이 유효할 수 있을 때 */
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
