import { Navbar, NavbarBrand } from "reactstrap";
import { headerItem } from "./constant";
import styled from "styled-components";
import headerLogo from "../../Assets/images/headerLogo.jpg";

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
            <img
              src={headerLogo}
              alt="logo"
              className="img-fluid rounded-1 height-2 me-1"
            />
            {/* Nishant Rawat */}
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
