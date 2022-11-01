import { useEffect, useRef, useState } from 'react';
import SubTitle from '../../../components/SubTitle';
import { DiaryWrap } from '../../diary/styles';
import { Line } from '../../../components/Profile/styles';
import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from 'next/router';
import { DiaryForm } from '../../write/styles';

const Edit = () => {
    const router = useRouter();
    const [titleValue, setTitleValue] = useState();
    const [contentValue, setContentValue] = useState();
    const [diaryData, setDiaryData] = useState({
        number: '',
        title: '',
        contents: '',
        createdAt: '',
    })
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
    const { data, loading, refetch } = useQuery(GET_DIARY);

    const UPDATE_DIARY = gql`
        mutation {
            updateBoard(number:${router.query.numbers}) {
                number,
                contents,
                title
            }
        }
    `
    const [updateDiary] = useMutation(UPDATE_DIARY, {
        variables: {
            title: titleValue,
            contents: contentValue,
            number: router.query.numbers
        },
        onCompleted: () => {
            refetch();
            alert('수정완료!');
            router.push(`/diary/${data.fetchBoard.number}`)
        }
    })

    if (loading) return <h1>로딩중...</h1>
    console.log(titleValue)
    return (
        <DiaryWrap>
            <SubTitle title={`Diary | 글 수정`} />
            <Line margin='.6rem 0 1rem 0' />
            <DiaryForm>
                <div className='input-wrap'>
                    <input onChange={(e) => setTitleValue(e.target.value)} type="text" defaultValue={data?.fetchBoard.title} />
                    <textarea onChange={(e) => setContentValue(e.target.value)} defaultValue={data?.fetchBoard.contents} />
                </div>
            </DiaryForm>
            <div className='button-wrap'>
                <button onClick={updateDiary}>수정하기</button>
                <button>삭제하기</button>s
            </div>
        </DiaryWrap>
    );
};

export default Edit;