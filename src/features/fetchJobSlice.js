import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for fetching job data
export const jobSearch = createAsyncThunk(
  "jobSearch/jobSearch",
  async (skip) => {
      console.log("skipskipskip", skip);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: skip,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    const response = await fetch(
      `https://api.weekday.technology/adhoc/getSampleJdJSON`,
      requestOptions
    );
    const data = await response.json();
    return data.jdList;
  }
);

// Define the slice
export const fetchJobSearchSlice = createSlice({
  name: "jobSearch",
  initialState: {
    job: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(jobSearch.pending, (state) => {
      state.loading = true;
      state.job = [];
    });
    builder.addCase(jobSearch.fulfilled, (state, action) => {
      state.job = [...state.job, ...action.payload];
      state.loading = false;
    });
    builder.addCase(jobSearch.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});
export default fetchJobSearchSlice.reducer;
