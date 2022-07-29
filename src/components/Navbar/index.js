import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/weeklypage">
            This Week in Fantasy
          </NavLink>
          <NavLink to="/keepers">
            Keepers
          </NavLink>
          <NavLink to="/teams">
            Teams
          </NavLink>
          <NavLink to="/rules">
            Rules
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
