export const fetchStoresStart = ()=>{
    return {
        type: 'FETCH_STORES_START'
    }
}
export const receiveStores = (stores)=>{
    return {
        type: 'RECEIVE_STORES',
        payload: stores
    }
}
export const onCardClick = (storeObj)=>{
    return {
        type: 'ON_CARD_CLICK',
        payload: storeObj
    }
}
export const addNavigation = (navigation)=>{
    return {
        type: 'SAVE_NAVIGATION',
        payload: navigation
    }
}
export const reset = (value)=>{
    return {
        type: 'RESET',
        payload: value
    }
}
export const logIn = (userObj)=>{
    return {
        type: 'LOG_IN',
        payload: userObj
    }
}
export const fetchProfessionals = (professionals)=>{
    return {
        type: 'GET_PROFESSIONALS',
        payload: professionals
    }
}
export const receiveProfile = (profile)=>{
    return {
        type: 'RECEIVE_PROFILE',
        payload: profile
    }
}

export const logOut = ()=>{
    return {
        type: 'LOGOUT'
    }
}
