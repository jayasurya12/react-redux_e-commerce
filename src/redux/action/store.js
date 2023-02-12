import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../reducer/cart'

export default configureStore({
    reducer :{
        cart: cartReducer
    }
})


//Another way to use is ..

// export const Cart = (cart)=>{
//     console.log(cart)
//     return {
//         type: 'cart',
//         payload: cart
//     }
// }; 