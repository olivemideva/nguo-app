import './App.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import { Box, Switch } from '@mui/material';

import { Navbar } from './components';
import { LoginandRegister } from './components';

import casualc from './img/casualc.jpg';
import casualw from './img/casualw.jpg';
import casualm from './img/casualm.jpg';

import formalc from './img/formalc.jpg';
import formalw from './img/formalw.jpg';
import formalm from './img/formalm.jpg';

import sportsc from './img/sportsc.jpg';
import sportsf from './img/sportsf.jpg';
import sportsm from './img/sportsm.jpg';

const App = () => (
  <BrowserRouter>
  <Box className= "main">
  <Navbar />
  <p className='slogan'>Welcome to Nguo Where Your Style is Our Priority Feel Free to Look Around ... </p>
  <Routes>
  <Route exact path='./loginandregister' component={LoginandRegister} />
  </Routes>
  </Box>
  <Box className='contents'>
    <Box className='casual'>
      <Box className='img'>
      <AwesomeSlider>
      <div data-src={casualc} />
      <div data-src={casualw} />
      <div data-src={casualm} />
      </AwesomeSlider>
      </Box>
    <Box className='notes'>
      <p>Feel Comfortable and Cozy With Our Casual Outfits for Women, Men and Children</p>
    </Box>
    </Box>
    <Box className='formal'>
    <Box className='img'>
    <AwesomeSlider>
      <div data-src={formalc} />
      <div data-src={formalw} />
      <div data-src={formalm} />
      </AwesomeSlider>
      </Box>
    <Box className='notes'>
    <p>Feel Professional With Our Formal Outfits for Women, Men and Children</p>
    </Box>
    </Box>
    <Box className='sport'>
    <Box className='img'>
    <AwesomeSlider>
      <div data-src={sportsc} />
      <div data-src={sportsf} />
      <div data-src={sportsm} />
      </AwesomeSlider>
      </Box>
    <Box className='notes'>
    <p>Have a Nice Workout With Our Sports Outfits for Women, Men and Children</p>
    </Box>
    </Box>
  </Box>
  </BrowserRouter>
  )

export default App;
