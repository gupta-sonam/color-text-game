import React from 'react'
import { Box, Button, Text, Stack } from '@chakra-ui/react'

function EntryScreen({ setgameStart }) {
    return (
        <Box height="100%">
            <Text pt="8" fontSize="4xl" textAlign={"center"}>Click the color not the word</Text>
            <Text as="p" textAlign={"center"}>
            Five levels. Decrease Time to play hard levels.

            All you have to do: click the colour and not the word.
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