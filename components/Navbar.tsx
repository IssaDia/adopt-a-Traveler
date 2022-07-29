import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/new" passHref>
          <StyledLink>New</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};
