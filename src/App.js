import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Details from './components/Details';
import Main from './pages/Main';
import Category from './pages/Category';
import Search from './pages/Search';
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
					 <Route path='/category/:category' element={<Category/>} />
					 <Route path='/:id' element={<Details/>}/>
					 <Route path='/search/:search' element={<Search/>}/>
					 <Route path='/*' element={<Navigate to='/' />} />
				 </Routes>
			</Router>
			<Footer/>
	</ChakraProvider>
  );
}

export default App;
