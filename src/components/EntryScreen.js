import React from 'react'
import { Box, Button, Text, Stack } from '@chakra-ui/react'

function EntryScreen({ setgameStart }) {
    return (
        <Box height="100%">
            <Text pt="8" fontSize="4xl" textAlign={"center"}>Click the color not the word</Text>
            <Text as="p" textAlign={"center"}>
                dassasadsadsadsadsa
                dassasadsadsadsadsa
                dassasadsadsadsadsa
                dassasadsadsadsadsa
                dassasadsadsadsadsa
                dassasadsadsadsadsa
                dassasadsadsadsadsa
                dassasadsadsadsadsa
            </Text>
            <Stack spacing={4} direction='column' align='center'>

                <Button colorScheme='teal' size='lg' mt="12" w="80%" onClick={() => setgameStart(true)}>
                    Play
                </Button>
            </Stack>
        </Box>
    )
}

export default EntryScreen