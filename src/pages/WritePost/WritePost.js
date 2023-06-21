import React, {useState} from 'react';
import styled from "styled-components";
import ContentButton from "../../components/ContentButton";
import {useForm} from "react-hook-form";


const WritePost = () => {
  const [titleCount, setTitleCount] = useState("");
  const [contentCount, setContentCount] = useState("");
  const {handleSubmit, register} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <WritePostContainer>
        <TextBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TitleBox>
              <TitlePart>
                <Title>제목: </Title>
                <TitleInput
                id='title'
                type='text'
                maxLength={20}
                {...register('title')}
                onChange={(e) => setTitleCount((e.target.value))} />
              </TitlePart>
              <TitleLength>( {titleCount.length} / 20 )</TitleLength>
            </TitleBox>
            <ContentBox>
              <ContentInput
              id='content'
              type='text'
              maxLength={140}
              {...register('content')}
              onChange={(e) => setContentCount((e.target.value))} />
              <ContentLength>( {contentCount.length} / 140 )</ContentLength>
            </ContentBox>
            <BottomBox>
              <InfoBox>※ 작성된 게시글은 수정이 불가합니다.</InfoBox>
              <ButtonBox>
                <ContentButton type='false' isactive={titleCount && contentCount ? 'true' : 'false'}>작성하기</ContentButton>
              </ButtonBox>
            </BottomBox>
          </form>
        </TextBox>
      </WritePostContainer>
    </>
  );
};

export default WritePost;

// **주석 나중에 필요없는 거 지우기!**
const WritePostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`
const TextBox = styled.div`
  width: 794px;
  height: 1092px;
`

const TitleBox = styled.div`
  display: flex;
  //justify-content: space-between;
  //flex-wrap: nowrap;
  height: 134px;
  border-radius: 25px;
  border: 2px solid ${({theme}) => theme.colors.GRAY};
  margin-top: 58px;
  padding: 55px 0 55px 35px;
`

const TitlePart = styled.div`
  display: flex;
  width: 631px;
  height: 24px;
`

const Title = styled.h3`
  width: 60px; // 어림잡음 이거 어떻게 하기
  height: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`

const TitleInput = styled.input`
  border: none;
  width: 553px; //Title width랑 합쳐서 613px
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px; // 왜 변화가없지?
  padding-right: 19px;
`

const TitleLength = styled.div`
  float: right; // 오른쪽에 정렬
  color: ${({theme}) => theme.colors.GRAY};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  height: 24px;
  background-color: white;
  margin-right: 35px;
`

const ContentBox = styled.div`
  height: 733px;
  border-radius: 25px;
  border: 2px solid ${({theme}) => theme.colors.GRAY};
  margin-top: 16px;
  padding: 35px;
  color: ${({theme}) => theme.colors.GRAY};
`
const ContentPart = styled.div`
  display: flex;
`

const ContentInput = styled.textarea`
  width: 714px;
  height: 627px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`

const ContentLength = styled.div`
  float: right;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${({theme}) => theme.colors.GRAY};
  margin-bottom: 53px;
  margin-right: 10px; //ContentBox padding 값이랑 더해서 총 45px
`

const BottomBox = styled.div`
  width: 794px;
  height: 151px;
  padding: 16px 35px 16px 35px;
  margin-top: 16px;
`

const InfoBox = styled.div`
  width: 726px;
  color: ${({theme}) => theme.colors.GRAY};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`

const ButtonBox = styled.div`
  width: 233px;
  height: 70px;
  background: white;
  float: right;
  margin-top: 17px;
`