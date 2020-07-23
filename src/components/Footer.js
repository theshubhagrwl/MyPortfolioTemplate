import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <div className="stickyFooter">
      <span>@ Shubh Agrawal</span> <br />
      Made with ❤️ in <span style={{ color: "orange" }}>India </span>
      by
      <a
        href="https://www.instagram.com/theshubhagrwl/"
        style={{ color: "green", textDecoration: "none" }}
      >
        {" "}
        Shubh
      </a>
    </div>
  );
}
