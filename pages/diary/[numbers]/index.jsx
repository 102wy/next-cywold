import { useRouter } from 'next/router';
import { useQuery, gql, useMutation, refetchQuaries } from "@apollo/client";
import { DiaryDate, DiaryDetail, DiaryWrap } from '../styles';
import SubTitle from '../../../components/SubTitle';
import { Line } from '../../../components/Profile/styles';
import Link from 'next/link';

const Detail = () => {
    const router = useRouter();
    const GET_DIARY = gql`
        query {
            fetchBoard(number:${router.query.numbers}){
                number,
                title,
                contents,
                createdAt
            }
        }
    `
    const DELETE_DIARY = gql`
        mutation {
            deleteBoard(number:${router.query.numbers}){
                number,
            }
        }
    `
    const { data, loading } = useQuery(GET_DIARY);
    const execDeleteDiary = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            deleteDiary()
        }
    }
    const [deleteDiary] = useMutation(
        DELETE_DIARY, {
        onCompleted: () => {
            alert('삭제 완료!');
            router.push('/diary');
        }
    }
    );
    if (loading) return <h1>로딩중...</h1>
    return (
        <DiaryWrap>
            <SubTitle title='Diary' />
            <Line margin='0 0 1rem 0' />
            <DiaryDate>{data?.fetchBoard.createdAt.slice(0, -14)}</DiaryDate>
            <DiaryDetail>
                <h1>제목 : {data?.fetchBoard.title}</h1>
                <p>{data?.fetchBoard.contents}</p>
            </DiaryDetail>
            <div className='button-wrap'>
                <button onClick={() => router.push(`/diary/${data.fetchBoard.number}/edit`)}>수정하기</button>
                <button onClick={execDeleteDiary}>삭제하기</button>
            </div>
            <Link href='/diary'>
                <a className='togo'>&#60; 다이어리 리스트 바로가기</a>
            </Link>
        </DiaryWrap>
    );
};

export default Detail;