import React        from 'react';
import { Redirect } from 'react-router-dom'

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm     from '../PasswordChange';
import { AuthUserContext }    from '../Session';
import * as ROUTES            from '../../constants/routes';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ?
        <div>

          <h1>Account: { authUser.email}</h1>
          <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      : null
    }
  </AuthUserContext.Consumer>
);

export default AccountPage;
