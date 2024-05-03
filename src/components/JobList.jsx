import React, { useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import "../App.css";
import JobDescription from "./JobDescription";
import CircularProgress from "@mui/material/CircularProgress";

const JobList = ({ handleSkip, jobsList }) => {
  const { loading, error } = useSelector((state) => state.fetchJobSearch);
  // Intersection Observer
  const observer = useRef();
  // Callback function for Intersection Observer
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
    <>
      <Box className="jobList">
        {/* // Loading spinner, till the data is loading */}
        {loading && jobsList.length == 0 && (
          <Box sx={{ width: "100vw" }}>
            <CircularProgress />
          </Box>
        )}

        {/* // Error message */}
        {error && <Box className="noDatafound">{error}</Box>}

        {/* // Displaying the job description */}
        {jobsList &&
          jobsList?.length > 0 &&
          jobsList?.map((jobDes, idx) => {
            if (idx == jobsList?.length - 1) {
              // observer for the last job description
              return (
                <Box ref={containerRef}>
                  <JobDescription jobDes={jobDes} />
                </Box>
              );
            }
            return <JobDescription jobDes={jobDes} />;
          })}

        {/* // No jobs found */}
        {jobsList.length == 0 && !loading && !error && (
          <Box className="noDatafound">No Jobs Found</Box>
        )}
      </Box>

      {/* // Loading spinner, for infinte loading, api will be called when you reaches to the bottom of the page */}
      {loading && jobsList.length > 0 && (
        <Box className="loadingSpinner">
          <CircularProgress />
        </Box>
      )}
    </>
  );
};

export default JobList;
