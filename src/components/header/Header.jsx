import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
  background-color: #003580;
  color: #ffffff;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1024px; // to small screen
  margin: 20px 0px 100px 0px; // top-left-bottom-right
`;

const HeaderList = styled.div`
  display: flex;
  gap: 40px; // gap means brecha
  margin-bottom: 50px;
`;

const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  &.active {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`;

const HeaderSpan = styled.span``;

const HeaderTitle = styled.h1``;

const HeaderDescription = styled.p`
  margin: 20px 0px;
`;

const HeaderButton = styled.button`
  background-color: #0071c2;
  color: #ffffff;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const HeaderSearch = styled.div``;

const Header = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HeaderList>
          <HeaderListItem className="active">
            <FontAwesomeIcon icon={faBed} />
            <HeaderSpan>Stays</HeaderSpan>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <HeaderSpan>Flights</HeaderSpan>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <HeaderSpan>Car rentals</HeaderSpan>
          </HeaderListItem>
          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <HeaderSpan>Airport taxis</HeaderSpan>
          </HeaderListItem>
        </HeaderList>
        <HeaderTitle>A lifetime of discounts? It's Genius.</HeaderTitle>
        <HeaderDescription>
          Travel and win: get an immediate discount of 10% or more with your
          free Booking.com account
        </HeaderDescription>
        <HeaderButton>Sign in / Register</HeaderButton>
        <HeaderSearch></HeaderSearch>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
