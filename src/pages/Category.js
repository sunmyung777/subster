import React from 'react';
import { Box, VStack, Image} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Item from '../components/Item';

function Category(props){
	 window.scrollTo(0, 0);
	return(
		<VStack>
			<Box display='flex' justifyContent='space-around' mt='5' mb='5' w={{ base: '350px', md: '600px',lg:'800px'}}>
				<Link to='/ott'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/ott.png'} alt='ott' boxSize={{ base: '30px', md: '50px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize= '15px'>OTT</Box></VStack></Link>
				<Link to='/life'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/life.png'} alt='life' boxSize={{ base: '30px', md: '50px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize= '15px'>생활</Box></VStack></Link>
				<Link to='/book'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/book.png'} alt='book' boxSize={{ base: '30px', md: '50px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize= '15px'>도서</Box></VStack></Link>
				<Link to='/food'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/food.png'} alt='food' boxSize={{ base: '30px', md: '50px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize= '15px'>식품</Box></VStack></Link>
				<Link to='/others'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/others.png'} alt='others' boxSize={{ base: '30px', md: '50px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>기타</Box></VStack></Link>
			</Box>
			<Box display="flex" w={{ base: '100%', lg: '80%'}} flexWrap="wrap" justifyContent='center' mb='10'>
			{(props.list).map((item)=>(
				<Item value={item}/>
			))}
			</Box>
		</VStack>
		   );
}
export default Category;