import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        list: [],
    },
    reducers: {
        addItem: (state, {payload}) => {
            state.list = [...state.list, {payload, count:1}];
        },
        removeItem: (state, {payload}) =>{
            // state.list = state.list.filter((product)=>product.id !== payload.id) //this is one way to use filter when 
            //i click reduce button it do the remove the value of item in array using payload.

            const index = state.list.findIndex(
                (product) => product.id === payload.id);

            state.list = [
                ...state.list.slice(0, index),
                ...state.list.slice(index + 1),
            ]
        },
        modifyItem : (state, {payload})=>{
            const index = state.list.findIndex((product)=>product.id === payload.id);
            state.list = [
                ...state.list.slice(0,index),
                {...state.list[index], count:payload.count},
                ...state.list.slice(index + 1)
            ];
        },
    }
});

export const { addItem, modifyItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;


//Another Way to use ....

// const initialState ={
//     cart:[],
// };
// // const state = initialState
// export const cartReducer = (state=initialState, action) =>{
//     switch (action.type) {
//         case 'cart':
//             return {
//                 cart:[...state.cart, action.payload]
//             }
    
//         default:
//             state;
//     }
// }

