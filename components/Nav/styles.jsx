import styled from 'styled-components';

export const NavWrap = styled.ul`
position: absolute;
right: -2.6rem;
top: 1.3rem;
    display: flex;
    flex-direction: column;
    gap: .4rem;
    li {
        
    }
`
export const NavAlink = styled.a`
    color: ${({ tab }) => tab ? 'black' : 'white'};
    background-color: ${({ tab }) => tab ? 'white' : '#298EB5'};
    display: block;
    padding: .7rem .7rem .5rem 1rem;
    font-size: 1.1rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 0 .5rem .5rem 0;
    border: .1rem solid #0f465e;
`