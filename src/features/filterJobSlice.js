import { createSlice } from "@reduxjs/toolkit";

export const filterJobSlice = createSlice({
    name: "filterJob",
    initialState: {
        role: [],
        numberOfEmployees: [],
        jobType: [],
        experience: null,
        techStack: [],
        minPay: null,
        companyName: "",
        isFilterApplied: false,

    },
    reducers: {
        setRole: (state, action) => {
            state.role = action.payload;
            state.isFilterApplied = true;
        },
        setNumberOfEmployees: (state, action) => {
            state.numberOfEmployees = action.payload;
            state.isFilterApplied = true;
        },
        setJobType: (state, action) => {
            state.jobType = action.payload;
            state.isFilterApplied = true;
        },
        setExperience: (state, action) => {
            state.experience = action.payload;
            state.isFilterApplied = true;
        },
        setTechStack: (state, action) => {
            state.techStack = action.payload;
            state.isFilterApplied = true;
        },
        setMinPay: (state, action) => {
            state.minPay = action.payload;
            state.isFilterApplied = true;
        },
        setCompanyName: (state, action) => {
            state.companyName = action.payload;
            state.isFilterApplied = true;
        },
    },
});

export const {
    setRole,
    setNumberOfEmployees,
    setJobType,
    setExperience,
    setTechStack,
    setMinPay,
    setCompanyName,
} = filterJobSlice.actions;

export default filterJobSlice.reducer;