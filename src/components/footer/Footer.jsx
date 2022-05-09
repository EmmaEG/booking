import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  font-size: 13px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ItemList = styled.li`
  margin-bottom: 10px;
  color: #003580;
  cursor: pointer;
`;

const Text = styled.span`
  color: #003580;
  font-size: 11px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ItemList>Countires</ItemList>
          <ItemList>Regions</ItemList>
          <ItemList>Cities</ItemList>
          <ItemList>Districts</ItemList>
          <ItemList>Airports</ItemList>
          <ItemList>Hotels</ItemList>
        </List>
        <List>
          <ItemList>Countires</ItemList>
          <ItemList>Regions</ItemList>
          <ItemList>Cities</ItemList>
          <ItemList>Districts</ItemList>
          <ItemList>Airports</ItemList>
          <ItemList>Hotels</ItemList>
        </List>
        <List>
          <ItemList>Countires</ItemList>
          <ItemList>Regions</ItemList>
          <ItemList>Cities</ItemList>
          <ItemList>Districts</ItemList>
          <ItemList>Airports</ItemList>
          <ItemList>Hotels</ItemList>
        </List>
        <List>
          <ItemList>Countires</ItemList>
          <ItemList>Regions</ItemList>
          <ItemList>Cities</ItemList>
          <ItemList>Districts</ItemList>
          <ItemList>Airports</ItemList>
          <ItemList>Hotels</ItemList>
        </List>
        <List>
          <ItemList>Countires</ItemList>
          <ItemList>Regions</ItemList>
          <ItemList>Cities</ItemList>
          <ItemList>Districts</ItemList>
          <ItemList>Airports</ItemList>
          <ItemList>Hotels</ItemList>
        </List>
      </Wrapper>
      <Text>Copyright © 1996–2022 EGBooking.com™. All rights reserved.</Text>
    </Container>
  );
};

export default Footer;
