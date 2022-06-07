import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home">
            Home
          </NavLink>
          <NavLink to="/contact">
            This Week in Fantasy
          </NavLink>
          <NavLink to="/keepers">
            Keepers
          </NavLink>
          <NavLink to="/sign-up">
            Rules
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
