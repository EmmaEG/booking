import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const PropListItem = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const ImageProp = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const PropTitles = styled.div``;

const H1 = styled.h1`
  font-size: 18px;
`;

const H2 = styled.h2`
  font-size: 14px;
  font-weight: 300;
`;

const PropertyList = () => {
  return (
    <Container>
      <PropListItem>
        <ImageProp
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt="property"
        />
        <PropTitles>
          <H1>Hotels</H1>
          <H2>233 hotels</H2>
        </PropTitles>
      </PropListItem>
      <PropListItem>
        <ImageProp
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt="property"
        />
        <PropTitles>
          <H1>Hotels</H1>
          <H2>233 hotels</H2>
        </PropTitles>
      </PropListItem>
      <PropListItem>
        <ImageProp
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt="property"
        />
        <PropTitles>
          <H1>Hotels</H1>
          <H2>233 hotels</H2>
        </PropTitles>
      </PropListItem>
      <PropListItem>
        <ImageProp
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
          alt="property"
        />
        <PropTitles>
          <H1>Hotels</H1>
          <H2>233 hotels</H2>
        </PropTitles>
      </PropListItem>
      <PropListItem>
        <ImageProp
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
          alt="property"
        />
        <PropTitles>
          <H1>Hotels</H1>
          <H2>233 hotels</H2>
        </PropTitles>
      </PropListItem>
    </Container>
  );
};

export default PropertyList;
