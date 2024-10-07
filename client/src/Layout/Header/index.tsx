import { Navbar } from "reactstrap";
import { headerItem } from "./constant";
import styled from "styled-components";

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const NavItemWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const NavItem = styled.a<NavItemProps>`
  color: #fff;
  cursor: pointer;
  margin-right: 3.5rem;
`;

function TopNav() {
  return (
    <Navbar color="dark" className="py-3">
      <NavItemWrapper>
        {headerItem.map((item) => (
          <NavItem href={`#${item?.id}`} target="_self" key={item?.title}>
            {item?.title}
          </NavItem>
        ))}
      </NavItemWrapper>
    </Navbar>
  );
}

export default TopNav;
