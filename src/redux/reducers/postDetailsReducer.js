import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {getPostDetails} from "../../services/api";


// Async thunk for fetching search results
export const fetchPostDetails=createAsyncThunk( "fetchPostDetails",async(objId)=>{
     try{
       const response=await getPostDetails(objId);
       return response;
     }
     catch(err){
        console.log(err)
     }
}   )


// Create a slice for search results
const postDetailsSlice=createSlice({
name:'postDetails',
initialState:{
    result:[],
    loading:false,
    error:null
},
reducers:{},
extraReducers:(builder)=>{
    builder
    .addCase(fetchPostDetails.pending,(state)=>{
        state.loading=true;
        state.error=null;
    })
    .addCase(fetchPostDetails.fulfilled,(state,action)=>{
        state.loading=false;
        state.result=action.payload;
    })
    .addCase(fetchPostDetails.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.error.message
    })
}
})


export const postDetailsReducer=postDetailsSlice.reducer;
export const postDetailSelector=(state)=>state.postDetailsReducer;