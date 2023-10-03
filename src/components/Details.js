import React from 'react';
import {useState, useEffect} from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {Box,Image, Slider,SliderMark, SliderTrack,SliderFilledTrack,SliderThumb, Button,Card,CardHeader,CardBody,extendTheme } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';
import detailData from '../details';
import itemData from '../items';
import Notion from './Notion';

const breakpoints = {
  sm: '375px',
  md: '414px',
  lg: '820px',
  xl: '1024px',
  '2xl': '1920px',
}
const theme = extendTheme({ breakpoints });

function Detail(){
	const [sliderValue, setSliderValue] = useState(1);
	useEffect(()=>{
		window.scrollTo(0, 0);
	},[]);
	var check=false;
	var details={};
	const { id } = useParams();
	for(var i in itemData){
		for(var j of itemData[i]){
			if(j['id']==id){
				check=true;
				details=j;
				break;
			}
		}
	}
	if(!check){
		return <Navigate to='/'/>;
	}
	const data=detailData[id];
	return <Box w='100%' display='flex' alignItems='center' flexDirection='column' fontFamily='Noto Sans'>
		<Box w={{ base: '80%', xl: '60%'}} fontSize={{ base: '30px', lg: '40px'}} fontWeight='bold' mt='30' mt={{ base: '80px', md: '120px'}}>{details.name}</Box>
		<Box w={{ base: '80%', xl: '60%'}} fontSize='20px' fontWeight='light' mt='1'>{details.className}</Box>
		<Box w={{ base: '80%',md:'95%', xl: '60%'}} display='flex' mt='10' flexDirection={{ base: 'column', md: 'row'}}>
			<Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
				<Image src={process.env.PUBLIC_URL+details.img} alt='details' boxSize='400px' boxShadow='2xl' fit='contain'/>
				<a href={details.link}><Button colorScheme='purple' w='150px' h='50px' variant='solid' mt='5' rightIcon={<ExternalLinkIcon/>}>사이트로 이동</Button></a>
			</Box>
			<Box p='1' ml={{ base: '0', md: '10'}} mt={{ base: '2', md: '0'}} w={{ base: '300px', md: '600px'}} display='flex' justifyContent='space-around' flexDirection='column'>
				{(data.character).map((item)=>(
				<Box fontSize={{ base: '15px', md: '20px'}} fontWeight='bold' color='#151515' mt={{ base: '2', md: '0'}}>{item}</Box>
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
			<Box display='flex' flexDirection={{ base: 'column', md: 'row'}} w='100%' flexWrap='wrap' alignItems='center' justifyContent='center'>
			 {(data.price).map((val)=>(
				 <Card w={{ base:'300px', lg: '250px'}} h='250px' m={{ base: '2', xl: '10'}} boxShadow='xl'>
					 <CardHeader bg='#6667AB'>
						 <Box fontSize='20px' color='#fff'>{val.plan}</Box>
					 </CardHeader>
					 <CardBody>
						 <Box fontSize='15px'>{val.target}</Box>
						 <Box color='#6667AB' fontSize='30px' fontWeight='bold' position='absolute' bottom='5px'>{typeof(val.price)=='object' ? val.price[sliderValue-1]+'원' : val.price*sliderValue+'원'}</Box>
					 </CardBody>
				 </Card>
			 ))}
		 </Box>
			:null}
		<Box w={{ base:'300px',md:'800px', lg: '800px'}}><Notion id={data['id']}/></Box>
	</Box>;
}
export default Detail;