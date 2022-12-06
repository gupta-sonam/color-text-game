import { Button, Center } from '@chakra-ui/react';
import React from 'react';
import {auth , provider} from './Firebase.js';
import {FcGoogle} from 'react-icons/fc'
const Login = () => {

	// Sign in with google
	const signin = () => {
		auth.signInWithPopup(provider).catch(alert);
	}
	
	return (
		<Center>
			
				<Button style={{"marginTop" : "200px"}}
				onClick={signin} leftIcon={<FcGoogle />}>Sign In with Google</Button>
			
		</Center>
	);
}

export default Login;
