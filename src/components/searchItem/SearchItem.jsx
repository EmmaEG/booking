import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #c6c6c6;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DescTitle = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;

const DescDistance = styled.span`
  font-size: 12px;
`;

const DescTaxi = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: #ffffff;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

const DescSubtitle = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

const DescFeatures = styled.span`
  font-size: 12px;
`;

const DescCancelTitle = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

const DescCancelSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;

const DetRaiting = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DetReview = styled.span``;

const DetButton = styled.button`
  background-color: #003580;
  color: #ffffff;
  border: none;
  padding: 5px;
  margin-right: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const DetText = styled.div`
    display: flex;
    text-align: right;
    flex-direction: column;
    gap: 5px;
`;

const DetPrice = styled.span`
    font-size: 22px;
`;

const DetTaxes = styled.span`
    font-size: 12px; 
    color: #008009;
`;

const DetCheck = styled.button`
    background-color: #0071c2;
    color: #ffffff;
    border: none;
    padding: 10px 5px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
`;


const SearchItem = () => {
  return (
    <Container>
      <Image
        src="https://cf.bstatic.com/xdata/images/hotel/square200/22407677.webp?k=9a7ab14cf933617c32986a7700b8deb68958561509fffce96b3839b36c4d9629&o=&s=1"
        alt="Image"
      />
      <Description>
        <DescTitle>Tower Street Apartments</DescTitle>
        <DescDistance>500m from center</DescDistance>
        <DescTaxi>Free airport taxi</DescTaxi>
        <DescSubtitle>Studio apartment with Air conditioning</DescSubtitle>
        <DescFeatures>
          Entire studio . 1 bathroom . 21m2 1 full bed
        </DescFeatures>
        <DescCancelTitle>Free Cancellation</DescCancelTitle>
        <DescCancelSubtitle>
          You can canel later, so lock in this great price today!
        </DescCancelSubtitle>
      </Description>
      <Details>
        <DetRaiting>
          <DetReview>Excellent</DetReview>
          <DetButton>8.9</DetButton>
        </DetRaiting>
        <DetText>
          <DetPrice>$125</DetPrice>
          <DetTaxes>Includes taxes and fees</DetTaxes>
          <DetCheck>See Availability</DetCheck>
        </DetText>
      </Details>
    </Container>
  );
};

export default SearchItem;
