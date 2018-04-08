import React from 'react';
import Slideshow from './Slideshow';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import {connect, dispatch} from 'react-redux';
import {Link} from 'react-router-dom';

const AboutComponent = (props) => {
  return (
    <React.Fragment>
      <div id="overlay" onClick={props.handleOnClick}><Link to="/" className="back-to-home"></Link></div>
      <div className="content row">
        <div className="d-none d-lg-block col-lg-6">
          <MediaQuery query="(min-width: 992px)">
            <img src="/assets/about.jpg" />
          </MediaQuery>
        </div>

        <div className="col-lg-6">
          <p>
            <strong>A HIGHER ART</strong> is an upcoming short documentary series that investigates the art of religious ritual, ceremony, and spectacle. The project is currently in production, filming on location in Penang, Kuala Lampur, Taipei, Singkawang, Bali, and Bangkok.
          </p>
          <MediaQuery query="(max-width: 991px)">
            <Slideshow/>
          </MediaQuery>
          <p>
            Videos and website coming soon. For more information contact Kirk Zamieroski: <a href="mailto:kirk@ahigherart.com">kirk@ahigherart.com</a>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
};

AboutComponent.propTypes = {
  handleOnClick: PropTypes.func
};

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnClick: () => {
      dispatch({type: 'GO_HOME'});
    }
  }
};

const About = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutComponent);

export default About;