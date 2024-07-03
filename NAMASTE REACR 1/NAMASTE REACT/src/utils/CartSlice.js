import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
         state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
         state.items.pop();
        },
        clearitem:(state,action)=>{
            state.items.length=0;
        }

    }
})
export const {addItems,removeItem,clearitem}=CartSlice.actions
export default CartSlice.reducer