import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/Coordinator';

const CartPage = () => {
  const history = useHistory();

  const clickSubmit = () => {
    goToHome(history);
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
    </div>
  );
};
export default CartPage;
