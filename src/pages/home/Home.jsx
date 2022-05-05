import styled from "styled-components";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";

const Container = styled.div``;

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const H1 = styled.h1`
  width: 1024px;
  font-size: 20px;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
        <H1>Browse by property type</H1>
        <PropertyList/>
      </HomeContainer>
    </Container>
  );
};

export default Home;
