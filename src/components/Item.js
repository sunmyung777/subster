import React from 'react';
import { Box,Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button} from '@chakra-ui/react';

function Item(props){
	return <Card maxW='sm' m='1%' minW='sm'>
  <CardBody>
    <Box w='340px' h='200px' overflow='hidden' display='flex' alignItems='center'><img src={props.img} alt='' width='100%'/></Box>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{props.name}</Heading>
      <Text color='blue.600' fontSize='2xl'>
        {props.price}원
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
		<a href={props.link} target='_blank' rel='noreferrer'>
      		<Button variant='solid' colorScheme='blue'>
        		사이트로 이동
      		</Button>
		</a>
      <Button variant='ghost' colorScheme='blue'>
        비교하기
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
}

export default Item;