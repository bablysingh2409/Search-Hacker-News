import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {searchPost} from "../../services/api";


// Async thunk for fetching search results
export const fetchSearchResult=createAsyncThunk( "searchResult",async(query)=>{
     try{
       const res=await searchPost(query);
       return res.hits;
     }
     catch(err){
        // console.log('errrrr',err.message);
        return {error:err.message};
     }
}   )


// Create a slice for search results
const searchResultSlice=createSlice({
name:'searchResuls',
initialState:{
    result:[],
    loading:false,
    error:null
},
reducers:{},
extraReducers:(builder)=>{
    builder
    .addCase(fetchSearchResult.pending,(state)=>{
        state.loading=true;
        state.error=null;
    })
    .addCase(fetchSearchResult.fulfilled,(state,action)=>{
        state.loading=false;
        state.result=action.payload;
    })
    .addCase(fetchSearchResult.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payload.error
    })
}
})


export const searchResultReducer=searchResultSlice.reducer;
export const searchResultSelector=(state)=>state.searchResultReducer;