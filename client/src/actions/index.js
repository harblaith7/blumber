import axios from 'axios'
import {FETCH_USER, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART} from './types'


export const fetchUser = () => {
    return function(dispatch){
        axios.get('/api/current_user')
            .then(res => dispatch({
                type: FETCH_USER,
                payload: res.data
            }))
    }
}

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token)
    dispatch({
        type: FETCH_USER,
        payload: {...res.data}
    })
}

export const addToCart = (course) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: course
    })
}

export const clearCart = () => dispatch => {
    dispatch({
        type: CLEAR_CART,
        payload: []
    })
}

export const removeItem = (id) => dispatch => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}