import React from 'react';
import {Link} from 'react-router-dom';

const Teaser = () => {
  return (
    <React.Fragment>
      <div id="overlay"><Link to="/" className="back-to-home"></Link></div>
      <div className="video-wrap">
        <div className="video">
          <iframe src="https://player.vimeo.com/video/245193050?title=0&byline=0&portrait=0&share=0" frameBorder="0" allowFullScreen />
        </div>
      </div>
    </React.Fragment>
  )
};

export default Teaser;