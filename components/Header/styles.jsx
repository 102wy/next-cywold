import styled from "styled-components";

export const TitleWrap = styled.section`
    padding-top: 5rem;
    padding-bottom: .3rem;
    display: flex;
    justify-content: space-between;
`

export const Today = styled.ul`
    display: flex;
    padding: 0 4.7rem 0 4.4rem;
    li{
        font-family: 'Sci-Fied-Bitmap';
        font-size: .9rem;
        font-weight: .9rem;
        display: flex;
        align-items: center;
        gap: .4rem;
        cursor: default;
        p{
            font-size: 1.1rem;
            font-weight: 1.5rem;
            font-family: 'MalgunGothic';
            font-weight: 400;
            color: #000;
        }
        .today{
                color: ${props => props.theme.red};
        }
        &:first-child:after {
            content: '';
            display: block;
            width: .1rem;
            height: .8rem;
            background-color: ${props => props.theme.blue};
            margin: 0 .8rem;
        }
    }
`
export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h5{
        color: ${props => props.theme.blue};
        font-size: 1.6rem;
        font-weight: 400;
        font-family: 'NeoDunggeunmo';
    }
    p{
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        line-height: 1.6rem;
        gap: .1rem;
        &:after{
            content: '';
            display: block;
            width: 0;
            height: 0;
            border-top: .4rem solid transparent;
            border-bottom: .4rem solid transparent;
            border-left: .6rem solid #ff6400;
            border-right: .6rem solid transparent;
            margin-right: 5rem;
        }
    }
`
