import React, { useEffect, useState } from "react";
import { Link ,useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";

const Navbar = () => {
    const [expandNav, setExpandNav] = useState(false);
    const location = useLocation()
    useEffect(() => {
        setExpandNav(false)
    },[location])

  return (
    <div className="navbar" id={expandNav ?  'open' : 'close'}>
      <div className="toggleButton">
        <button onClick={() => setExpandNav((prev) => !prev)}>
          <DensitySmallIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
