export const goToHome = (history) => {
    history.push('/')
}

export const goToCart = (history) => {
    history.push('/cart')
}

export const goToLogin = (history) => {
    history.push('/login')
}

export const goToSignup = (history) => {
    history.push(`/signup`)
}

export const goToProfile = (history) => {
    history.push('/profile')
}

export const goToRegisterAddress = (history) => {
    history.push('/registeraddress')
}

export const goToEditProfile = (history) => {
    history.push(`/editProfile`)
}

export const goToEditAddress = (history) => {
    history.push(`/editAddress`)
}

export const goToDetail = (history, id) => {
    history.push(`/restaurant/${id}`)
}
