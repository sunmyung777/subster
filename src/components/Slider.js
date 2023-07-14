import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import { Box } from '@chakra-ui/react';
import useResizeObserver from "use-resize-observer";

function Slider(props){
	const { ref, width = 1, height = 1 } = useResizeObserver();
	return <Box boxShadow='2xl' ref={ref} w={{ base: '100%', md: '100%', lg:'1000px'}} h={{ base: '200px', md: '350px', lg:'500px'}}><SimpleImageSlider
		width={width}
		height={height}
		images={props.img}
		showBullets={true}
		showNavs={true}
		loop={true}
	/></Box>;
}

export default Slider;