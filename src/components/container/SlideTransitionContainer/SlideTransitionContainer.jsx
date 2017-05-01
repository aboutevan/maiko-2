import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SlideTransition } from 'presentation';

const SlideTransitionContainer = props => (
  <SlideTransition
    position={props.slideTransition.hasChanged ? 'animate' : '' }
  />
)

function mapStateToProps ({slideTransition}) {
  return {
    slideTransition
  }
}

export default connect(mapStateToProps)(SlideTransitionContainer);