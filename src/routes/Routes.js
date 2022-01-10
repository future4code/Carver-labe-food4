import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoginPage from '../pages/loginPage/LoginPage'
import SignupPage from "../pages/signupPage/SignupPage"
import HomePage from "../pages/homePage/HomePage"
import CartPage from "../pages/cartPage/CartPage"
import Profile from "../pages/profile/Profile"
import RegisterAddress from "../pages/registerAddress/RegisterAddress"
import EditAddress from "../pages/editAddress/EditAddress"
import EditProfile from "../pages/editProfile/EditProfile"
import RestaurantDetail from "../pages/restaurantDetail/RestaurantDetail"
import React from "react"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path = {'/login'}>
                    <LoginPage/>
                </Route>

                <Route exact path = {'/signup'}>
                    <SignupPage/>
                </Route>

                <Route exact path = {'/'}>
                    <HomePage/>
                </Route>

                <Route exact path = {'/cart'}>
                    <CartPage/>
                </Route>

                <Route exact path = {'/profile'}>
                    <Profile/>
                </Route>

                <Route exact path = {'/registeraddress'}>
                    <RegisterAddress/>
                </Route>

                <Route exact path = {'/editAddress'}>
                    <EditAddress/>
                </Route>

                <Route exact path = {'/editProfile'}>
                    <EditProfile/>
                </Route>

                <Route exact path = {'/restaurant/:id'}>
                    <RestaurantDetail/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router