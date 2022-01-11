import React from 'react';
import { ApiLogin } from '../../api/API_Account';

const LoginPage = () => {
  const login = () => {
    const body = { email: 'teste@email.com', password: '123456' };

    ApiLogin(body);
  };
  return (
    <div>
      <button onClick={login}>Logar</button>
      LoginPage
    </div>
  );
};
export default LoginPage;
