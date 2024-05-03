import { configureStore } from "@reduxjs/toolkit";
import fetchJobSearchReducer from "../features/fetchJobSlice";
const store = configureStore({
    reducer: {
        // Add your reducers here
        fetchJobSearch: fetchJobSearchReducer,
    },
});
export default store;