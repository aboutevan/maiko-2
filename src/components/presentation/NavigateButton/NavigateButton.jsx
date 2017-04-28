import React from 'react';
import { withRouter } from 'react-router-dom';

const NavigateButton = (props) => (
  <button
    type="button"
    onClick={() => props.history.push('/studio-shots')}
  >
    Navigate
  </button>
);

export default withRouter(NavigateButton);
