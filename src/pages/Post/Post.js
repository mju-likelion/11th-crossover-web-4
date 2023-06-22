import MyProfile from '../../assets/images/profile.svg';
import OtherProfile from '../../assets/images/profilenone.svg';
import styled from 'styled-components';

const Post = ({ userName, title, content, time, onClick }) => {
  return (
    <PostBox onClick={onClick}>
      <PostTop>
        <PostProfile>
          {userName === 'me' && <ProfileImg src={MyProfile} alt="MyProfile" />}
          {userName === 'other' && (
            <ProfileImg src={OtherProfile} alt="OtherProfile" />
          )}
          {/* 또는 boolean값으로 삼항 연산자 사용 가능 (중첩 X) */}
        </PostProfile>
        <PostTopRight>
          <PostTitle>제목: {title}</PostTitle>
          <PostContent>
            <ContentInner>{content}</ContentInner>
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
  line-height: 26px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.BLUE1};
  padding: 20px 26px;
`;
const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; // 한 줄로 표기
`;

const PostTime = styled.div`
  width: 699px;
  height: calc(100% - 239px);
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.GRAY};
  display: flex;
  justify-content: flex-end;
`;
export default Post;
