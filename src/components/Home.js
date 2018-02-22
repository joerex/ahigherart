import React from 'react';
import MediaQuery from 'react-responsive';
import Teaser from './Teaser';
import About from './About';

const Home = () => {
  return (
    <React.Fragment>
      <MediaQuery query="(min-width: 1024px)">
      </MediaQuery>
      <MediaQuery query="(max-width: 1023px)">
        <Teaser />
        <About />
      </MediaQuery>
    </React.Fragment>
  )
};

export default Home;