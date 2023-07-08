import React from 'react';
import { Box, VStack, Image, Stack, Radio, RadioGroup} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import Item from '../components/Item';

function Book(props){
	const [value, setValue] = React.useState('1');
	return(
		<VStack>
			<Box display='flex' justifyContent='space-around' m='5' w='800px'>
				<Link to='/ott'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/ott.png'} alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>OTT</Box></VStack></Link>
				<Link to='/life'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/life.png'} alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>생활</Box></VStack></Link>
				<Link to='/book'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/book.png'} alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>도서</Box></VStack></Link>
				<Link to='/food'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/food.png'} alt='' boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>식품</Box></VStack></Link>
				<Link to='/others'><VStack><Image src={process.env.PUBLIC_URL+'/img/categories/others.png'} alt=''boxSize='50px'/><Box fontFamily='Noto Sans' fontWeight='600' fontSize='15px'>기타</Box></VStack></Link>
			</Box>
			<RadioGroup onChange={setValue} value={value} w='70%'>
				<Stack direction='row' float='right'>
					<Radio value='1' colorScheme='purple'>인기순</Radio>
					<Radio value='2' colorScheme='purple'>최신순</Radio>
					<Radio value='3' colorScheme='purple'>낮은 가격순</Radio>
				</Stack>
			</RadioGroup>
			<Box display="flex" w="80%" h="80%" flexWrap="wrap" justifyContent='center'>
			{(props.list).map((item)=>(
				<Item value={item}/>
			))}
			</Box>
		</VStack>
		   );
}
export default Book;