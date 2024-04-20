import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Typography sx={{ margin: "5%" }} variant="h3" align="center">
        Get Hired or Hire people for free!
      </Typography>
      <center>
        <buttonHome>
          <Link to="/employer/dashboard">Hire talent</Link>
        </buttonHome>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <buttonHome sx={{ margin: "2% 3%" }} variant="outlined">
          <Link to="/employee/feed">Get Job Now</Link>
        </buttonHome>
      </center>
      <center>
        <buttonMe
          onClick={() =>
            window.open("https://www.linkedin.com/in/vjmoirangthem", "_blank")
          }
        >
          Get to know Me!
        </buttonMe>
      </center>
    </div>
  );
};

export default Home;
