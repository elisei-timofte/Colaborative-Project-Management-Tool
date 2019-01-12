import React from 'react';

import { withFirebase } from '../Firebase';

class FirepadInput extends React.Component {

  componentDidMount() {
    this.props.firebase.initFirepad();
  }

  render() {
    return (
      <div className='firepad'>
        <div id="firepad-container"></div>
      </div>
    )
  }
}

export default withFirebase(FirepadInput);
