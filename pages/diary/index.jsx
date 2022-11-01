import Link from 'next/link';
import { Line } from '../../components/Profile/styles';
import SubTitle from '../../components/SubTitle';
import { DiaryWrap, Top, DiaryList } from './styles';
import { useQuery, gql } from "@apollo/client";

const Diary = () => {
    const GET_DIARY_LIST = gql`
        query {
            fetchBoards{
                number,
                title,
                contents,
                createdAt
            }
        }
    `
    const { data, loading } = useQuery(GET_DIARY_LIST);
    if (loading) {
        return <h1>로딩중...</h1>
    }

    return (
        <DiaryWrap>
            <Top>
                <SubTitle title='Diary' subtitle='TODAY STORY' />
                <Link href='/write'>
                    <a>다이어리 작성</a>
                </Link>
            </Top>
            <Line margin='.8rem 0 1.1rem 0' />
            <DiaryList>
                {data?.fetchBoards.slice(0, 4).map(item => (
                    <li key={item.number}>
                        <div>
                            <span>{item.createdAt.slice(0, -14)}</span>
                            <p>제목 : {item.title}</p>
                        </div>
                        <Link href={`/diary/${item.number}`}>
                            <a>자세히 보러가기 &#62;</a>
                        </Link>
                    </li>
                ))}
            </DiaryList>
        </DiaryWrap>
    );
};

export default Diary;