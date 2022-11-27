import { Box, Button, Center, Text } from '@chakra-ui/react'
import React from 'react'

function TryAgainScreen({ totalScore, getanswerType, settotalScore }) {
    return (
        <Box>
            <Text fontSize="9xl" textAlign="center" mb="2" color={'red'}>✘</Text>
            <Center>
                <Text fontSize="sm" mb="3" as="p">Your Score : {totalScore}</Text>
            </Center><Center>
                <Button w="200px" border={'1px solid black'} onClick={() => {
                    getanswerType(true);
                    settotalScore(0)}} >Try Again</Button>
            </Center>
        </Box>
    )
}

export default TryAgainScreen