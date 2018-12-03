import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

import * as ROUTES      from '../../constants/routes';
import SignUpForm       from './SignUpForm'
import SignUpLink       from './SignUpLink'

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>

    <SignUpForm />
  </div>
);

export default SignUpPage;
