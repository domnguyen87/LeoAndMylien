import React, { Component } from 'react';
import Header from './components/Header'
import Slider from './components/Slider'
import CountDown from './components/CountDown'
import Info from './components/Info'
import OurStory from './components/OurStory'
import Quotes from './components/Quotes'
import Photos from './components/Photos'
import Rsvp from './components/Rsvp'
import Video from './components/Video'
import Video2 from './components/Video2'
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Slider />
        <CountDown />
        <Info />
        <OurStory />
        <Quotes />
        <Photos />
        <Rsvp />
        <Video />
        <Video2 />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
