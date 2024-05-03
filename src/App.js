import "./App.css";
import { Box, Typography } from "@mui/material";
import FilterJob from "./components/FilterJob";

function App() {
  return (
    <div className="App">
      <Box className="App-header">Career Connect</Box>
      <Box
        className="searchJobs"
      >
        <Typography sx={{borderBottom: "1px solid black", width:"30%"}}>Search Jobs</Typography>
      </Box>
      <FilterJob />
    </div>
  );
}

export default App;
