import styled from "styled-components";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
    </Container>
  );
};

export default Home;
