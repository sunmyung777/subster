import React from 'react';
import {useState} from 'react';
import {Navigate } from 'react-router-dom';
import {Box, Slider,SliderMark, SliderTrack,SliderFilledTrack,SliderThumb } from "@chakra-ui/react";
import {useDetailState} from '../context';
function Detail(){
	const [details]=useDetailState();
	const [sliderValue, setSliderValue] = useState(6);

	console.log([details]);
	if(Object.entries(details).toString()===''){
		return <Navigate replace to='/'/>
	}
	return <Box w='100%' bg='#E6E6E6' display='flex' alignItems='center' flexDirection='column' fontFamily='Noto Sans'>
		<Box w='60%' fontSize='40px' fontWeight='bold' mt='30'>{details.name}</Box>
		<Box w='60%' fontSize='30px' fontWeight='light' mt='1'>{details.class}</Box>
		<Box w='60%' display='flex' mt='10'>
			<Box bg='#FAFAFA' w='400px' h='300px' display='flex' alignItems='center' justifyContent='center' border='1px solid #BDBDBD' borderRadius='20px'>
				<img src={process.env.PUBLIC_URL+details.img} alt='' width='300px'/>
			</Box>
			<Box p='1' ml='1%' w='45%' h='300px' display='flex' justifyContent='space-around' flexDirection='column'>
				<Box>✔️ 특징 1</Box>
				<Box>✔️ 특징 2</Box>
				<Box>✔️ 특징 3</Box>
				<Box>✔️ 특징 4</Box>
			</Box>
		</Box>
		<Box w='60%' fontSize='30px' fontWeight='bold'>가격</Box>
		<Box p='2'w='40%' display='flex' alignItems='center' border='1px solid #BDBDBD' borderRadius='5px'>
			<Slider onChange={(val) => setSliderValue(val)} defaultValue={6} min={0} max={12} step={1}>
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
		<Box textAlign='center'>{1 * sliderValue * details.price}원</Box>
	</Box>;
}
export default Detail;