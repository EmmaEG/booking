import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file+

import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const Container = styled.div``;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;

const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 5px;
  position: sticky; // to keep the component on top
  top: 10px;
  height: max-content;
`;

const ListResult = styled.div`
  flex: 3;
`;

const SearchTitle = styled.h1`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const SearchItemOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const LabelDescription = styled.label`
  font-size: 13px;
`;

const SearchInput = styled.input`
  height: 30px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;

const Date = styled.div`
  box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 7px 2px -5px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 7px 5px -2px rgba(0, 0, 0, 0.58);
`;

const LabelDate = styled.div`
  border-radius: 5px;
  outline: none;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 30px;
  border: none;
  padding: 5px;
  font-size: 16px;
  color: #808080;
  cursor: pointer;
`;

const ListOptionsWrapper = styled.div`
  padding: 10px;
`;

const ListTitle = styled.h4`
  color: #ffffff;
`;

const ListOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #000000;
  font-size: 12px;
`;

const ListOptionText = styled.span``;

const Small = styled.small``;

const ListOptionInput = styled.input`
  width: 50px;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 2px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: #ffffff;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`;

const List = () => {
  // again we use react-router-dom to catch values from handleSearch
  const location = useLocation();
  // console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setoptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <Container>
      <Navbar />
      <Header type="hotelList" />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <SearchTitle>Seacrh</SearchTitle>
            <SearchItemOptions>
              <LabelDescription>Destination</LabelDescription>
              <SearchInput type="text" placeholder={destination} />
            </SearchItemOptions>
            <SearchItemOptions>
              <LabelDescription>Check-in Date</LabelDescription>
              <LabelDate onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </LabelDate>
              {openDate && (
                <Date>
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    ranges={date}
                  />
                </Date>
              )}
            </SearchItemOptions>

            <SearchItemOptions>
              <ListTitle>Options</ListTitle>
              <ListOptionsWrapper>
                <ListOptionItem>
                  <ListOptionText>
                    Min Price <Small>per night</Small>
                  </ListOptionText>
                  <ListOptionInput type="number" />
                </ListOptionItem>
                <ListOptionItem>
                  <ListOptionText>
                    Max Price <Small>per night</Small>
                  </ListOptionText>
                  <ListOptionInput type="number" />
                </ListOptionItem>
                <ListOptionItem>
                  <ListOptionText>Adult</ListOptionText>
                  <ListOptionInput
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  />
                </ListOptionItem>
                <ListOptionItem>
                  <ListOptionText>Children</ListOptionText>
                  <ListOptionInput
                    type="number"
                    min={0}
                    placeholder={options.children}
                  />
                </ListOptionItem>
                <ListOptionItem>
                  <ListOptionText>Room</ListOptionText>
                  <ListOptionInput
                    type="number"
                    min={1}
                    placeholder={options.room}
                  />
                </ListOptionItem>
              </ListOptionsWrapper>
            </SearchItemOptions>
            <Button>Search</Button>
          </ListSearch>
          <ListResult>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </ListResult>
        </ListWrapper>
      </ListContainer>
    </Container>
  );
};

export default List;
