import React from 'react';
import { Box, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Nav(){
	return <Box w='100%' h={{ base: '60px', md: '100px'}} bg='#6667AB' display='flex' alignItems='center'>
		<Link to='/'><Image src={process.env.PUBLIC_URL+'/img/logo/logo3.jpg'} alt='logo'  width={{ base: '125px', md: '200px'}} ml={{ base: '5', md: '20'}}/></Link>
	</Box>
}

export default Nav;
