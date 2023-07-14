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
		<Box fontSize={{ base: '25px', md: '50px'}} fontFamily='Noto Sans' fontWeight='700' mt={{ base: '5', md: '10'}} mb={{ base: '5', md: '10'}}>모든 구독 서비스를 한눈에!</Box>
		<Box display='flex' justifyContent='space-around' mt={{ base: '1', md: '5'}} mb={{ base: '1', md: '5'}} w={{ base: '350px', md: '800px'}}>
			<Link to='/ott'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/ott.png'} alt='' boxSize={{ base: '40px', md: '60px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize={{ base: '15px', md: '20px'}}>OTT</Box></VStack></Link>
			<Link to='/life'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/life.png'} alt='' boxSize={{ base: '40px', md: '60px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize={{ base: '15px', md: '20px'}}>생활</Box></VStack></Link>
			<Link to='/book'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/book.png'} alt='' boxSize={{ base: '40px', md: '60px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize={{ base: '15px', md: '20px'}}>도서</Box></VStack></Link>
			<Link to='/food'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/food.png'} alt='' boxSize={{ base: '40px', md: '60px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize={{ base: '15px', md: '20px'}}>식품</Box></VStack></Link>
			<Link to='/others'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/others.png'} alt=''boxSize={{ base: '40px', md: '60px'}}/><Box fontFamily='Noto Sans' fontWeight='600' fontSize={{ base: '15px', md: '20px'}}>기타</Box></VStack></Link>
		</Box>
		<Box w={{ base: '350px', md: '700px', lg: '900px'}} fontSize={{ base: '20px', md: '25px'}} fontFamily='Noto Sans' fontWeight='600' mb='2'>인기</Box>
		<Slider img={popular}/>
		<Box w={{ base: '350px', md: '700px', lg: '900px'}} fontSize={{ base: '20px', md: '25px'}} fontFamily='Noto Sans' fontWeight='600' mt='20' mb='2'>오늘의 발견</Box>
		<Slider img={found}/>
		<Box h='300px'/>
	</Box>;
}

export default Main;