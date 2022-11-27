import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import EntryScreen from './EntryScreen'
import Game from './Game'

function GameContainer() {
  const [gameStart, setgameStart] = useState(false)
  
  return (
    <Box width="55%" background="#fff" height="50vh" borderRadius="md">
      {!gameStart ? <EntryScreen setgameStart={setgameStart} /> : <Game />}
    </Box>
  )
}

export default GameContainer