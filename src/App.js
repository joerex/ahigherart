import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Wrapper from './components/Wrapper';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import './App.css';
import IMAGES from './images';
import {loadImages} from './images';

// Reducer
const appReducer = (state = {currentSlideIndex: 0, loadingImages: true}, action) => {
  switch (action.type) {
    case 'CHANGE_SLIDE_INDEX':
      return { ...state, currentSlideIndex: action.payload };
    case 'NEXT_SLIDE':
      if (!state.pauseSlideshow) {
        let index = state.currentSlideIndex === IMAGES.length-1 ? 0 : state.currentSlideIndex+1;
        return {currentSlideIndex: index};
      }
      else {
        return state;
      }
    case 'PAUSE_SLIDESHOW':
      return { ...state, pauseSlideshow: true};
    case 'RESUME_SLIDESHOW':
      return { ...state, pauseSlideshow: false};
    case 'LOADED_IMAGES':
      return { ...state, loadingImages: false};
    default:
      return state
  }
};

// Store
const store = createStore(appReducer, applyMiddleware(thunk));

// Load images
store.dispatch(loadImages());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper />
      </Provider>
    );
  }
}

export default App;
