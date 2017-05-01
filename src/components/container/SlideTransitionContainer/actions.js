import { LOCATION_CHANGE } from 'react-router-redux';

export default function slideTransition() {
  return {
    type: LOCATION_CHANGE,
    shouldSlide: false,
  }
}