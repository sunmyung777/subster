import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import itemData from './items';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Details from './components/Details';
import Main from './pages/Main';
import Book from './pages/Book';
import Food from './pages/Food';
import Life from './pages/Life';
import Ott from './pages/Ott';
import Others from './pages/Others';
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
					  <Route path='/book' element={<Book list={itemData.book}/>} />
					  <Route path='/food' element={<Food list={itemData.food}/>} />
					  <Route path='/life' element={<Life list={itemData.life}/>} />
					  <Route path='/ott' element={<Ott list={itemData.ott}/>} />
					  <Route path='/others' element={<Others list={itemData.others}/>} />
					 <Route path='/details' element={<Details/>}/>
			 	 </Routes>
		  	</Router>
		  	<Footer/>
		</MyProvider>
	</ChakraProvider>
  );
}

export default App;
