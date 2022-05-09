import styled from "styled-components";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";

const Container = styled.div``;

const HomeContainer = styled.div`
width: 100%;
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
        <PropertyList />
        <H1>Home guests love</H1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </HomeContainer>
    </Container>
  );
};

export default Home;
