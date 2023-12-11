import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import searchPost from "../../services/api";


// Async thunk for fetching search results
export const fetchSearchResult=createAsyncThunk( "http://hn.algolia.com/api/v1/search?query=test",async(query)=>{
     try{
       const res=await searchPost(query);
       return res.hits;
     }
     catch(err){
        console.log(err)
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
        state.error=action.error.message
    })
}
})


export const searchResultReducer=searchResultSlice.reducer;
export const searchResultSelector=(state)=>state.searchResultReducer;