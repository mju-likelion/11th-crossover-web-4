import MyProfile from '../../assets/images/profile.svg';
import OtherProfile from '../../assets/images/profilenone.svg';
import styled from 'styled-components';

const Post = ({ who }) => {
  const time = '18:30'; //서버에서 data 가져오면, 이 부분 삭제
  return (
    <PostBox>
      <PostTop>
        <PostProfile>
          {who === 'me' && <ProfileImg src={MyProfile} alt="MyProfile" />}
          {who === 'other' && (
            <ProfileImg src={OtherProfile} alt="OtherProfile" />
          )}
          {/* 또는 boolean값으로 삼항 연산자 사용 가능 (중첩 X) */}
        </PostProfile>
        <PostTopRight>
          <PostTitle>제목 : text</PostTitle>
          <PostContent>
            <ContentInner>
              여기에는 내용이 요약해서 들어갑니다. 멋쟁이 사자차럼 11기 화이팅!
            </ContentInner>
          </PostContent>
        </PostTopRight>
      </PostTop>
      <PostTime>{time}</PostTime>
    </PostBox>
  );
};
const PostBox = styled.div`
  width: 783px;
  height: 343px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
  padding: 33px 42px;
  margin-bottom: 54px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const PostTop = styled.div`
  width: 699px;
  height: 239px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;
const PostProfile = styled.div`
  width: calc(100% - 598px);
  height: 100%;
`;
const ProfileImg = styled.img`
  width: 62px;
  height: 62px;
`;
const PostTopRight = styled.div`
  width: 598px;
  height: 100%;
`;
const PostTitle = styled.div`
  width: 598px;
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 17px;
`;
const PostContent = styled.div`
  width: 598px;
  height: 198px;
  line-height: 26px; // 개인 추가 코드
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.BLUE1};
  padding: 20px 26px;
  font-size: 20px;
`;
const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; // wrap안하고 '한 줄'로 표기
`;
// overflow-hidden은 padding-bottom을 무시하고 아래로 밀어버림.
// 그래서 만약 padding-bottom 효과를 만드려면 안에 box를 하나 더 만들자.

const PostTime = styled.div`
  width: 699px;
  height: calc(100% - 239px);
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export default Post;
