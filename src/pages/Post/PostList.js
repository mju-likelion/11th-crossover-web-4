import styled from 'styled-components';
import Post from './Post';
import ContentButton from '../../components/ContentButton';

const PostList = () => {
  return (
    <AllContainer>
      <PostContainer>
        <WriteButtonWrapper>
          <ContentButton children="작성하기" type="true" iswritten="false" />
        </WriteButtonWrapper>
        <Post who="other" />
        <Post who="me" />
        <Post who="other" />
        <Post who="other" />
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
  /* margin: auto는 가로 중앙에 배치한다는 뜻이다. 그리고 자연스럽게 좌우 여백은 균등하게 배분 */
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
