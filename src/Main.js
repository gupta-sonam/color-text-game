import React from 'react';
import {auth} from './Firebase';
import { Box ,Button,Text } from '@chakra-ui/react'

const Mainpage = () => {

	// Signout function
	console.log(auth.currentUser.displayName);
	const logout = () => {
		auth.signOut();
	}
	
	return (
		<Box p="8">
			<Text as="p">

			Welcome <Text as="span">{auth.currentUser.displayName}</Text>
			</Text>
			 
	
			<Button 
			onClick={logout} mt="2">
				Logout
			</Button>
		</Box>
	);
}

export default Mainpage;
