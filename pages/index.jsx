import styled from 'styled-components';
import { Line } from '../components/Profile/styles';
import SubTitle from '../components/SubTitle';

const Home = () => {
  const bgm = [
    {
      id: 1,
      name: '같은베개',
      singger: '테이',
      url: 'https://youtu.be/RF_PZ2pf2Fs'
    },
    {
      id: 2,
      name: '체념',
      singger: '빅마마',
      url: 'https://youtu.be/XqWQzZESCYw'
    },
    {
      id: 3,
      name: '발걸음',
      singger: '에메랄드 캐슬',
      url: 'https://youtu.be/L9jftIhRB-Y'
    },
    {
      id: 4,
      name: '해바라기',
      singger: '가비엔제이',
      url: 'https://youtu.be/xpHJnmp3Lyw'
    },
    {
      id: 5,
      name: '내사람',
      singger: 'SG 워너비',
      url: 'https://youtu.be/swM_GL06CxM'
    },
    {
      id: 6,
      name: '너에게 쓰는 편지',
      singger: 'MC몽',
      url: 'https://youtu.be/nhuFm3BGIBY'
    },
    {
      id: 7,
      name: '죽일놈',
      singger: '다이나믹 듀오',
      url: 'https://youtu.be/CqBAVQOkui0'
    },
    {
      id: 8,
      name: '넌 감동이었어',
      singger: '성시경',
      url: 'https://youtu.be/JG8DufK1xP0'
    },
    {
      id: 9,
      name: '사랑의 바보',
      singger: '더 넛츠',
      url: 'https://youtu.be/bJxcFpSVZQY'
    },
    {
      id: 10,
      name: '미친 사랑의 노래',
      singger: '씨야',
      url: 'https://youtu.be/_MythyZ0w3s'
    }
  ]
  return (
    <Wrap>
      <Top>
        <div style={{ minWidth: '25.3rem' }}>
          <SubTitle title='Updated News' />
          <Line margin='0 0 .715rem 0' />
          <NewsList>
            <li>제목1</li>
            <li>제목2</li>
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
          {bgm.map(item => (
            <li onClick={() => window.open(`${item.url}`)}>
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
    
  }
`