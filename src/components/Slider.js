import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

function Slider(props){
	return <SimpleImageSlider
		width={1000}
		height={500}
		images={props.img}
		showBullets={true}
		showNavs={true}
		loop={true}
	/>;
}

export default Slider;