import React from 'react';
import { useParams } from 'react-router-dom';
import {Box,VStack} from '@chakra-ui/react';
import itemData from '../items';
import Item from '../components/Item';
function Search(){
	const { search } = useParams();
	var temp=[];
	Object.values(itemData).map(category=>
		temp.push(category.filter(item=>
			item.name.toLowerCase().includes(search)
		)
	))
	const searched=[].concat(...temp);
	return <VStack>
		<Box mt={{ base: '80px', md: '120px'}} fontSize={{ base: '25px', md: '50px'}} fontWeight='bold'>"{search}" 검색결과</Box>
		<Box mt='5' display="flex" w={{ base: '100%', lg: '80%'}} flexWrap="wrap" justifyContent='center' mb='10'>
		{searched.map(item=>
			<Item value={item}/>
		)}
		</Box>
		</VStack>;
}

export default Search;