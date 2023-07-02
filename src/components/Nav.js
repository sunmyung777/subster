import React from 'react';
import { Box, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Nav(){
	return <Box w='100%' h='100px' bg='#6667AB' display='flex' alignItems='center'>
		<Link to='/'><Image src={process.env.PUBLIC_URL+'/img/logo/logo3.jpg'} alt='' boxsize='100%' ml='20'/></Link>
	</Box>
}

export default Nav;
