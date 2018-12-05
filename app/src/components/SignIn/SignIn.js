import React, { Component } from 'react';

import { SignUpLink } from '../SignUp';
import { SignInForm } from './';


const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

export default SignInPage;
