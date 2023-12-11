import { searchResultReducer } from "./reducers/searchResultReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store=configureStore({
    reducer:{
        searchResultReducer
    }
})