import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Item = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  object-fit: cover;
`;

const Name = styled.span`
  font-weight: bold;
`;

const City = styled.span`
  font-weight: 300;
`;

const Price = styled.span`
  font-weight: 500;
`;

const Rating = styled.div`
  font-size: 14px;
`;

const Button = styled.button`
  background-color: #003580;
  color: #ffffff;
  border: none;
  padding: 5px;
  margin-right: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Review = styled.span``;

const FeaturedProperties = () => {
  return (
    <Container>
      <Item>
        <Image
          src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o="
          alt="Image"
        />
        <Name>Sugar Loft Apartments</Name>
        <City>Rio de Janeiro</City>
        <Price>6,046</Price>
        <Rating>
          <Button>9.1</Button>
          <Review>Wonderfull</Review>
        </Rating>
      </Item>
      <Item>
        <Image
          src="https://cf.bstatic.com/xdata/images/hotel/max500/121406433.jpg?k=35435a71d5387f6a42b598d421231b63f0a4c3f1886d9734e6e669e0576cbb3d&o="
          alt="Image"
        />
        <Name>3 Epoques</Name>
        <City>Prague</City>
        <Price>8,685</Price>
        <Rating>
          <Button>8.5</Button>
          <Review>Excellent</Review>
        </Rating>
      </Item>
      <Item>
        <Image
          src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o="
          alt="Image"
        />
        <Name>Sugar Loft Apartments</Name>
        <City>Rio de Janeiro</City>
        <Price>6,046</Price>
        <Rating>
          <Button>9.1</Button>
          <Review>Wonderfull</Review>
        </Rating>
      </Item>
      <Item>
        <Image
          src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o="
          alt="Image"
        />
        <Name>Sugar Loft Apartments</Name>
        <City>Rio de Janeiro</City>
        <Price>6,046</Price>
        <Rating>
          <Button>9.1</Button>
          <Review>Wonderfull</Review>
        </Rating>
      </Item>
      <Item>
        <Image
          src="https://cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o="
          alt="Image"
        />
        <Name>Sugar Loft Apartments</Name>
        <City>Rio de Janeiro</City>
        <Price>6,046</Price>
        <Rating>
          <Button>9.1</Button>
          <Review>Wonderfull</Review>
        </Rating>
      </Item>
    </Container>
  );
};

export default FeaturedProperties;
