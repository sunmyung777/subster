import React from 'react';
import { Box,Icon } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';
function Footer(){
	return<Box w='100%' h='200px' bg='#6667AB' display='flex' justifyContent='center' alignItems='center' fontFamily='Noto Sans' fontSize={{ base: '10px', md: '15px'}}>
		<Box display='flex' flexDirection='column' color='#E6E6E6' mr={{ base: '2', md: '20'}}>
			<Box fontWeight='bold' fontSize={{ base: '15px', md: '20px'}}>카테고리</Box>
			<a href='/ott'>OTT</a>
			<a href='/life'>생활</a>
			<a href='/book'>도서</a>
			<a href='/food'>식품</a>
			<a href='/others'>기타</a>
		</Box>
		<Box display='flex' flexDirection='column' color='#E6E6E6' mr={{ base: '2', md: '20'}}>
			<Box fontWeight='bold' fontSize={{ base: '15px', md: '20px'}}>고객지원</Box>
			<a href='mailto:mksun8472@gmail.com'>피드백</a>
			<a href='mailto:mksun8472@gmail.com'>서비스 등록</a>
			<a href='mailto:mksun8472@gmail.com'>등록 서비스 개선&변경</a>
			<Box color='#BDBDBD' mt={{ base: '2', md: '5'}}>※현재 고객지원 이용은 이메일을 통해 문의해주세요.</Box>
		</Box>
		<a href='mailto:mksun8472@gmail.com'>
			<Box display='flex' flexDirection='column' color='#E6E6E6'alignItems='center'>
				<Icon as={EmailIcon} boxSize={{ base: '50px', md: '70px'}}/>
				문의하기
			</Box>
		</a>
	</Box>;
}

export default Footer;