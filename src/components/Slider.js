import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Box } from '@chakra-ui/react'
function Slider(props){
	return <Box boxShadow='2xl'><SimpleImageSlider
		width={1000}
		height={500}
		images={props.img}
		showBullets={true}
		showNavs={true}
		loop={true}
	/></Box>;
}

export default Slider;