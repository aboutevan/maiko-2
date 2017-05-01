import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  pathname: '',
  hasChanged: false,
}

export default function slideTransition(state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      if (state.pathname !== '' && action.payload.pathname !== state.pathname) {
        return {...state, pathname: action.payload.pathname, hasChanged: true}
      } else {
        return {...state, pathname: action.payload.pathname, hasChanged: false}
      }
    default:
      return state
  }
}