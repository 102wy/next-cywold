import { useRouter } from 'next/router';
import { useQuery, useMutation } from "@apollo/client";
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

import styled from 'styled-components';

export const DiaryWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    //상세페이지
    .button-wrap{
        display: flex;
        gap: 3.3rem;
        justify-content: center;
        width: 100%;
        margin-top: 1.3rem;
        button{
            background-color: ${props => props.theme.gray_05};
            color: white;
            line-height: 1.4rem;
            font-size: 1.2rem;
            padding: .4rem 1.111rem .4rem 1.222rem;
            border: .1rem solid ${props => props.theme.gray_01};
            border-radius: .2rem;
        }
    }
    .togo{
        margin-top: 2.3rem;
        color: ${props => props.theme.gray_01};
        font-size: 1.2rem;
        line-height: 1.5rem;
        font-family: 'Inter';
        font-weight: 500;
        text-decoration: underline;
    }
`
export const Top = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    a {
        width: 7.1rem;
        height: 1.9rem;
        border: .1rem solid #ABABAB;
        background-color: white;
        font-size: .9rem;
        line-height: 1.9rem;
        border-radius: .4rem;
        text-align: center;
    }
`
export const DiaryList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    li{
        border: .15rem solid ${props => props.theme.gray_04};
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1.3rem 2.5rem;
        border-radius: .2rem;
        div{
            display: flex;
            flex-direction: column;
            gap: .7rem;
            span{
                color: white;
                background-color: ${props => props.theme.blue};
                text-align: center;
                line-height: 1.6rem;
                font-weight: 600;
                font-size: 1rem;
                font-family: 'Inter';
                border-radius: .3rem;
                width: 6.9rem;
                height: 1.625rem;
            }
            p{
                font-family: 'Gill-Sans';
                font-size: 1.2rem;
                line-height: 1.6rem;
                font-weight: 600;
                color: ${props => props.theme.gray_02};
            }
        }
        a{
            text-decoration: underline;
            font-size: 1.1rem;
            line-height: 1.3rem;
            color: #343131;
        }
    }
`
export const DiaryDate = styled.div`
    width: 100%;
    background-color: ${props => props.theme.gray_04};
    color: ${props => props.theme.gray_01};
    font-size: 1.3rem;
    line-height: 1.5rem;
    padding: .6rem 0 .7rem 1.7rem;
    font-weight: 400;
    font-family: 'Gill-Sans';
`
export const DiaryDetail = styled.div`
    padding: 3rem 3.2rem 2.8rem 3.9rem;
    text-align: center;
    border: .15rem solid ${props => props.theme.gray_04};
    height: 26.6rem;
    h1{
        margin-bottom: 2.6rem;
        font-family: 'Gill-Sans';
        font-size: 1.5rem;
        line-height: 1.8rem;
        font-weight: 800;
    }
    p{
        font-size: 1.1rem;
        line-height: 1.3rem;
        color: ${props => props.theme.gray_01};
    }
`