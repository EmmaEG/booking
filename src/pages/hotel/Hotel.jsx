import React from "react";
import styled from "styled-components";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Continer = styled.div``;

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-top: 20px;
`;

const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const BookNowButton = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 10px 20px;
  border: none;
  background-color: #0071c2;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Address = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddressText = styled.span``;

const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;

const HotelPriceHighLight = styled.span`
  color: #008009;
  font-weight: 500;
`;

const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 33%;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const HotelTexts = styled.div`
  flex: 3;
`;

const DetailTitle = styled.h1``;

const DetailDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

const HotelDetailPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;
`;

const DetailPriceTitle = styled.h1`
  font-size: 18px;
  color: #555;
`;

const DetailPriceDesc = styled.span`
  font-size: 14px;
`;

const DetailPrice = styled.h2`
  font-weight: 300;
`;

const DetailButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #0071c2;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Hotel = () => {
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/244328832.jpg?k=ff8efe676b9521ad6b95c894521e0583e6c71b2ffca4b34161099edef8ceb506&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/244328535.jpg?k=d2e3d20f88343d4ba910da591b4b1b5d7f9fc6991f6e38675f3f9f3b5ccd64e9&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/244328832.jpg?k=ff8efe676b9521ad6b95c894521e0583e6c71b2ffca4b34161099edef8ceb506&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/244328535.jpg?k=d2e3d20f88343d4ba910da591b4b1b5d7f9fc6991f6e38675f3f9f3b5ccd64e9&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/244328832.jpg?k=ff8efe676b9521ad6b95c894521e0583e6c71b2ffca4b34161099edef8ceb506&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/244328535.jpg?k=d2e3d20f88343d4ba910da591b4b1b5d7f9fc6991f6e38675f3f9f3b5ccd64e9&o=&hp=1",
    },
  ];

  return (
    <Continer>
      <Navbar />
      <Header type="hotelList" />
      <HotelContainer>
        <HotelWrapper>
          <BookNowButton>Reserve or Book now!</BookNowButton>
          <Title>Grand Hotel</Title>
          <Address>
            <FontAwesomeIcon icon={faLocationDot} />
            <AddressText>Elton st 125 New York</AddressText>
          </Address>
          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <HotelPriceHighLight>
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighLight>
          <HotelImages>
            {photos.map((photo) => (
              <ImageWrapper>
                <Image src={photo.src} alt="hotel photos" />
              </ImageWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelTexts>
              <DetailTitle>Stay in the heart of Madrid</DetailTitle>
              <DetailDesc>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam facilis eum quod unde eius reiciendis, Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quibusdam facilis
                eum quod unde eius reiciendis, earum debitis, repellat eveniet
                praesentium temporibus maiores, nostrum rem quisquam beatae aut
                quae ipsam aliquid!
              </DetailDesc>
            </HotelTexts>
            <HotelDetailPrice>
              <DetailPriceTitle>Perfect for a 9-night stay!</DetailPriceTitle>
              <DetailPriceDesc>
                Located in the real heart of Madrid, this property has an
                excellent location score of 9.9!
              </DetailPriceDesc>
              <DetailPrice>
                <b>$945</b> (9 nights)
              </DetailPrice>
              <DetailButton>Reserve or Book Now!</DetailButton>
            </HotelDetailPrice>
          </HotelDetails>
        </HotelWrapper>
        <MailList />
        <br />
        <Footer />
      </HotelContainer>
    </Continer>
  );
};

export default Hotel;
