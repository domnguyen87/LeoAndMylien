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
        <div className="livedemo">
          <h6 className="live_title">
            <em>Skill style</em>
            <span class="live_icon">
              <i class="fa fa-paint-brush"></i>
            </span>
          </h6>
          <div class="live-content">
            <span class="live-t">Color</span>
            <ul>
              <li class="home1 iconclick" data-option-value="themecolor1">
                <img src="images/livedemo/homecolor1.jpg" alt="color 2"/>
                </li>
                <li class="home2 iconclick" data-option-value="themecolor2">
                <img src="images/livedemo/homecolor2.jpg" alt="color 2" />
                </li>
                  <li class="home3 iconclick" data-option-value="themecolor3">
                <img src="images/livedemo/homecolor3.jpg" alt="color 2" />
                </li>
                    <li class="home4 iconclick" data-option-value="themecolor4">
                <img src="images/livedemo/homecolor4.jpg" alt="color 2" />
                </li>
                      <li class="home5 iconclick" data-option-value="themecolor5">
                <img src="images/livedemo/homecolor5.jpg" alt="color 2" />
                </li>
                        <li class="home6 iconclick" data-option-value="themecolor6">
                <img src="images/livedemo/homecolor6.jpg" alt="color 2" />
                </li>
                          <li class="home7 iconclick" data-option-value="themecolor7">
                <img src="images/livedemo/homecolor7.jpg" alt="color 2" />
                </li>
                            <li class="home8 iconclick" data-option-value="themecolor8">
                <img src="images/livedemo/homecolor8.jpg" alt="color 2" />
                </li>
                              <li class="home9 iconclick" data-option-value="themecolor">
                <img src="images/livedemo/homecolor9.jpg" alt="color 2" />
                </li>
            </ul>
                              <span class="live-t">Site Layout</span>
                              <ul class="livebox">
                                <li class="fullbox">
                                  <span>Full box</span>
                                </li>
                                <li class="lboxed">
                                  <span>Boxed</span>
                                </li>
                              </ul>
                              <div class="live-bkcontro">
                                <span class="live-bk">Background</span>
                                <ul class="live-patterns">
                                  <li data-option-text="patterns/60degree_gray.png">
                  <img src="images/patterns/60degree_gray.png" alt="patterns 2" />
                    </li>
                                    <li data-option-text="patterns/absurdidad.png">
                  <img src="images/patterns/absurdidad.png" alt="patterns 2" />
                    </li>
                                      <li data-option-text="patterns/always_grey.png">
                                        <img src="images/patterns/always_grey.png" alt="patterns 2"/>
                    </li>
                                        <li data-option-text="patterns/back_pattern.png">
                  <img src="images/patterns/back_pattern.png" alt="patterns 2" />
                    </li>
                                          <li data-option-text="patterns/black_mamba.png">
                  <img src="images/patterns/black_mamba.png" alt="patterns 2" />
                    </li>
                                            <li data-option-text="patterns/silver_scales.png">
                  <img src="images/patterns/silver_scales.png" alt="patterns 2" />
                    </li>
                                              <li data-option-text="patterns/norwegian_rose.png">
                  <img src="images/patterns/norwegian_rose.png" alt="patterns 2" />
                    </li>
                                                <li data-option-text="patterns/tiny_grid.png">
                  <img src="images/patterns/tiny_grid.png" alt="patterns 2" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
        <div id="tzloadding">
          <img className="loadding_img" src="images/loadding.GIF" alt="Image" />
        </div>
        <div className="everline_boxed">
          
          <Header />
          {/* <Slider />
          <CountDown />
          <Info />
          <OurStory />
          <Quotes />
          <Photos />
          <Rsvp />
          <Video />
          <Video2 />
          <Footer /> */}
          
        </div>
      </React.Fragment>
    );
  }
}

export default App;
