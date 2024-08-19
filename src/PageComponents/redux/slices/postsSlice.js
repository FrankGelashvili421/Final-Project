import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userPosts:[]
}
const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        setUserPosts:(state, action)=>{
            state.userPosts = action.payload;
        }
    }
}) 

export const {setUserPosts} = postSlice.actions;

export default postSlice.reducer;