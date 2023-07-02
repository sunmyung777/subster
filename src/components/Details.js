import React from 'react';
import {Navigate } from 'react-router-dom';
import {Box} from "@chakra-ui/react";
import {useDetailState} from '../context';
function Detail(){
	const [details]=useDetailState();
	console.log([details]);
	if(Object.entries(details).toString()===''){
		return <Navigate replace to='/'/>
	}
	return <Box>
		{details.name}
		{details.price}
	</Box>;
}
export default Detail;