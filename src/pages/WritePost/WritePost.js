import styled from 'styled-components';
import ContentButton from '../../components/ContentButton';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AxiosWrite } from '../../api/Posts';
const WritePost = () => {
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const navigate = useNavigate();
  const value = watch();

  const onSubmit = () => {
    AxiosWrite({ title: value.title, content: value.content }, goList);
  };

  const MAX_TITLE_LENGTH = 20;
  const MAX_CONTENT_LENGTH = 140;

  const goList = () => {
    alert('작성 완료되었습니다.');
    navigate('/');
  };

  return (
    <>
      <WritePostContainer>
        <TextBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TitleBox htmlFor="title">
              <TitlePart>
                <Title>제목 : </Title>
                <TitleInput
                  id="title"
                  type="text"
                  maxLength={MAX_TITLE_LENGTH}
                  {...register('title')}
                />
              </TitlePart>
              <TitleLength>( {value.title.length} / 20 )</TitleLength>
            </TitleBox>
            <ContentBox>
              <ContentInput
                id="content"
                type="text"
                maxLength={MAX_CONTENT_LENGTH}
                {...register('content')}
              />
              <ContentLength>( {value.content.length} / 140 )</ContentLength>
            </ContentBox>
            <BottomBox>
              <InfoBox>※ 작성된 게시글은 수정이 불가합니다.</InfoBox>
              <ButtonBox>
                <ContentButton
                  onBtn="false"
                  isactive={value.title && value.content ? 'true' : 'false'}
                >
                  작성하기
                </ContentButton>
              </ButtonBox>
            </BottomBox>
          </form>
        </TextBox>
      </WritePostContainer>
    </>
  );
};

export default WritePost;

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

const TitleBox = styled.label`
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
  float: right; // 오른쪽에 정렬
  // float 속성 대체해야함
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

const ContentInput = styled.textarea`
  width: 714px;
  height: 627px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  outline: none;
`;

const ContentLength = styled.div`
  float: right;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.GRAY};
  margin-bottom: 53px;
  margin-right: 10px; //ContentBox padding 값이랑 더해서 총 45px
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
