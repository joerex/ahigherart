import React, {Component} from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import {changeCurrentSlideIndex} from '../App';
import {connect, dispatch} from 'react-redux';
import images from '../images';
import './Slideshow.css';

class SlideshowComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      initialSlide: this.props.currentSlideIndex,
      slickGoTo: this.props.currentSlideIndex,
      afterChange: this.props.onAfterChange.bind(this),
    };

    const slides = images.map((url) =>
      <div className="image-wrap"><img src={url} /></div>
    );

    return (
      <div onMouseEnter={this.props.onPauseSlideshow}
           onMouseLeave={this.props.onResumeSlideshow}>
        <Slider {...settings} ref={slider => this.slider = slider}>
          {slides}
        </Slider>
      </div>
    )
  }
}

SlideshowComponent.propTypes = {
  currentSlideIndex: PropTypes.number,
  onAfterChange: PropTypes.func,
  onPauseSlideshow: PropTypes.func,
  onResumeSlideshow: PropTypes.func,

};

const mapStateToProps = state => {
  return {
    currentSlideIndex: state.currentSlideIndex
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAfterChange: (index) => {
      dispatch({type: 'CHANGE_SLIDE_INDEX', payload: index});
    },
    onPauseSlideshow: () => {
      dispatch({type: 'PAUSE_SLIDESHOW'});
    },
    onResumeSlideshow: () => {
      dispatch({type: 'RESUME_SLIDESHOW'});
    }
  }
};

const Slideshow = connect(
  mapStateToProps,
  mapDispatchToProps
)(SlideshowComponent);

export default Slideshow;