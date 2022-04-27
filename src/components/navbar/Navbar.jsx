import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;

const NavWrapper = styled.div`
  width: 100%;
  max-width: 1024px; // for small screen
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavSpan = styled.span`
  font-weight: 500;
`;

const NavItems = styled.div``;

const NavButton = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;

const Navbar = () => {
  return (
    <Container>
      <NavWrapper>
        <NavSpan>EGBooking</NavSpan>
        <NavItems>
          <NavButton>Register</NavButton>
          <NavButton>Login</NavButton>
        </NavItems>
      </NavWrapper>
    </Container>
  );
};

export default Navbar;
