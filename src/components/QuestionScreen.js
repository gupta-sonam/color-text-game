import { Box, Text, Button } from '@chakra-ui/react'
import React ,{useRef,useEffect, useState} from 'react'


function QuationScreen({ getanswerType, settotalScore, totalScore, setTimeUp }) {
    const [nextQuestion, setNextQuestion] = useState(1);
    const progressBarRef = useRef();
    function move() {
        let i = 0;
        if (i === 0) {
            i = 1;
            var elem = progressBarRef.current;
            var width = 1;
            var id = setInterval(frame, 100);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                    setTimeUp(true)
                } else {
                    setTimeUp(false)
                    width++;
                    elem.style.width = width + "%";
                }
            }
        }
    }

    useEffect(() => {
        move();
    }, [nextQuestion])


    let colors = [
        { colorText: "red", answer: "yellow", options: ['yellow', 'green', 'pink', 'red'] },
        { colorText: "yellow", answer: "blue", options: ["yellow", "green", "blue", "write"] },
        { colorText: "blue", answer: "pink", options: ["blue", "pink", "black", "violet"] },
        { colorText: "violet", answer: "violet", options: ["purple", "violet", "silver", "white"] }
    ]

    const randomNumber = Math.floor(Math.random() * colors.length);
    let options = colors[randomNumber].options;

    function capitalize(str) {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    function checkAnswers(answer) {
        setNextQuestion(nextQuestion + 1);
        if (answer === colors[randomNumber].answer) {
            settotalScore(totalScore + 1)
            getanswerType(true);
        } else {
            getanswerType(false);
        }
    }
   

    return (
        <Box>
            <Box as="div" ref={progressBarRef} backgroundColor="red"  height="10px" ></Box>
            {/* <Progress  isAnimated="true" colorScheme="red" isIndeterminate="true"/> */}
            {/* <ProgressTimer duration={30} pcolor="#FF0000" /> */}
            <Text fontSize="8xl" textAlign="center" mb="2" color={colors[randomNumber].answer}>{capitalize(colors[randomNumber].colorText)}</Text>

            <Box display="flex" mb="2" justifyContent="space-evenly">
                {console.log("options", options)}
                {options.map((item, i) => (
                    <>
                        <Button key={i} onClick={() => checkAnswers(item)}>{capitalize(item)}</Button>
                    </>
                ))}
            </Box>
        </Box>
    )
}

export default QuationScreen