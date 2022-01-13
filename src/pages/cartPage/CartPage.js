import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ApiLogin } from '../../api/API_Account';
import GlobalStateConstext from '../../global/GlobalStateContext';
import { goToHome } from '../../routes/Coordinator';

const CartPage = () => {
  const history = useHistory();
  const {states, setters} = useContext(GlobalStateConstext)
  const array = []

  useEffect(() => {
  setters.set_cart(array)
  },[])

  const clickSubmit = () => {
    goToHome(history);
  };

  const login = () => {
    const body = { email: 'teste@email.com', password: '123456' };
    ApiLogin(body);
  };

  const cart = states.cart && states.cart.map((item) => {
    return <p>{item.name}</p>
  })

  return (
    <div>
      <h1>Carrinho</h1>

      <div>Endereço de entrega</div>

      <div>
        <p>Restaurante</p>
        Endereço do restaurante em um tom mais claro
      </div>

      <div>
      {cart}
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

      <button onClick={login}>Login</button>
    </div>
  );
};
export default CartPage;
