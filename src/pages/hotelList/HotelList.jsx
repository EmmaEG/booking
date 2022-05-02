import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";

const Container = styled.div``;

const List = () => {
  return (
    <Container>
      <Navbar />
      <Header type="hotelList"/>
    </Container>
  );
};

export default List;
