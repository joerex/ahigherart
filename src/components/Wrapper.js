import React, {Component} from 'react';
import {BrowserRouter, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';
import {changeCurrentSlideIndex} from '../App';
import {connect, dispatch} from 'react-redux';
import About from './About';
import Home from './Home';
import Teaser from './Teaser';
import './Slideshow.css';
import Slideshow from './Slideshow';

class WrapperComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.timerID = setInterval(this.props.onChangeImage, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <BrowserRouter>
        { this.props.loadingImages ? <i className="loading-spinner fa fa-spinner fa-spin"></i> :
          <React.Fragment>
            <Slideshow/>
            <div id="wrapper">
              <header>
                <h1><Link to="/">A <span>Higher</span> Art</Link></h1>
                <nav>
                  <Link to="/about" className="about">About</Link>
                  <Link to="/teaser" className="teaser">Teaser</Link>
                </nav>
              </header>
              <main>
                <Route path="/about" component={About}/>
                <Route path="/teaser" component={Teaser}/>
                <Route exact path="/" component={Home}/>
              </main>
            </div>
          </React.Fragment>
        }
      </BrowserRouter>
    )
  }
}

WrapperComponent.propTypes = {
  currentSlideIndex: PropTypes.number,
  loadingImages: PropTypes.bool,
  onChangeImage: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currentSlideIndex: state.currentSlideIndex,
    loadingImages: state.loadingImages
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeImage: () => {
      dispatch({type: 'NEXT_SLIDE'});
    }
  }
};

const Wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapperComponent);

export default Wrapper;