import './App.css';
import { Box } from '@chakra-ui/react'
import GameContainer from './components/GameContainer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Box width="100vw" height="100vh" background="gray.200" p="8" display={"flex"}

        justifyContent="space-around">
        <GameContainer />
        <Sidebar />

      </Box>
    </>
  );
}

export default App;
