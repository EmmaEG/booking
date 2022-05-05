import styled from "styled-components";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const Container = styled.div``;

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <HomeContainer>
        <Featured />
      </HomeContainer>
    </Container>
  );
};

export default Home;
