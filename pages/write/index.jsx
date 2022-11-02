import { useRef, useState } from 'react';
import { Line } from '../../components/Profile/styles';
import SubTitle from '../../components/SubTitle';
import { useMutation } from "@apollo/client";
import { CREATE_DIARY } from '../../shares/Mutation';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { DiaryWrap } from '../diary';

const Write = () => {
    const router = useRouter();
    const [isEdit, setEdit] = useState(false);
    const titleRef = useRef();
    const contentRef = useRef();
    const [createDiary] = useMutation(CREATE_DIARY, {
        onCompleted: () => {
            alert('작성완료!')
            router.push('/diary')
        }
    })

    const onSubmit = () => {
        const Title = titleRef.current.value;
        const Content = contentRef.current.value;
        createDiary({ variables: { title: Title, contents: Content, writer: '102' } })
    }
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
                <button onClick={onSubmit}>{`${isEdit ? '수정하기' : '작성하기'}`}</button>
                <button>{`${isEdit ? '삭제하기' : '뒤로가기'}`}</button>
            </div>
        </DiaryWrap>
    );
};

export default Write;

export const DiaryForm = styled.form`
    width: 100%;
    border: .1rem solid ${props => props.theme.gray_04};
    border-radius: .2rem;
    padding: 1.8rem 1.9rem;
    .input-wrap{
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        input{
        width: 100%;
        border: .1rem solid ${props => props.theme.gray_04};
        border-radius: .2rem;
        color: ${props => props.theme.gray_01};
        font-size: .8rem;
        line-height: 1rem;
        padding: .4rem .6rem;
        transition: all 0.3s ease-in;
        &:focus {
            outline: none;
            border-color: ${props => props.theme.gray_02};
        }
    }
        textarea{
            border: .1rem solid ${props => props.theme.gray_04};
            border-radius: .2rem;   
            resize: none;
            padding: .4rem .6rem;
            height: 23rem;
            transition: all 0.3s ease-in;
            color: ${props => props.theme.gray_01};
            font-size: 1.1rem;
            line-height: 1.3rem;
            &:focus{
                outline: none;
                border-color: ${props => props.theme.gray_02};
            }
        }
    }
`