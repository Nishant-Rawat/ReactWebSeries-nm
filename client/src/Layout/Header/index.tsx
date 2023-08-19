import { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../Assets/images/logoGen.png";
import { headerItem } from "./constant";
import styled from "styled-components";

const NavItemWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavItem = styled.div`
  color: #fff;
  cursor: pointer;
  margin-right: 3.5rem;
  font-size: 1.25rem;
  font-family: monospace;
  font-weight: 500;
`;

function TopNav() {
  return (
    <div>
      <Navbar color="dark" className="height-4">
        <NavbarBrand>
          <span
            className="text-white ms-4"
            style={{ fontFamily: "monospace", fontSize: "1.25rem" }}
          >
            Nishant Rawat
          </span>
        </NavbarBrand>
        <NavItemWrapper>
          {headerItem.map((item, index) => (
            <NavItem>{item?.title}</NavItem>
          ))}
        </NavItemWrapper>
      </Navbar>
    </div>
  );
}

export default TopNav;
