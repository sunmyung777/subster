import React from 'react';
import { Box,Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {useDetailState} from '../context';

function Item(props){
	const [ ,setDetails ] = useDetailState();
	const clicked=()=>setDetails(props);
	return <Card maxW='sm' m='1%' minW='sm'>
  <CardBody>
    <Box w='340px' h='200px' overflow='hidden' display='flex' alignItems='center'><img src={process.env.PUBLIC_URL+props.img} alt='' width='100%' loading='lazy'/></Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.name}</Heading>
      <Text color='#6667AB' fontSize='2xl'>
        {props.price}원
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
		<a href={props.link} target='_blank' rel='noreferrer'>
      		<Button variant='solid' colorScheme='purple'>
        		사이트로 이동
      		</Button>
		</a>
      <Button variant='ghost' colorScheme='purple' onClick={clicked}>
        <Link to='/details'>상세보기</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
}

export default Item;