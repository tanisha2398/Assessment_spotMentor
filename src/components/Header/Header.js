import React from "react";
import { NavLink } from "react-router-dom";
import SidePanel from "../SidePanel/SidePanel";
import "./Header.css";
import MainPanel from "../MainPanel/MainPanel";

const Header = () => (
  <header className="Header">
    <SidePanel />
  </header>
);
export default Header;
