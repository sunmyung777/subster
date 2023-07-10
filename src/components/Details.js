import React from 'react';
import {useState} from 'react';
import {Navigate } from 'react-router-dom';
import {Box, Slider,SliderMark, SliderTrack,SliderFilledTrack,SliderThumb, Button,Card,CardHeader,CardBody,CardFooter } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import detailData from '../details';

import {useDetailState} from '../context';
function Detail(){
	const [details]=useDetailState();
	const [sliderValue, setSliderValue] = useState(6);
	const data=detailData[details.id];
	if(Object.entries(details).toString()===''){
		return <Navigate replace to='/'/>
	}
	return <Box w='100%' bg='#E6E6E6' display='flex' alignItems='center' flexDirection='column' fontFamily='Noto Sans'>
		<Box w='60%' fontSize='40px' fontWeight='bold' mt='30'>{details.name}</Box>
		<Box w='60%' fontSize='30px' fontWeight='light' mt='1'>{details.class}</Box>
		<Box w='60%' display='flex' mt='10'>
			<Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
				<img src={process.env.PUBLIC_URL+details.img} alt='' width='400px' style={{borderRadius: '5%'}}/>
				<a href={details.link}><Button colorScheme='purple' w='150px' h='30px' variant='solid' mt='5' rightIcon={<ExternalLinkIcon/>}>사이트로 이동</Button></a>
			</Box>
			<Box p='1' ml='1%' w='45%' display='flex' justifyContent='space-around' flexDirection='column'>
				{(data.character).map((item)=>(
				<Box fontSize='20px' fontWeight='light' color='#151515'>✓ {item}</Box>
			))}
			</Box>
		</Box>
		<Box w='60%' fontSize='30px' fontWeight='bold'>가격</Box>
		<Box p='2'w='40%' display='flex' alignItems='center' border='1px solid #BDBDBD' borderRadius='5px'>
			<Slider onChange={(val) => setSliderValue(val)} defaultValue={6} min={1} max={12} step={1}>
				<SliderMark
  	      	  value={sliderValue}
  	      	  textAlign='center'
  	      	  bg='#6667AB'
  	      	  color='#E6E6E6'
  	      	  mt='-10'
  	      	  ml='-5'
  	      	  w='20'>
					{sliderValue}개월
				</SliderMark>
				<SliderTrack bg='purple.100'>
					<SliderFilledTrack bg='purple.300'/>
				</SliderTrack>
				<SliderThumb />
			</Slider>
		</Box>
		{ typeof(data.price)=='string' && data.price}
		{ typeof(data.price)=='object' ?
			<Box display='flex'>
			 {(data.price).map((val)=>(
				 <Card w='250px' h='250px' m='10' boxShadow='xl'>
					 <CardHeader bg='#6667AB'>
						 <Box fontSize='20px' color='#fff'>{val.plan}</Box>
					 </CardHeader>
					 <CardBody>
						 <Box fontSize='15px'>{val.target}</Box>
					 </CardBody>
					 <CardFooter justifyContent='center'>
						 <Box color='#6667AB' fontSize='30px' fontWeight='bold'>{typeof(val.price)=='object' ? val.price[sliderValue-1]+'원' : val.price*sliderValue+'원'}</Box>
					 </CardFooter>
				 </Card>
			 ))}
		 </Box>
			:null}
	</Box>;
}
export default Detail;