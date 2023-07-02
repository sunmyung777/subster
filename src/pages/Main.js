import React from 'react';
import { Box, Image, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Slider from '../components/Slider';

const popular=[
	{url:process.env.PUBLIC_URL+'/img/popular/popular1.jpg'},
	{url:process.env.PUBLIC_URL+'/img/popular/popular2.jpg'},
	{url:process.env.PUBLIC_URL+'/img/popular/popular3.jpg'},
];

const found=[
	{url:process.env.PUBLIC_URL+'/img/found/hot1.jpg'},
	{url:process.env.PUBLIC_URL+'/img/found/hot2.jpg'},
	{url:process.env.PUBLIC_URL+'/img/found/hot3.jpg'},
];
function Main(){
	return <Box display='flex' alignItems='center' flexDirection='column'>
		<Box fontSize='50px' fontFamily='Noto Sans' fontWeight='700' m='10'>모든 구독 서비스를 한눈에!</Box>
		<Box display='flex' justifyContent='space-around' m='5' w='800px'>
			<Link to='/ott'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/ott.png'} alt='' boxSize='60px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='20px'>OTT</Box></VStack></Link>
			<Link to='/life'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/life.png'} alt='' boxSize='60px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='20px'>생활</Box></VStack></Link>
			<Link to='/book'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/book.png'} alt='' boxSize='60px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='20px'>도서</Box></VStack></Link>
			<Link to='/food'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/food.png'} alt='' boxSize='60px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='20px'>식품</Box></VStack></Link>
			<Link to='/others'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/others.png'} alt=''boxSize='60px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='20px'>기타</Box></VStack></Link>
		</Box>
		<Box w='900px' fontSize='25px' fontFamily='Noto Sans' fontWeight='600' m='2'>인기</Box>
		<Slider img={popular}/>
		<Box w='900px' fontSize='25px' fontFamily='Noto Sans' fontWeight='600' m='2'>오늘의 발견</Box>
		<Slider img={found}/>
	</Box>;
}

export default Main;