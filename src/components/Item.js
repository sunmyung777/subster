import React from 'react';
import { Box,Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useDetailState} from '../context';

function Item(props){
	const [ ,setDetails ] = useDetailState();
	const clicked=()=>setDetails(props.value);
	return <Card w='370px' m={{ base: '2', md: '5'}} boxShadow='2xl'>
  <CardBody>
    <Box w='340px' h='200px' overflow='hidden' display='flex' alignItems='center'><img src={process.env.PUBLIC_URL+props.value.img} alt='' width='100%' loading='lazy'/></Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.value.name}</Heading>
      <Text color='#6667AB' fontSize='24px'>
        {typeof(props.value.price)=='number' && props.value.price+'원'}
		{typeof(props.value.price)=='string' && props.value.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
		<a href={props.value.link} target='_blank' rel='noreferrer'>
      		<Button variant='solid' colorScheme='purple' w='132px' fontSize='16px'>
        		사이트로 이동
      		</Button>
		</a>
      <Button variant='ghost' colorScheme='purple' onClick={clicked} fontSize='16px' w='132px'>
        <Link to='/details'>상세보기</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
}

export default Item;