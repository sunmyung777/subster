import React from 'react';
import { Box,Card, CardBody, Text, Stack, Heading,extendTheme} from '@chakra-ui/react';
import { Link  } from 'react-router-dom';

const breakpoints = {
  sm: '375px',
  md: '414px',
  lg: '820px',
  xl: '1024px',
  '2xl': '1920px',
}
const theme = extendTheme({ breakpoints });

function Item(props){
	return <Link to={'/'+props.value.id}>
		<Card size={{ base: 'sm',lg: 'lg'}} m={{ base: '2', md: '5'}} boxShadow='2xl' border='1px solid #D9D9D9' zIndex='1'>
			<CardBody>
				<Box w='320px' h='200px' overflow='hidden' display='flex' alignItems='center' justifyContent='center'><img src={process.env.PUBLIC_URL+props.value.img} alt='' width='100%' loading='lazy'/></Box>
				<Stack mt='6' spacing='3'>
					<Heading size='md'>{props.value.name}</Heading>
					<Text size='sm'>{props.value.className}</Text>
					<Text color='#6667AB' fontSize='24px'>
						{typeof(props.value.price)=='number' && props.value.price+'원'}
						{typeof(props.value.price)=='string' && props.value.price}
					</Text>
				</Stack>
			</CardBody>
		</Card>
	</Link>
}

export default Item;