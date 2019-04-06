import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="tzloadding">
          <img class="loadding_img" src="images/loadding.GIF" alt="Image" />
        </div>
        <div class="everline_boxed">
          <Header />
          
        </div>
      </React.Fragment>
    );
  }
}

export default App;
