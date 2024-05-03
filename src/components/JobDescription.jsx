import React from "react";
import "../App.css";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Box, Button, Typography } from "@mui/material";

const JobDescription = ({ jobDes }) => {
  return (
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
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",

              color: "#8b8b8b",
              textTransform: "capitalize",
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
            sx={{
              display: "flex",
              justifyContent: "start",

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
        sx={{
          display: "flex",
          justifyContent: "start",
          paddingLeft: "0.2rem",
          alignItems: "center",
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
        {jobDes?.minJdSalary ? jobDes?.minJdSalary : 0} - {jobDes?.maxJdSalary}{" "}
        LPA
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "start",
          paddingLeft: "0.2rem",
          alignItems: "center",
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
      <Box
        sx={{
          padding: "0.2rem",
          height: "300px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography sx={{ textAlign: "left" }} variant="body1">
          Job Description:
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "left" }}>
          {jobDes?.jobDetailsFromCompany}
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",

            background:
              "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
            height: "100%",
          }}
        >
          <Button
            sx={{
              position: "absolute",
              bottom: "0",
              left: "0",
              right: "0",
            }}
          >
            Show More
          </Button>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{ margin: "0.2rem", width: "60%", marginBottom: "0rem" }}
        onClick={window.open(jobDes?.jdLink)}
      >
        Apply <OpenInNewIcon fontSize="10px" sx={{ paddingLeft: "0.4rem" }} />
      </Button>
    </Box>
  );
};

export default JobDescription;
