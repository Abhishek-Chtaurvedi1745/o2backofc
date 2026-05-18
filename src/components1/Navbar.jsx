import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/pdf/logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="Outsource2Backoffice" />
      </div>
    </nav>
  );
}
