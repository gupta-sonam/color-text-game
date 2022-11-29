import React from 'react'
import { Box } from '@chakra-ui/react'
import {auth} from '../Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from '../login';
import Mainpage from '../Main';
  


function Sidebar() {
  const [user] = useAuthState(auth);
  return (
    <Box width="30%" bg="#fff" height="50vh" borderRadius="md" >
      {user ? <Mainpage/> : <Login/>}
    </Box>
  )
}

export default Sidebar