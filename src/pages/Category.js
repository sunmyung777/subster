import React, {useEffect} from 'react';
import { Box, VStack,extendTheme } from "@chakra-ui/react";
import { useParams,Navigate } from 'react-router-dom';
import Item from '../components/Item';
import itemData from '../items';

const breakpoints = {
  sm: '375px',
  md: '414px',
  lg: '820px',
  xl: '1024px',
  '2xl': '1920px',
}
const theme = extendTheme({ breakpoints });

function Category(){
	const { category } = useParams();
	useEffect(()=>{
		window.scrollTo(0, 0);
	},[]);
	if(!itemData.hasOwnProperty(category)){
		return <Navigate to='/'/>
	}
	const props=itemData[category];
	
	return(
		<VStack>
			<Box display="flex" w={{ base: '90%', lg: '60%'}} mb='5' mt={{ base: '80px', md: '120px'}} fontWeight='bold' fontSize='40px'>{category.toUpperCase()}</Box>
			<Box display="flex" w={{ base: '100%', lg: '80%'}} flexWrap="wrap" justifyContent='center' mb='10'>
			{props.map((item)=>(
				<Item value={item}/>
			))}
			</Box>
		</VStack>
		   );
}
export default Category;