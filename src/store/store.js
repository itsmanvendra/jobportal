import { configureStore } from "@reduxjs/toolkit";
import fetchJobSearchReducer from "../features/fetchJobSlice";
import filterJobSliceReducer from "../features/filterJobSlice";
const store = configureStore({
    reducer: {
        // Add your reducers here
        fetchJobSearch: fetchJobSearchReducer,
        filterJobSlice: filterJobSliceReducer,
    },
});
export default store;