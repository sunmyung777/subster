import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import itemData from './items';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Details from './components/Details';
import Main from './pages/Main';
import Category from './pages/Category';
import {MyProvider} from './context';
/* eslint-disable */


function App() {
  return (
    <ChakraProvider>
		  <MyProvider>
		  	<Router>
			 	 <Nav/>
			 	 <Routes>
					  <Route exact path='/' element={<Main />} />
					  <Route path='/book' element={<Category list={itemData.book}/>} />
					  <Route path='/food' element={<Category list={itemData.food}/>} />
					  <Route path='/life' element={<Category list={itemData.life}/>} />
					  <Route path='/ott' element={<Category list={itemData.ott}/>} />
					  <Route path='/others' element={<Category list={itemData.others}/>} />
					 <Route path='/details' element={<Details/>}/>
			 	 </Routes>
		  	</Router>
		  	<Footer/>
		</MyProvider>
	</ChakraProvider>
  );
}

export default App;
