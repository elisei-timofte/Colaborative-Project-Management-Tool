import React from 'react';

import { withAuthorization } from '../Session';

import Firepad from '../Firepad';
import './home.scss';

const HomePage = () => (
  <div className='home-page'>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>

    <Firepad />
  </div>
);

export default withAuthorization(authUser => !!authUser)(HomePage);
