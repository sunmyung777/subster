import React from 'react';
import { Box, VStack, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Item from '../components/Item';

function Book(props){
	return(
		<VStack>
			<Box display='flex' justifyContent='space-around' m='5' w='800px'>
				<Link to='/ott'><VStack><Image src='./img/categories/ott.png' alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>OTT</Box></VStack></Link>
				<Link to='/life'><VStack><Image src='./img/categories/life.png' alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>생활</Box></VStack></Link>
				<Link to='/book'><VStack><Image src='./img/categories/book.png' alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>도서</Box></VStack></Link>
				<Link to='/food'><VStack><Image src='./img/categories/food.png' alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>식품</Box></VStack></Link>
				<Link to='/others'><VStack><Image src='./img/categories/others.png' alt=''boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>기타</Box></VStack></Link>
			</Box>
			<Box display="flex" w="80%" h="80%" flexWrap="wrap" justifyContent='center'>
			{(props.list).map((item)=>(
				<Item name={item.name} price={item.price} link={item.link} img={'./img/items/'+item.img+'.png'}/>
			))}
			</Box>
		</VStack>
		   );
}
export default Book;