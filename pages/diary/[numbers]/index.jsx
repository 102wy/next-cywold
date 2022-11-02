import { useRouter } from 'next/router';
import { useQuery, gql, useMutation, refetchQuaries } from "@apollo/client";
import { DiaryDate, DiaryDetail, DiaryWrap } from '../styles';
import SubTitle from '../../../components/SubTitle';
import { Line } from '../../../components/Profile/styles';
import Link from 'next/link';
import { GET_DIARY } from '../../../shares/Query';
import { DELETE_DIARY } from '../../../shares/Mutation';

const Detail = () => {
    const router = useRouter();
    const { data, loading, refetch } = useQuery(GET_DIARY, {
        variables: {
            number: Number(router.query.numbers)
        }
    });
    const [deleteDiary] = useMutation(
        DELETE_DIARY, {
        onCompleted: () => {
            alert('삭제 완료!');
            router.push('/diary');
        }
    }
    );
    const onDeleteDiary = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            deleteDiary({
                variables: {
                    number: Number(router.query.numbers)
                },
            })
        }
    }
    if (loading) return <h1>로딩중...</h1>
    console.log(data)
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
                <button onClick={onDeleteDiary}>삭제하기</button>
            </div>
            <Link href='/diary'>
                <a className='togo'>&#60; 다이어리 리스트 바로가기</a>
            </Link>
        </DiaryWrap>
    );
};

export default Detail;