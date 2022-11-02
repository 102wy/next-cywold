import Image from 'next/image';
import { useRef, useState } from 'react';
import { Line } from '../../components/Profile/styles';
import SubTitle from '../../components/SubTitle';
import styled from 'styled-components';
import { DiaryWrap } from '../diary';


const Game = () => {
    const [wordGame, setwordGame] = useState('코드캠프');
    const [wordResult, setWordResult] = useState('결과!');
    const wordRef = useRef();
    const wordGameSubmit = (e) => {
        e.preventDefault();
        const wordLength = wordGame.length;
        let wordValue = wordRef.current.value;
        if (wordGame[wordLength - 1] === wordValue[0]) {
            setwordGame(wordValue);
            wordRef.current.value = '';
            setWordResult('정답입니다!')
        } else {
            setWordResult('오답입니다!');
            wordRef.current.value = '';
        }
    }
    let [lotto, setLotto] = useState([3, 5, 10, 24, 30, 34]);
    let newLotto = [];
    const lottoStart = () => {
        while (newLotto.length < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            if (newLotto.indexOf(randomNum) == -1) {
                newLotto.push(randomNum);
            }
        }
        setLotto(newLotto.sort((a, b) => a - b))
    }
    return (
        <DiaryWrap>
            <SubTitle title='Game' subtitle='TODAY CHOICE' />
            <Line margin='0rem 0 2rem 0' />
            <GameList>
                <li>
                    <Image
                        src='/images/icon_game01.svg'
                        alt='게임 이미지'
                        width={40}
                        height={20}
                    />
                    <h5>끝말잇기</h5>
                    <p>제시어 : {wordGame}</p>
                    <form>
                        <input
                            type="text"
                            placeholder='단어를 입력하세요.'
                            ref={wordRef} />
                        <button onClick={wordGameSubmit}>입력</button>
                    </form>
                    <span>{wordResult}</span>
                </li>
                <li>
                    <Image
                        src='/images/icon_game02.svg'
                        alt='게임 이미지'
                        width={26}
                        height={28}
                    />
                    <h4>LOTTO</h4>
                    <p>버튼을 누르세요.</p>
                    <LottoList>
                        {lotto.map(item => <li key={item}>{item}</li>)}
                    </LottoList>
                    <button onClick={lottoStart}>Button</button>
                </li>
            </GameList>
        </DiaryWrap>
    );
};

export default Game;

export const GameList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    li{
        background-color: #F6F6F6;
        border: .1rem solid ${props => props.theme.gray_02};
        border-radius: 1rem;
        padding: 2.2rem;
        padding-left: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 22.2rem;
        img{
            width: 4rem;
            height: 2rem;
        }
        h5{
            text-align: center;
            font-family: 'Gill-Sans';
            font-size: 1.1rem;
            line-height: 1.3rem;
            font-weight: 600;
            margin: .8rem 0 1rem 0;
        }
        h4{
            text-align: center;
            font-family: 'Gill-Sans';
            font-size: 1.1rem;
            line-height: 1.2rem;
            font-weight: 700;
            margin: 0rem 0 .6rem 0;
        }
        p{
            color: ${props => props.theme.gray_02};
            font-size: 1rem;
            line-height: 1.148rem;
        }
        form {
            margin: 1.5rem 0;
            display: flex;
            gap: .8rem;
            input{
                border: .1rem solid black;
                border-radius: .5rem;
                font-size: 1.1rem;
                padding: .3rem 0 .4rem .8rem;
                font-family: 'Gill-Sans';
                width: 13rem;
                &:focus {
                    outline: none;
                }   
            }
            button {
                border: .1rem solid black;
                border-radius: .5rem;
                font-size: 1.1rem;
                padding: .4rem .6rem .3rem .8rem;
                background-color: white;
            }
        }
        span {
            color: ${props => props.theme.gray_02};
            font-size: 1.1rem;
            line-height: 1.3rem;
        }
        &:last-child img{
            width: 2.6rem;
            height: 2.8rem;
        }
        button {
            background-color: white;
            border: .1rem solid black;
            border-radius: .5rem;
            font-size: 1.1rem;
            width: 6.2rem;
            height: 2.4rem;
            text-align: center;
        }
    }
`

export const LottoList = styled.ul`
    margin: .8rem 0 1.1rem 0;
    border: .1rem solid black;
    border-radius: .8rem;
    background-color: ${props => props.theme.yellow};
    display: flex;
    flex-direction: row;
    width: 13rem;
    li{
        background-color: transparent;
        border: none;
        width: 16.6%;
        margin: 0;
        padding: 0;
        line-height: 2.1rem;
        font-size: 1rem;
        text-align: center;
        font-family: 'MalgunGothic';
        font-weight: 700;
        cursor: default;
    }
`