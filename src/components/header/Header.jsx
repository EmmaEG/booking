import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
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
  position: relative; // to have search header froont header
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

const HeaderSearch = styled.div`
  height: 30px;
  background-color: #ffffff;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute; // to search header on header
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;

const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const HeaderInput = styled.input`
  border: none;
  outline: none;
`;

const HeaderSearhText = styled.span`
  color: lightgray;
  cursor: pointer;
`;

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
          free EGBooking.com account
        </HeaderDescription>
        <HeaderButton>Sign in / Register</HeaderButton>
        <HeaderSearch>
          <HeaderSearchItem>
            <FontAwesomeIcon style={{ color: "lightgray" }} icon={faBed} />
            <HeaderInput type="text" placeholder="Where are you going?" />
          </HeaderSearchItem>
          <HeaderSearchItem>
            <FontAwesomeIcon
              style={{ color: "lightgray" }}
              icon={faCalendarDays}
            />
            <HeaderSearhText>date to date</HeaderSearhText>
          </HeaderSearchItem>
          <HeaderSearchItem>
            <FontAwesomeIcon style={{ color: "lightgray" }} icon={faPerson} />
            <HeaderSearhText>2 adults 2 children 1 room</HeaderSearhText>
          </HeaderSearchItem>
          <HeaderSearchItem>
            <HeaderButton>Search</HeaderButton>
          </HeaderSearchItem>
        </HeaderSearch>
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
