import './App.css';

import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { Title } from './Components/Title/Title';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import { Campus } from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimoials';
import { Contacts } from './Components/Contacts/Contacts';
import { Footer } from './Components/Footer/Footer';
import { VideoPlayer } from './Components/VideoPlayer/VideoPlayer';

function App() {
const [playState,setPlayState]=useState(false);
  return <>
<Navbar/>
<Hero/>
<Title subTitle='Our Program' title='what we offer'/>
<Programs/>
<About setPlayState={setPlayState}/>
<Title subTitle='Gallery' title='Cammpus photos'/>
<Campus/>
<Title subTitle=' TESTMONALS ' title='what student says '/>
<Testimonials/>

<Title subTitle=' Contact US ' title='Get in Touch '/>
<Contacts/>
<Footer/>
<VideoPlayer playState={playState} setPlayState={setPlayState}/>









  </>
  
}

export default App;