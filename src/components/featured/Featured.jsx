import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    z-index: 1;
`;

const FeaturedItem = styled.div`
    position: relative;
    color: #ffffff;
    border-radius: 10px;
    overflow: hidden;
    height: 250px;
`;

const FeauturedImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const FeaturedTitles = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;

const H1 = styled.h1``;

const H2 = styled.h2``;

const Featured = () => {
  return (
    <Container>
      <FeaturedItem>
        <FeauturedImg
          src="https://cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&o="
          alt="city"
        />
        <FeaturedTitles>
          <H1>Dublin</H1>
          <H2>25 properties</H2>
        </FeaturedTitles>
      </FeaturedItem>
      <FeaturedItem>
        <FeauturedImg
          src="https://cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&o="
          alt="city"
        />
        <FeaturedTitles>
          <H1>Truckee</H1>
          <H2>493 properties</H2>
        </FeaturedTitles>
      </FeaturedItem>
      <FeaturedItem>
        <FeauturedImg
          src="https://cf.bstatic.com/xdata/images/city/540x270/689418.webp?k=d39081abcd45a070b313a85e992b6849b0503d7f1f7e4fb7effae77c9a2c019f&o="
          alt="city"
        />
        <FeaturedTitles>
          <H1>South Lake Tahoe</H1>
          <H2>664 properties</H2>
        </FeaturedTitles>
      </FeaturedItem>
    </Container>
  );
};

export default Featured;
