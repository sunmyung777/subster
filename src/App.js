import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import itemData from './items';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Details from './components/Details';
import Main from './pages/Main';
import Category from './pages/Category';
/* eslint-disable */

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {
  return (
    <ChakraProvider>
		<Router>
			 <Nav/>
			 <Routes>
				  <Route exact path='/' element={<Main />} />
				  <Route path='/:category' element={<Category/>} />
				 <Route path=':category/details/:id' element={<Details/>}/>
			 </Routes>
		</Router>
		<Footer/>
	</ChakraProvider>
  );
}

export default App;
