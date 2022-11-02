import { useState } from 'react';
import SubTitle from '../../../components/SubTitle';
import { Line } from '../../../components/Profile/styles';
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from 'next/router';
import { DiaryForm } from '../../write';
import { GET_DIARY } from '../../../shares/Query';
import { UPDATE_DIARY } from '../../../shares/Mutation';
import { DiaryWrap } from '..';

const Edit = () => {
    const router = useRouter();
    const [titleValue, setTitleValue] = useState();
    const [contentValue, setContentValue] = useState();
    const { data, loading, refetch } = useQuery(GET_DIARY, {
        variables: {
            number: Number(router.query.numbers)
        }
    });
    const [updateDiary] = useMutation(UPDATE_DIARY, {
        onCompleted: () => {
            refetch();
            alert('수정완료!');
            router.push(`/diary/${data.fetchBoard.number}`)
        }
    })
    const onUpdate = () => {
        updateDiary({
            variables: {
                title: titleValue,
                contents: contentValue,
                number: Number(router.query.numbers),
                writer: '102'
            },
        })
    }
    if (loading) return <h1>로딩중...</h1>
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
                <button onClick={onUpdate}>수정하기</button>
                <button>삭제하기</button>s
            </div>
        </DiaryWrap>
    );
};

export default Edit;