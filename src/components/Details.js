import React from 'react';
import {useState} from 'react';
import {Navigate } from 'react-router-dom';
import {Box, Slider,SliderMark, SliderTrack,SliderFilledTrack,SliderThumb, Button,Card,CardHeader,CardBody } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import detailData from '../details';

import {useDetailState} from '../context';
function Detail(){
	 window.scrollTo(0, 0);
	const [details]=useDetailState();
	const [sliderValue, setSliderValue] = useState(1);
	const data=detailData[details.id];
	if(Object.entries(details).toString()===''){
		return <Navigate replace to='/'/>
	}
	return <Box w='100%' bg='#E6E6E6' display='flex' alignItems='center' flexDirection='column' fontFamily='Noto Sans'>
		<Box w={{ base: '80%', md: '60%'}} fontSize='40px' fontWeight='bold' mt='30'>{details.name}</Box>
		<Box w={{ base: '80%', md: '60%'}} fontSize='20px' fontWeight='light' mt='1'>{details.className}</Box>
		<Box w={{ base: '80%', md: '60%'}} display='flex' mt='10' flexDirection={{ base: 'column', md: 'row'}}>
			<Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
				<img src={process.env.PUBLIC_URL+details.img} alt='details' width='400px' style={{borderRadius: '5%'}}/>
				<a href={details.link}><Button colorScheme='purple' w='150px' h='50px' variant='solid' mt='5' rightIcon={<ExternalLinkIcon/>}>사이트로 이동</Button></a>
			</Box>
			<Box p='1' ml={{ base: '0', md: '2'}} mt={{ base: '2', md: '0'}} w={{ base: '300px', md: '400px'}} display='flex' justifyContent='space-around' flexDirection='column'>
				{(data.character).map((item)=>(
				<Box fontSize={{ base: '15px', md: '20px'}} fontWeight='bold' color='#151515' mt={{ base: '2', md: '0'}}>✓ {item}</Box>
			))}
			</Box>
		</Box>
		<Box w={{ base: '80%', md: '60%'}} mt='10' mb={{ base: '1', md: '5'}} fontSize='30px' fontWeight='bold'>가격</Box>
		<Box w={{ base: '80%', md: '60%'}} mb='10' fontSize={{ base: '13px', md: '20px'}}>스크롤을 통해 구독 기간의 비용을 예상해 보세요!</Box>
		<Box p='2'w={{ base: '80%', md: '40%'}} display='flex' alignItems='center' border='1px solid #BDBDBD' borderRadius='5px'>
			<Slider onChange={(val) => setSliderValue(val)} defaultValue={1} min={1} max={12} step={1}>
				<SliderMark
  	      	  value={sliderValue}
  	      	  textAlign='center'
  	      	  bg='#6667AB'
  	      	  color='#E6E6E6'
  	      	  mt='-10'
  	      	  ml='-10'
  	      	  w='20'>
					{sliderValue}개월
				</SliderMark>
				<SliderTrack bg='purple.100'>
					<SliderFilledTrack bg='purple.300'/>
				</SliderTrack>
				<SliderThumb />
			</Slider>
		</Box>
		{ typeof(data.price)=='string' && 
			<Box mt='10' mb='20'fontWeight='bold' fontSize='30px'>{data.price}</Box>
		}
		{ typeof(data.price)=='object' ?
			<Box display='flex' flexDirection={{ base: 'column', md: 'row'}}>
			 {(data.price).map((val)=>(
				 <Card w='250px' h='250px' m={{ base: '2', lg: '10'}} boxShadow='xl'>
					 <CardHeader bg='#6667AB'>
						 <Box fontSize='20px' color='#fff'>{val.plan}</Box>
					 </CardHeader>
					 <CardBody>
						 <Box fontSize='15px'>{val.target}</Box>
						 <Box color='#6667AB' fontSize='30px' fontWeight='bold' position='absolute' bottom='5px' w='210px' textAlign='center'>{typeof(val.price)=='object' ? val.price[sliderValue-1]+'원' : val.price*sliderValue+'원'}</Box>
					 </CardBody>
				 </Card>
			 ))}
		 </Box>
			:null}
	</Box>;
}
export default Detail;