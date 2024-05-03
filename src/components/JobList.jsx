import React, { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "../App.css";
import JobDescription from "./JobDescription";
import CircularProgress from "@mui/material/CircularProgress";

const JobList = ({ handleSkip, jobsList }) => {
  const observer = useRef();

  const { loading, error } = useSelector((state) => {
    console.log(state);
    return state.fetchJobSearch;
  });
  const containerRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleSkip();
      }
    });
    if (node) observer.current.observe(node);
  }, []);


  return (
    <Box className="jobList">
      {loading && jobsList.length == 0 && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      {error && <Box>{error}</Box>}
          {jobsList && jobsList?.length > 0 ? (
              jobsList?.map((jobDes, idx) => {
                  if (idx == jobsList?.length - 1) {
                      return (
                          <Box ref={containerRef}>
                              <JobDescription jobDes={jobDes} />
                          </Box>
                      );
                  }
                  return <JobDescription jobDes={jobDes} />;
              })
          ) : (
              !loading && !error && (<Box>No Jobs Found</Box>)
          )}
        
      
      {loading &&
        jobsList.length >
          0 && (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
    </Box>
  );
};

export default JobList;
