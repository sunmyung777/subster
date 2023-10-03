import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import './Slider.css';

function Slider(props){
	const [current, setCurrent] = useState(0);
	const length = props.img.length;
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	return <Box boxShadow='2xl' w={{ base: '100%', md: '100%', lg:'1000px'}} h={{ base: '180px', md: '350px', lg:'500px'}} position='relative' display='flex' justifyContent='center' alignItems='center' zIndex='1'>
		<img src={process.env.PUBLIC_URL+'/img/left-arrow.png'} alt='left-arrow' className='left-arrow' loding='lazy' onClick={prevSlide} width='30px'/>
		<img src={process.env.PUBLIC_URL+'/img/right-arrow.png'} alt='right-arrow' className='right-arrow' loding='lazy' onClick={nextSlide} width='30px'/>
		{(props.img).map((slide,index)=>{
			return(
			<div className={index === current ? 'slide active' : 'slide'} key={index}>
					{index === current && (<a href={process.env.PUBLIC_URL+props.link[current]}rel='noreferrer'target='_blank'><img src={process.env.PUBLIC_URL+slide.url} alt='slider' className='image' loding='lazy'/></a>)}
			</div>
			)
		})}
	</Box>;
}

export default Slider;