import { searchResultReducer } from "./reducers/searchResultReducer";
import { postDetailsReducer } from "./reducers/postDetailsReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:{
        searchResultReducer,
        postDetailsReducer
    }
})