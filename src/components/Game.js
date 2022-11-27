import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import TryAgainScreen from './TryAgainScreen';
import QuationScreen from './QuestionScreen';


function Game() {
    
    const [answerType, getanswerType] = useState(true);
    const [totalScore, settotalScore] = useState(0);
    const [timeUp, setTimeUp] = useState(false);
    return (
        <Box>
            {!answerType ? <TryAgainScreen settotalScore={settotalScore} totalScore={totalScore} getanswerType={getanswerType} timeUp={timeUp} /> : <QuationScreen getanswerType={getanswerType} settotalScore={settotalScore} totalScore={totalScore} setTimeUp={setTimeUp}/>}
        </Box>
    )
}

export default Game