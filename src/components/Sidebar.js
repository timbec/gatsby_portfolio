import React from "react";

import Container from "components/Container";

import NavBar from "./NavBar";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Container>
        <NavBar />
        <h3>The Sidebar</h3>
      </Container>
    </aside>
  );
};

export default Sidebar;
