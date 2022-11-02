import { Line } from '../../components/Profile/styles';
import SubTitle from '../../components/SubTitle';
import { DiaryWrap } from '../diary/styles';

const Game = () => {
    return (
        <DiaryWrap>
            <SubTitle title='Game' subtitle='TODAY CHOICE' />
            <Line margin='.5rem 0 2rem 0' />
        </DiaryWrap>
    );
};

export default Game;