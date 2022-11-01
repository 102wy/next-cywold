import styled from 'styled-components';

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