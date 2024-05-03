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
  const [jobsList, setJobsList] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const { job } = useSelector((state) => state.fetchJobSearch);
  const {
    role,
    numberOfEmployees,
    jobType,
    experience,
    techStack,
    minPay,
    companyName,
    isFilterApplied,
  } = useSelector((state) => state.filterJobSlice);

  const handleSkip = () => {
    setSkip((prev) => prev + limit);
  };

  // Filter the job list
  const handleFilterJob = () => {
    let filterJobList = jobsList;
    if (jobsList.length > 0) {
      if (role.length > 0) {
        const roleTitles = role.map((r) => r.title.toLowerCase());
        filterJobList = filterJobList.filter((job) => {
          if (roleTitles.length > 0) {
            return roleTitles.includes(job.jobRole.toLowerCase());
          }
          return true;
        });
      }
      if (experience != null) {
        filterJobList = filterJobList.filter((job) => {
          return job.minExp == experience?.title;
        });
      }
      if (companyName) {
        filterJobList = filterJobList.filter((job) => {
          return job.companyName
            .toLowerCase()
            .includes(companyName.toLowerCase());
        });
      }
      if (minPay != null) {
        filterJobList = filterJobList.filter((job) => {
          return job.minJdSalary >= (minPay?.title).split("L")[0];
        });
      }

      if (numberOfEmployees.length > 0) {
        filterJobList = filterJobList.filter((job) => {
          return false;
        });
      }

      if (jobType.length > 0) {
        const jobTypeTitles = jobType.map((r) => r.title.toLowerCase());
        filterJobList = filterJobList.filter((job) => {
          if (job?.location.toLowerCase() == "remote") {
            return jobTypeTitles.includes("remote");
          } else if (job?.location.toLowerCase() == "hybrid") {
            return jobTypeTitles.includes("hybrid");
          } else if (job?.location) {
            return jobTypeTitles.includes("onsite");
          }
          return false;
        });
      }

      if (techStack.length > 0) {
        filterJobList = filterJobList.filter((job) => {
          return false;
        });
      }
    }
    console.log(filterJobList);
    setFilteredJobList(filterJobList);
  };

  // Fetch the job list, dispatch the action whenever skip changes
  useEffect(() => {
    dispatch(jobSearch(skip));
  }, [skip]);

  // Update the job list whenever new job is fetched
  useEffect(() => {
    if (job) {
      setJobsList((prev) => [...prev, ...job]);
    }
  }, [job]);

  // Filter the job list whenever filter is applied
  useEffect(() => {
    handleFilterJob();
  }, [
    role,
    numberOfEmployees,
    jobType,
    experience,
    techStack,
    minPay,
    companyName,
    jobsList,
    isFilterApplied,
  ]);

  return (
    <div className="App">
      <Box className="App-header">Career Connect</Box>
      <Box className="searchJobs">
        <Typography sx={{ borderBottom: "1px solid black", width: "30%" }}>
          Search Jobs
        </Typography>
      </Box>
      <FilterJob />
      <JobList
        handleSkip={handleSkip}
        jobsList={isFilterApplied ? filteredJobList : jobsList}
      />
    </div>
  );
}

export default App;
