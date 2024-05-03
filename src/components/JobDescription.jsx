import React, { useState } from "react";
import "../App.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Button, Typography } from "@mui/material";

import DetailedDescription from "./DetailedDescription";

// JobDescription component
const JobDescription = ({ jobDes }) => {
  const [open, setOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState();
  const handleOpen = (des) => {
    setJobDescription(des);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box key={jobDes?.jdUid} className="jobDescription">
        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.2rem",
          }}
        >
          <img
            src={jobDes.logoUrl}
            alt="logo"
            style={{ width: "50px", borderRadius: "50%", height: "50px" }}
          />
          <Box
            sx={{
              flexGrow: "1",
            }}
          >
            <Typography
              className="jobDescriptionText"
              sx={{
                color: "#8b8b8b",
              }}
              variant="subtitle1"
            >
              {jobDes?.companyName}{" "}
              <Typography
                variant="subtitle2"
                sx={{ color: "black", paddingLeft: "0.5rem" }}
              >
                ({jobDes?.jobRole})
              </Typography>
            </Typography>

            <Typography
              className="jobDescriptionText"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              variant="body2"
            >
              {jobDes?.location}
            </Typography>
          </Box>
        </Box>
        <Typography
          className="jobDescriptionText"
          sx={{
            paddingLeft: "0.2rem",
          }}
          variant="subtitle2"
        >
          {" "}
          <Typography
            sx={{ color: "#8b8b8b", paddingRight: "0.2rem" }}
            variant="subtitle2"
          >
            Estimated Salary:
          </Typography>
          {jobDes?.salaryCurrencyCode}{" "}
          {jobDes?.minJdSalary ? jobDes?.minJdSalary : 0} -{" "}
          {jobDes?.maxJdSalary} LPA
        </Typography>
        <Typography
          className="jobDescriptionText"
          sx={{
            paddingLeft: "0.2rem",
          }}
          variant="subtitle2"
        >
          {" "}
          <Typography
            sx={{ color: "#8b8b8b", paddingRight: "0.2rem" }}
            variant="subtitle2"
          >
            Minimum Experience:
          </Typography>{" "}
          {jobDes?.minExp ? jobDes?.minExp : 0} years
        </Typography>
        <Box className="jobDescriptionJDContainer">
          <Typography sx={{ textAlign: "left" }} variant="body1">
            Job Description:
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "left" }}>
            {jobDes?.jobDetailsFromCompany}
          </Typography>
          <Box className="jobDescriptionJD">
            <Button
              sx={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
              }}
              onClick={() => handleOpen(jobDes?.jobDetailsFromCompany)}
            >
              Show More
            </Button>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ margin: "0.2rem", width: "60%", marginBottom: "0rem" }}
          // onClickhandler to open the job description link in a new tab
          onClick={() => {
            if (jobDes?.jdLink) {
              window.open(jobDes?.jdLink, "_blank");
            }
          }}
        >
          Apply <OpenInNewIcon fontSize="10px" sx={{ paddingLeft: "0.4rem" }} />
        </Button>
      </Box>
      {/* DetailedDescription component is rendered only when open is true, to show complete job description */}
      {open && (
        <DetailedDescription
          open={open}
          handleClose={handleClose}
          jobDescription={jobDescription}
        />
      )}
    </>
  );
};

export default JobDescription;
