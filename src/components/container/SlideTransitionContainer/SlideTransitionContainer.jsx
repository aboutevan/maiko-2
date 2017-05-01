import React from 'react';
import { connect } from 'react-redux';
import { SlideTransition } from 'presentation';

const SlideTransitionContainer = props => (
  <SlideTransition
    behavior={props.slideTransition.hasChanged ? 'animate' : ''}
  />
);

SlideTransitionContainer.propTypes = {
  slideTransition: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

function mapStateToProps({ slideTransition }) {
  return {
    slideTransition,
  };
}

export default connect(mapStateToProps)(SlideTransitionContainer);
