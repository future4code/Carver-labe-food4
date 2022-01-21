import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom"
import LoginPage from '../pages/loginPage/LoginPage'
import SignupPage from "../pages/signupPage/SignupPage"
import HomePage from "../pages/homePage/HomePage"
import CartPage from "../pages/cartPage/CartPage"
import Profile from "../pages/profile/Profile"
import Error from "../pages/error/Error"
import EditAddress from "../pages/editAddress/EditAddress"
import EditProfile from "../pages/editProfile/EditProfile"
import RestaurantDetail from "../pages/restaurantDetail/RestaurantDetail"
import React from "react"

import { CompHeader } from "../components/CompHeader/CompHeader"
import { CompFooter } from "../components/CompFooter/CompFooter"
import { StyledPages } from "./StyledGlobalPages"

const Router = () => {
    return (
        <BrowserRouter>
            <CompHeader />
            <StyledPages>
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

                <Route exact path = {'/editAddress'}>
                    <EditAddress/>
                </Route>

                <Route exact path = {'/editProfile'}>
                    <EditProfile/>
                </Route>

                <Route exact path = {'/restaurants/:id'}>
                    <RestaurantDetail/>
                </Route>

                <Route>
                    <Error/>
                </Route>
            </Switch>
            </StyledPages>
            <CompFooter />
        </BrowserRouter>
    )
}
export default Router