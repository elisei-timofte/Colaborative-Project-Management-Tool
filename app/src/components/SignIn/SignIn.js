import React from 'react';

import { SignUpLink }         from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { SignInForm }         from './';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

export default SignInPage;
