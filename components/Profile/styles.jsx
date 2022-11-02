import styled from "styled-components";

export const ProfileWrap = styled.section`
  border: 0.1rem solid ${(props) => props.theme.gray_02};
  background-color: ${(props) => props.background || "#fff"};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "2.8rem 3.3rem 2rem 3.3rem"};
  min-width: ${props => props.minWidth || '20.8rem'};
  img{
    max-width: 14.2rem;
    max-height: 12.3rem;
  }
`;
export const Line = styled.span`
  width: 14.8rem;
  height: .1rem;
  background-color: ${props => props.theme.gray_02};
  margin: ${props => props.margin || '1.4rem 0 .7rem 0'};
  display: block;
  width: 100%;
`
export const Infobox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .972rem;
  li{
    display: flex;
    gap: .942rem;
    align-items: center;
    img{
      width: 1.047rem;
      height: auto;
    }
    p{
      font-size: .9rem;
      line-height: 1.075rem;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
`
export const Feeling = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .3rem;
  margin: 13.3rem 0 0 0;
  p{
    font-size: 1.1rem;
    font-family: 'Gill-Sans';
    font-weight: 400;
  }
  select{
    font-size: 1.1rem;
    font-weight: 400;
    font-family: 'MalgunGothic';
    line-height: 1.5rem;
    border: .1rem solid #000;
    padding: .1rem 0 .2rem .3rem;
  }
`