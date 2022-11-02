import { useRef, useState } from 'react';
import { Line } from '../../components/Profile/styles';
import SubTitle from '../../components/SubTitle';
import { DiaryWrap } from '../diary/styles';
import { GameList, LottoList } from './styles';

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
                    <img src='/images/icon_game01.svg' alt='게임아이콘' />
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
                    <img src='/images/icon_game02.svg' alt='게임아이콘' />
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