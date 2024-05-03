import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setRole,
  setNumberOfEmployees,
  setJobType,
  setExperience,
  setTechStack,
  setMinPay,
  setCompanyName,
} from "../features/filterJobSlice";

const FilterJob = () => {
    const dispatch = useDispatch();
    const {
      role,
      numberOfEmployees,
      jobType,
      experience,
      techStack,
      minPay,
      companyName,
    } = useSelector((state) => state.filterJobSlice);
//   const [role, setRole] = useState([]);
//   const [selectedNoOfEmployees, setSelectedNoOfEmployees] = useState([]);
//   const [selectedExperience, setSelctedExperience] = useState();
//   const [selectedJobMode, setSelctedJobMode] = useState([]);
//   const [selectedTechStack, setSelctedTechStack] = useState([]);
//   const [selectedMinBasePay, setSelctedMinBasePay] = useState();
//   const [companyName, setCompanyName] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        gap: "0.5rem",
        alignItems: "center",
        justifyContent: "start",
        flexWrap: "wrap",
        margin: "0rem 2rem",
      }}
    >
      <Autocomplete
        multiple
        id="size-small-outlined"
        size="small"
        options={roles}
        groupBy={(option) => option.category}
        value={role}
        getOptionLabel={(option) => option.title}
        //   defaultValue={[top100Films[13]]}
        onChange={(event, newValue) => {
          console.log(role, newValue);
          dispatch(setRole(newValue ));
        }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ minWidth: "200px" }}
            label="Roles"
            placeholder={role && role?.length > 0 ? "" : "Roles"}
          />
        )}
      />
      <Autocomplete
        multiple
        id="size-small-outlined"
        size="small"
        options={noOfEmployees}
        value={numberOfEmployees}
        getOptionLabel={(option) => option.title}
        onChange={(event, newValue) => {
            console.log(numberOfEmployees);
            console.log(newValue);
          dispatch(setNumberOfEmployees(newValue ));
        }}
        //   defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="No of Employees"
            sx={{ minWidth: "200px" }}
            placeholder={
              numberOfEmployees && numberOfEmployees?.length > 0
                ? ""
                : "No of Employees"
            }
          />
        )}
      />
      <Autocomplete
        //   multiple
        id="size-small-outlined"
        size="small"
        options={experienceList}
        getOptionLabel={(option) => option.title}
        value={experience}
        onChange={(event, newValue) => {
            console.log(experience);
            console.log(newValue)
          dispatch(setExperience(newValue ));
        }}
        //   defaultValue={[top100Films[13]]}
        //   filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ minWidth: "200px" }}
            label="Experience"
            placeholder={experience ? "" : "Experience"}
          />
        )}
      />
      <Autocomplete
        multiple
        id="size-small-outlined"
        size="small"
        options={jobMode}
        value={jobType}
        getOptionLabel={(option) => option.title}
        onChange={(event, newValue) => {
          console.log(jobMode);
          dispatch(setJobType(newValue ));
        }}
        //   defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ minWidth: "100px" }}
            label="Remote"
            placeholder={jobType && jobType?.length > 0 ? "" : "Remote"}
          />
        )}
      />
      <Autocomplete
        multiple
        id="size-small-outlined"
        size="small"
        options={techStackList}
        value={techStack}
        getOptionLabel={(option) => option.title}
        onChange={(event, newValue) => {
          console.log(techStack);
          dispatch(setTechStack(newValue ));
        }}
        //   defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ minWidth: "200px" }}
            label="Tech Stack"
            placeholder={techStack && techStack?.length > 0 ? "" : "Tech Stack"}
          />
        )}
      />
      <Autocomplete
        id="size-small-outlined"
        size="small"
        options={minBasePay}
        value={minPay}
        onChange={(event, newValue) => {
          console.log(minPay);
          dispatch(setMinPay(newValue ));
        }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{ minWidth: "200px" }}
            label="Min Base Pay"
            placeholder={minPay ? "" : "Min Base Pay"}
          />
        )}
      />
      <TextField
        id="outlined-size-small"
        size="small"
        label="Company Name"
        variant="outlined"
        placeholder="Search Company Name"
        value={companyName}
        onChange={(e) =>
          dispatch(setCompanyName(e.target.value ))
        }
      />
    </Box>
  );
};

export default FilterJob;

const roles = [
  { title: "Backend", category: "Engineering" },
  { title: "Frontend", category: "Engineering" },
  { title: "Fullstack", category: "Engineering" },
  { title: "DevOps", category: "Engineering" },
  { title: "Data Science", category: "Engineering" },
  { title: "Machine Learning", category: "Engineering" },
  { title: "IOS", category: "Engineering" },
  { title: "Flutter", category: "Engineering" },
  { title: "React Native", category: "Engineering" },
  { title: "Android", category: "Engineering" },
  { title: "Computer Vision", category: "Engineering" },
  { title: "Designer", category: "Design" },
  {
    title: "Graphic Designer",
    category: "Design",
  },
  {
    title: "Product Designer",
    category: "Design",
  },
  {
    title: "UX Designer",
    category: "Design",
  },
  {
    title: "Product Manager",
    category: "Product",
  },
  {
    title: "Operations Manager",
    category: "Operations",
  },
  {
    title: "Sales Development Representative",
    category: "Sales",
  },
  {
    title: "Sales Executive",
    category: "Sales",
  },
  {
    title: "Sales Manager",
    category: "Sales",
  },
  {
    title: "Customer Support",
    category: "Customer Support",
  },
  {
    title: "HR",
    category: "HR",
  },
  {
    title: "Finance",
    category: "Finance",
  },
  {
    title: "Legal",
    category: "Legal",
  },
  {
    title: "Marketing",
    category: "Marketing",
  },
  {
    title: "Content Writer",
    category: "Marketing",
  },
];

const techStackList = [
  { title: "Python" },
  { title: "Java" },
  { title: "C++" },
  { title: "C#" },
  { title: "Ruby/Rails" },
  { title: "PHP" },
  { title: "JavaScript" },
  { title: "ReactJS" },
  { title: "React Native" },
  { title: "NodeJS" },
  { title: "Angular" },
  { title: "VueJS" },
  { title: "Django" },
  { title: "Flask" },
];

const experienceList = [
  { title: 1 },
  { title: 2 },
  { title: 3 },
  { title: 4 },
  { title: 5 },
  { title: 6 },
  { title: 7 },
  { title: 8 },
  { title: 9 },
  { title: 10 },
];

const jobMode = [{ title: "Remote" }, { title: "Onsite" }, { title: "Hybrid" }];

const noOfEmployees = [
  { title: "1-10" },
  { title: "11-20" },
  { title: "21-50" },
  { title: "51-100" },
  { title: "101-500" },
  { title: "500+" },
];

const minBasePay = [
  { title: "0L" },
  { title: "10L" },
  { title: "20L" },
  { title: "30L" },
  { title: "40L" },
  { title: "50L" },
  { title: "60L" },
  { title: "70L" },
];
