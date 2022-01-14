import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ApiLogin } from '../../api/API_Account';
import GlobalStateConstext from '../../global/GlobalStateContext';
import { goToHome } from '../../routes/Coordinator';
import { getProfile, getRestaurantDetails } from '../../api/API_Requests'
import { StyledProductsCard, StyledCart } from './StyledCartPage';

const CartPage = () => {
  const history = useHistory();
  const params = useParams()
  const {states, setters, addToCart} = useContext(GlobalStateConstext)
  const cartStorage = localStorage.getItem('carrinho')
  const newList = JSON.parse(cartStorage)

  const [profile, set_profile] = useState()
  const [restaurantDetails, set_restaurantDetails] = useState()




  useEffect(() => {
    getProfile(set_profile)
    getRestaurantDetails(2, set_restaurantDetails)

  if(!localStorage.getItem('carrinho')){
    return addToCart()
  }else{
    return setters.set_cart(newList)
  }
  },[])

  const clickSubmit = () => {
    goToHome(history);
  };



  const cart = states.cart && states.cart.map((item) => {
    return (<StyledProductsCard>
      <img src={item.photoUrl} alt={item.name} />

      <div className="card-content"> 
        <div className="card-content-top">
          <div className="card-content-texts">
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
      
          <div className="card-content-marker">
            <button>1</button>
          </div>
        </div>


      <div className="card-content-bottom">
        <div>
          <p>R${item.price.toFixed(2)}</p>
        </div>
        
        <div className="card-content-cart">
          <button className="card-button-remove"> remover </button>
        </div>
      </div>
      </div>
    </StyledProductsCard>)
      


  })

  const restaurant = restaurantDetails && restaurantDetails.map((local) => {
    return(
      <div>
        <p>{local.name}</p>
        <p>{local.address}</p>
        <p>{local.deliveryTime}min - {local.deliveryTime + 10}min</p>
      </div>
    )
  })

  const adress = profile && profile.map((item) => {
    return(
      <div>
        {item.address}
      </div>
    )
  })

  return (
    <StyledCart>
      <div>Endereço de entrega</div>
      {adress}

      <div>
        {restaurant}
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
    </StyledCart>
  );
};
export default CartPage;
