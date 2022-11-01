import { useRef, useState } from 'react';
import { Line } from '../../components/Profile/styles';
import SubTitle from '../../components/SubTitle';
import { DiaryWrap } from '../diary/styles';
import { useQuery, gql, useMutation } from "@apollo/client";
import { DiaryForm } from './styles';

const Write = () => {
    const [isEdit, setEdit] = useState(false);
    const titleRef = useRef();
    const contentRef = useRef();
    const CREATE_DIARY = gql`
        mutation CreateBoard{
            createBoard{
                title,
                contents,
            }
        }
    `
    const [createDiary] = useMutation(CREATE_DIARY, {
        variables: {
            title: titleRef.current,
            contents: contentRef.current
        },
        onCompleted: () => alert('등록완료!')
    })

    // const onSubmit = () => {
    //     const title = titleRef.current.value;
    //     const contents = contentRef.current.value;
    //     createDiary({ variables: { title, contents } })
    // }
    return (
        <DiaryWrap>
            <SubTitle title={`Diary | ${isEdit ? '글 수정' : '글 등록'}`} />
            <Line margin='.6rem 0 1rem 0' />
            <DiaryForm>
                <div className='input-wrap'>
                    <input ref={titleRef} type="text" placeholder={`${isEdit ? '수정' : '제목을 입력해주세요'}`} />
                    <textarea ref={contentRef} defaultValue={`${isEdit ? '내용' : ''}`} />
                </div>
            </DiaryForm>
            <div className='button-wrap'>
                <button onClick={createDiary}>{`${isEdit ? '수정하기' : '작성하기'}`}</button>
                <button>{`${isEdit ? '삭제하기' : '뒤로가기'}`}</button>
            </div>
        </DiaryWrap>
    );
};

export default Write;