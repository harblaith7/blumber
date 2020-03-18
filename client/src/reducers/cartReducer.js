import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types'


export default (state = [], action) => {
    switch(action.type){
        case ADD_TO_CART:
            return [...state, action.payload];
            case REMOVE_FROM_CART:
                return state.filter(course => course.courseName !== action.payload.courseName)
        default: 
            return state;
    }
}