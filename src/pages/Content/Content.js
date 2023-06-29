import styled from 'styled-components';
import ContentButton from '../../components/ContentButton';
import { useEffect, useState } from 'react';
import { AxiosPost } from '../../api/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosDelete } from '../../api/Delete';

const Content = () => {
  const [data, setData] = useState('');
  const { title, content, isMine } = data;
  const { id } = useParams();
  const navigate = useNavigate();

  const callbackPost = {
    getData: (data) => setData(data),
  };
  const callbackDelete = {
    navigateSuccess: () => {
      alert('게시물이 삭제되었습니다.');
      navigate('/');
    },
  };
  const deletePost = () => {
    AxiosDelete(id, callbackDelete);
  };
  useEffect(() => {
    AxiosPost(id, callbackPost);
  }, []); 
  return (
    <>
      <WritePostContainer>
        <TextBox>
          <TitleBox>
            <TitlePart>
              <Title>제목 : {title}</Title>
            </TitlePart>
            <TitleLength>( {String(title).length} / 20 )</TitleLength>
          </TitleBox>
          <ContentBox>
            <ContentArea>{content}</ContentArea>
            <ContentLength>( {String(content).length} / 140 )</ContentLength>
          </ContentBox>
          {isMine && (
            <BottomBox>
              <InfoBox>※ 작성된 게시글은 수정이 불가합니다.</InfoBox>
              <ButtonBox>
                <ContentButton btntype="true" clickPath={deletePost}>
                  삭제하기
                </ContentButton>
              </ButtonBox>
            </BottomBox>
          )}
        </TextBox>
      </WritePostContainer>
    </>
  );
};

export default Content;

const WritePostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;
const TextBox = styled.div`
  width: 794px;
  height: 1092px;
`;

const TitleBox = styled.div`
  display: flex;
  height: 134px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  margin-top: 58px;
  padding: 55px 0 55px 35px;
`;

const TitlePart = styled.div`
  display: flex;
  width: 631px;
  height: 24px;
`;

const Title = styled.h3`
  height: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`;

const TitleInput = styled.input`
  border: none;
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  padding-right: 19px;
`;

const TitleLength = styled.div`
  float: right;
  color: ${({ theme }) => theme.colors.GRAY};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  height: 24px;
  background-color: white;
  margin-right: 35px;
`;

const ContentBox = styled.div`
  height: 733px;
  border-radius: 25px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  margin-top: 16px;
  padding: 35px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const ContentArea = styled.div`
  width: 714px;
  height: 627px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: black;
`;

const ContentLength = styled.div`
  float: right;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-bottom: 53px;
  margin-right: 10px;
`;

const BottomBox = styled.div`
  width: 794px;
  height: 151px;
  padding: 16px 35px 16px 35px;
  margin-top: 16px;
`;

const InfoBox = styled.div`
  width: 726px;
  color: ${({ theme }) => theme.colors.GRAY};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const ButtonBox = styled.div`
  width: 233px;
  height: 70px;
  background: white;
  float: right;
  margin-top: 17px;
`;
