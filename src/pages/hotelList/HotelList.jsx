import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

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
`;

const ListResult = styled.div`
  flex: 3;
`;

const SearchTitle = styled.h1`
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const SearchItem = styled.div`
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
  padding: 5px;
`;

const Date = styled.span`
  height: 30px;
  padding: 5px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const List = () => {
  // again we use react-router-dom to catch values from handleSearch
  const location = useLocation();
  // console.log(location);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDete] = useState(location.state.date);
  const [options, setoptions] = useState(location.state.options);

  return (
    <Container>
      <Navbar />
      <Header type="hotelList" />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <SearchTitle>Seacrh</SearchTitle>
            <SearchItem>
              <LabelDescription>Destination</LabelDescription>
              <SearchInput type="text" placeholder={destination} />
            </SearchItem>
            <SearchItem>
              <LabelDescription>Check-in Date</LabelDescription>
              <Date>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </Date>
            </SearchItem>
          </ListSearch>
          <ListResult></ListResult>
        </ListWrapper>
      </ListContainer>
    </Container>
  );
};

export default List;
