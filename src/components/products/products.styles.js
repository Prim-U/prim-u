import styled from "styled-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  width: 400px;
  height: 470px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  ${lineHeight};
  ${space};
  ${fontSize};

  @media only screen and (max-width: 1024px) {
    width: 284px;
    height: 508px;
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 220px;
  display: flex; 
  @media only screen and (max-width: 1024px) {
    width: 284px;
  }
`;

export const InfoWrapper = styled.div`
  width: 400px;
  height: 250px;
  @media only screen and (max-width: 1024px) {
    width: 284px;
    height: 288px;
  }

`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 0 24px;
  ${lineHeight};
  ${space};
  ${fontSize};

  @media only screen and (max-width: 1024px) {
    margin: 20px 0 0 16px;
  }
`;

export const ProductText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin: 14px 0 30px 24px;
  text-align: left;
  width: 352px;
  ${lineHeight};
  ${space};
  ${fontSize};

  @media only screen and (max-width: 1024px) {
    width: 252px;
    margin: 14px 0 20px 16px;
  }
`;

export const PriceContainer = styled.div`
  width: 79px;
  height: 34px;
  margin: 0 0 30px 24px;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  padding: auto;
  background-color: ${({ theme }) => theme.colors.purple};
  @media only screen and (max-width: 1024px) {
    margin: 0 0 26px 16px;
  }

  @media only screen and (max-width: 375px) {
    margin: 0 0 26px 16px;
  }
`;

export const Price = styled.p`
  width: 47px;
  margin: auto;
  color: ${({ theme }) => theme.colors.white};
  ${lineHeight};
  ${space};
  ${fontSize};
`;

export const AngleContainer = styled.div`
  width: 80vw;
  height: 1px;
  margin: 0 auto;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
`;


export const Angle = styled.a`
  align-self: center;
  cursor: pointer;
  position: relative;
  bottom: 28px;

  &:first-child {
    left: 50px
  }

  &:nth-child(2) {
    align-self: flex-end;
    right: 50px;
    top: -17px;
  }
`;
