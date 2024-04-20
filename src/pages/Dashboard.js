import * as React from "react";
import { Box, Tab, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Create from "./Create";
import Logo from "./logo.png"; // Import your logo image here

export default function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleHomeClick = () => {
    // Redirect to home page logic
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        borderRadius: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Roboto, sans-serif", // Use Roboto font for the entire page
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          cursor: "pointer",
        }}
        onClick={handleHomeClick}
      >
        <img src={Logo} alt="Logo" style={{ width: "40px", height: "auto" }} />
      </Box>
      <Typography
        variant="h3"
        sx={{ marginBottom: "2rem", color: "#333", textAlign: "center" }}
      >
        EMPLOYER DASHBOARD
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {/* Add more tabs here if needed */}
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ marginTop: "1rem" }}>
            <Create />
          </TabPanel>
          {/* Add more TabPanels here if needed */}
        </TabContext>
      </Box>
    </Box>
  );
}
