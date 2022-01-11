import React from 'react';
import { useHistory } from 'react-router-dom';
import { ApiLogin } from '../../api/API_Account';
import useProtectedPage from '../../hooks/useProtectedPage';
import { goToHome } from '../../routes/Coordinator';

const CartPage = () => {
  useProtectedPage();
  const history = useHistory();

  const clickSubmit = () => {
    goToHome(history);
  };

  const login = () => {
    const body = { email: 'teste@email.com', password: '123456' };

    ApiLogin(body);
  };

  return (
    <div>
      <h1>Carrinho</h1>

      <div>Endereço de entrega</div>

      <div>
        <p>Restaurante</p>
        Endereço do restaurante em um tom mais claro
      </div>

      <div>
        <p>pedido 1</p>
        <p>pedido 2</p>
        <p>pedido 3</p>
      </div>

      <p>subtotal</p>

      <form onSubmit={clickSubmit}>
        <label>Forma de pagamento</label>
        <input
          type="radio"
          id="cartao"
          name="forma_de_pagamento"
          value="Cartão"
          required
        />
        <label>Cartão</label>
        <input
          type="radio"
          id="dinheiro"
          name="forma_de_pagamento"
          value="Dinheiro"
          required
        />
        <label>Dinheiro</label>
        <button>Pagar</button>
      </form>

      <button onClick={login}>Fazer Login</button>
    </div>
  );
};
export default CartPage;
