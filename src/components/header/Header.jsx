import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns"; // Date-fns is a library that provides comprehensive functions for date formatting and manipulation

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
`;

/* margin: ${(props) =>
  props.type === "hotelList" ? "20px 0px 0px 0px" : "20px 0px 100px 0px"}; */

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

const HeaderDate = styled.div`
  position: absolute;
  top: 50px;
  z-index: 2; //it's bigger than featured
  box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
`;

const HeaderOptions = styled.div`
  position: absolute;
  top: 50px;
  background-color: #ffffff;
  color: gray;
  border-radius: 5px;
  box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
  z-index: 2; //it's bigger than featured
`;

const OptionsItem = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const OptionText = styled.span``;

const OptionCounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #000000;
`;

const CounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
`;

const OptionCounterNumber = styled.span``;

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [openOtions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate(); // to redirect

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      // take the previous state
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    // with navigate we can push the user to the other route and also we can send our state
    // in this case i send these values to HotelList component
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <Container>
      <HeaderWrapper
        style={
          type !== "hotelList"
            ? { margin: "20px 0px 100px 0px" }
            : { margin: "20px 0px 0px 0px" }
        }
      >
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
        {type !== "hotelList" && (
          <>
            <HeaderTitle>A lifetime of discounts? It's Genius.</HeaderTitle>
            <HeaderDescription>
              Travel and win: get an immediate discount of 10% or more with your
              free EGBooking.com account
            </HeaderDescription>
            <HeaderButton>Sign in / Register</HeaderButton>
            <HeaderSearch>
              <HeaderSearchItem>
                <FontAwesomeIcon style={{ color: "lightgray" }} icon={faBed} />
                <HeaderInput
                  type="text"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon
                  style={{ color: "lightgray" }}
                  icon={faCalendarDays}
                />
                <HeaderSearhText onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </HeaderSearhText>
                {openDate && (
                  <HeaderDate>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      minDate={new Date()}
                    />
                  </HeaderDate>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon
                  style={{ color: "lightgray" }}
                  icon={faPerson}
                />
                <HeaderSearhText
                  onClick={() => setOpenOptions(!openOtions)}
                >{`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}</HeaderSearhText>

                {openOtions && (
                  <HeaderOptions>
                    <OptionsItem>
                      <OptionText>Adult</OptionText>
                      <OptionCounterWrapper>
                        <CounterButton
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </CounterButton>
                        <OptionCounterNumber>
                          {options.adult}
                        </OptionCounterNumber>
                        <CounterButton
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionCounterWrapper>
                    </OptionsItem>
                    <OptionsItem>
                      <OptionText>Children</OptionText>
                      <OptionCounterWrapper>
                        <CounterButton
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </CounterButton>
                        <OptionCounterNumber>
                          {options.children}
                        </OptionCounterNumber>
                        <CounterButton
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionCounterWrapper>
                    </OptionsItem>
                    <OptionsItem>
                      <OptionText>Room</OptionText>
                      <OptionCounterWrapper>
                        <CounterButton
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </CounterButton>
                        <OptionCounterNumber>
                          {options.room}
                        </OptionCounterNumber>
                        <CounterButton
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionCounterWrapper>
                    </OptionsItem>
                  </HeaderOptions>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <HeaderButton onClick={handleSearch}>Search</HeaderButton>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        )}
      </HeaderWrapper>
    </Container>
  );
};

export default Header;
