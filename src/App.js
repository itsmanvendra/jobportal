import "./App.css";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import FilterJob from "./components/FilterJob";
import { useDispatch, useSelector } from "react-redux";
import { jobSearch } from "./features/fetchJobSlice";
import JobList from "./components/JobList";

function App() {
  const dispatch = useDispatch();
  const limit = 10;
  const [skip, setSkip] = useState(0);
  const [jobsList, setJobsList] = useState([])
  const { job, loading, error } = useSelector((state) => state.fetchJobSearch);
  useEffect(() => {
    dispatch(jobSearch(skip));
  }, [skip]);
  useEffect(() => {
    if (job) {
      setJobsList((prev) => [...prev, ...job]);
    }
  }, [job]);
  
  const handleSkip = () => {
    setSkip((prev) => prev + limit);
    
  };
  
  return (
    <div className="App">
      <Box className="App-header">Career Connect</Box>
      <Box className="searchJobs">
        <Typography sx={{ borderBottom: "1px solid black", width: "30%" }}>
          Search Jobs
        </Typography>
      </Box>
      <FilterJob />
      <JobList handleSkip={handleSkip} jobsList={jobsList} loading={loading} error={error} />
    </div>
  );
}

export default App;
