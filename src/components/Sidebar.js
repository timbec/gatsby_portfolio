import React from "react";

import Container from "components/Container";

import NavBar from "./NavBar";

const Sidebar = () => {
  return (
    <aside className="sidebar">
        <NavBar />
        <h3>The Sidebar</h3>
    </aside>
  );
};

export default Sidebar;
