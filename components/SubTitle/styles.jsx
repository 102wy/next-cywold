import styled from 'styled-components';

export const SubTitleWrap = styled.div`
    display: flex;
    align-items: baseline;
    gap: 1.4rem;
    h6{
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.505rem;
        font-family: 'Gill-Sans';
        color: ${props => props.theme.blue};
    }
    p{
        font-family: 'Gill-Sans';
        letter-spacing: -0.05rem;
        font-size: .8rem;
        line-height: .919rem;
        font-weight: 400;
    }
`