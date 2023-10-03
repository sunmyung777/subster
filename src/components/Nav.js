import React,{useState} from 'react';
import { Box, Image,extendTheme,Input } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';
import './Nav.css';

const breakpoints = {
  sm: '375px',
  md: '414px',
  lg: '820px',
  xl: '1024px',
  '2xl': '1920px',
}
const theme = extendTheme({ breakpoints });


function Nav(){
	const [val,setVal]=useState('');
	const [clk,setClk]=useState(true);
	const onchange=(event)=>{
		setVal(event.target.value);
	};
	const navClick=()=>{
		setClk(!clk);
	};
	return <Box w='100%' h={{ base: '60px', md: '100px'}} borderBottom="1px solid #BFBFBF" position='fixed' backgroundColor='white' zIndex='3'>
		<Link to='/'>
			<Image src={process.env.PUBLIC_URL+'/img/logo/logo4.jpg'} alt='logo' mt={{ base: '5px', md: '10px'}} ml='1' width={{ base: '125px', md: '200px'}} float='left'/>
		</Link>
		<Box className='hamber' float='right' mt='20px' onClick={navClick} mr='3'><HamburgerIcon boxSize={{ base: '25px', md: '50px'}}/></Box>
		<Box float='right' display={clk?'flex':'none'} flexDirection={{ base: 'column', md: 'row'}} className='navbar' backgroundColor='#fff' borderBottom='1px solid #BFBFBF'>
			<form action={'/search/'+val} className='formtag'><Input value={val} ml='3' onChange={onchange} mt='30px'variant='flushed' width='300px' placeholder='원하는 구독 서비스를 검색하세요.'/></form>
			<Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
				<Link to='/category/ott'><Box className='category'>OTT</Box></Link>
				<Link to='/category/life'><Box className='category'>생활</Box></Link>
				<Link to='/category/book'><Box className='category'>도서</Box></Link>
				<Link to='/category/food'><Box className='category' >식품</Box></Link>
				<Link to='/category/others'><Box className='category'>기타</Box></Link>
			</Box>
		</Box>
	</Box>
}

export default Nav;
