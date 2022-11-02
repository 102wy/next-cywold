import styled from 'styled-components';
import { Line } from '../components/Profile/styles';
import SubTitle from '../components/SubTitle';
import { useQuery, gql } from "@apollo/client";
import { useRouter } from 'next/router';
import { BGM, GET_DIARYS } from '../shares/Query';

const Home = () => {

  const { data, loading } = useQuery(GET_DIARYS);
  const router = useRouter();
  if (loading) {
    return <h1>로딩중!</h1>
  }
  return (
    <Wrap>
      <Top>
        <div style={{ minWidth: '25.3rem' }}>
          <SubTitle title='Updated News' />
          <Line margin='0 0 .715rem 0' />
          <NewsList>
            {data?.fetchBoards.slice(0, 4).map((item) => <li key={item.number} onClick={() => router.push(`/diary/${item.number}`)}>{item.title}</li>)}
          </NewsList>
        </div>
        <SubNav>
          <li>
            <span><p>다이어리</p>0/65</span>
            <span><p>사진첩</p>0/265</span>
          </li>
          <li>
            <span><p>게시판</p>0/15</span>
            <span><p>방명록</p>0/15</span>
          </li>
          <li></li>
        </SubNav>
      </Top>
      <Bottom>
        <SubTitle title='추억의 BGM' subtitle='TODAY CHOICE' />
        <MusicList>
          <li>
            <input type="checkbox" />
            <p className='number'>번호</p>
            <p>곡명</p>
            <p>아티스트</p>
          </li>
          {BGM.map(item => (
            <li key={item.id} onClick={() => window.open(`${item.url}`)}>
              <input type="checkbox" />
              <p className='number'>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.singger}</p>
            </li>
          ))}
        </MusicList>
      </Bottom>
    </Wrap>
  );
};

export default Home;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
`
const Top = styled.section`
  display: flex;
  gap: 1.8rem;
`
const Bottom = styled.section`
  
`
const NewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.726rem;
  li{
    display: flex;
    gap: .45rem;
    font-family: 'Gill-Sans';
    font-size: .8rem;
    line-height: .919rem;
    font-weight: 400;
    align-items: baseline;
    cursor: pointer;
    &::before{
      content: '다이어리';
      display: block;
      padding: .123rem;
      padding-top: .2rem;
      font-size: .7rem;
      font-weight: 600;
      
      background-color: ${props => props.theme.pink};
      color: #fff;
      border-radius: .1rem;
    }
  }
`
const SubNav = styled.ul`
  margin-top: 1.5rem;
  li{
    border-bottom: .1rem solid ${props => props.theme.gray_02};
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-style: dashed;
    display: flex;
    height: 1.8rem;
    align-items: center;
    &:first-child{
      border-top: .1rem solid ${props => props.theme.gray_02};
      border-style: dashed;
    }
    &:nth-child(2) span:first-child {
      padding-right: 4.1rem;
    }
    span{
      font-family: 'Gill-Sans';
      display: flex;
      gap: .2rem;
      color: ${props => props.theme.blue};
      font-size: .8rem;
      font-weight: 600;
      line-height: .986rem;
      padding-right: 2.946rem;
      p{
        font-size: .8rem;
        font-weight: 400;
        line-height: .919rem;
        color: black;
      }
    }
  }
`
const MusicList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: .9rem;
  li{
    display: flex;
    align-items: center;
    border: .1rem solid ${props => props.theme.gray_02};
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-style: dotted;
    cursor: pointer;
    input {
        width: 1.2rem;
        height: 1.2rem;
        margin: .4rem 3.1rem .4rem 2rem;
        cursor: pointer;
    }
    p{
        font-family: 'MalgunGothic';
        line-height: 2rem;
        color: #0F465E;
        font-size: 1rem;
        line-height: 1.33rem;
        font-weight: 400;
        cursor: pointer;
        &:nth-child(3){
          width: 22rem;
        }
    }
    .number{
      color: black;
      margin-right: 2.5rem;
    }
    &:first-child{
      background-color: ${props => props.theme.gray_04};
      border: .1rem solid ${props => props.theme.gray_02};
      border-left: 0;
      border-right: 0;
      p{
        font-size: 1rem;
        font-weight: 700;
        color: ${props => props.theme.gray_02};
      }
      .number{
        margin-right: 1.8rem;
      }
      input{
          margin: .4rem 2.4rem .4rem 2rem;
          width: 1.2rem;
          height: 1.2rem;
        }
      }
    &:last-child .number{
      margin-right: 2.1rem;
    }
  }
`