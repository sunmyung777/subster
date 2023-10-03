import React from 'react';
import { Box,Button,Image,extendTheme } from '@chakra-ui/react';
import Slider from '../components/Slider';
import { Link } from 'react-router-dom';
import './Main.css';

const breakpoints = {
  sm: '375px',
  md: '414px',
  lg: '820px',
  xl: '1024px',
  '2xl': '1920px',
}
const theme = extendTheme({ breakpoints });

const popular=[
	{url:process.env.PUBLIC_URL+'/img/popular/popular1.jpg'},
	{url:process.env.PUBLIC_URL+'/img/popular/popular2.jpg'},
	{url:process.env.PUBLIC_URL+'/img/popular/popular3.jpg'},
];
const popularLink=[
	'/60',
	'/41',
	'/26',
];
const found=[
	{url:process.env.PUBLIC_URL+'/img/found/hot1.jpg'},
	{url:process.env.PUBLIC_URL+'/img/found/hot2.jpg'},
	{url:process.env.PUBLIC_URL+'/img/found/hot3.jpg'},
];
const foundLink=[
	'/30',
	'/53',
	'/22',
];
function Main(){
	return <Box display='flex' alignItems='center' flexDirection='column'>
		<Box w='100%' mt={{ base: '60px', md: '100px'}} mb='5' h={{ base: '400px', md: '600px'}} backgroundImage='linear-gradient(to right, #fbc2eb 0%, #6667ab 100%)' display='flex' alignItems='center' justifyContent='center'>
			<Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
				<Box className='typing' fontSize={{ base: '20px', md: '50px'}} fontWeight='600' mb='1'>모든 구독 서비스를 한눈에!</Box>
				<Box className='typing2' fontSize={{ base: '12px', md: '25px'}} mb='10'>SUBSTER에서 세상 모든 구독 서비스를 구경하세요.</Box>
				<Link to='/category/ott'><Button p='5' className='floating'>둘러보기</Button></Link>
			</Box>
			<Image className='floating2' src={process.env.PUBLIC_URL+'/img/front.png'} alt='frontLogo' h='80%' ml='10'/>
		</Box>
		<Box w={{ base: '350px', md: '700px', lg: '900px'}} fontSize={{ base: '20px', md: '25px'}} fontFamily='Noto Sans' fontWeight='600' mb={{ base: '4', md: '10', lg: '4'}}>인기</Box>
		<Slider img={popular} link={popularLink}/>
		<Box w={{ base: '350px', md: '700px', lg: '900px'}} fontSize={{ base: '20px', md: '25px'}} fontFamily='Noto Sans' fontWeight='600' mt='20' mb={{ base: '4', md: '10', lg: '4'}}>오늘의 발견</Box>
		<Slider img={found} link={foundLink}/>
		<Box h='200px'></Box>
	</Box>;
}

export default Main;