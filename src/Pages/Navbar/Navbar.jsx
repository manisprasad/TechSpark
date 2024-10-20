import React, { useState } from "react";
import "./Navbar.css"; // Import custom CSS
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false); // State to control mobile menu

  return (
    <div>
      {/* Top Bar Section */}
      <div className="top-bar">
        <div className="icons"></div>
      </div>

      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="../../../../../Users/meth/Downloads/TechSpark-main/public/Logo.jpg"
            alt="Logo"
            style={{ zoom: "150%" }}
          />
        </div>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>

        <ul className={`nav-links ${isMobile ? "nav-links-mobile" : ""}`}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ marginLeft: "8px" }}
              component={Link}
              to="/"
            >
              Home
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ marginLeft: "8px" }}
              component={Link}
              to="/projects"
            >
              Project
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ marginLeft: "8px" }}
              component={Link}
              to="/resource"
            >
              Resource
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ marginLeft: "8px" }}
              component={Link}
              to="/team"
            >
              Team
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ marginLeft: "8px" }}
              component={Link}
              to="/about"
            >
              About US
            </Typography>
          </Box>
          
        </ul>

        <div className={`search-bar ${isMobile ? "search-bar-mobile" : ""}`}>
          <input type="text" placeholder="Search..." className="search-input" />
          {/* <button className="search-btn"><i className="fas fa-search"></i></button> */}
        </div>
        <div>{/* <img src="./src/collegaphotu.jpg" alt="" /> */}</div>
      </nav>
    </div>
  );
};

export default Navbar;
