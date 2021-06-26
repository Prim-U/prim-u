import styled from "styled-components";
import { GlobalSection } from "../global-components";
import { fontSize, lineHeight, space, width } from "styled-system";

export const GlobalSectionStyled = styled(GlobalSection)`
  max-width: 100%;
  margin: 0;
  padding: 80px 0;
  @media only screen and (max-width: 640px) {
    padding: 60px 0px 80px;
  }
`;


export const CarrouselCard = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  min-height: max-content;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  scroll-snap-align: center;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
  scroll-snap-align: center;
  width: calc(100vw - 64vw);
  width: calc(22vw + 200px);
  @media only screen and (max-width: 1024px) {
    width: calc(100vw - 57vw);
  }
  @media only screen and (max-width: 800px) {
    width: calc(100vw - 30vw);
  }
  @media only screen and (max-width: 640px) {
    width: calc(100vw - 20vw);
  }
  @media only screen and (max-width: 500px) {
    width: calc(100vw - 20px);
  }
`;
export const TitleReviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;
export const ReviewText = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  text-align: left;
  ${lineHeight};
  ${space};
  ${fontSize};
  ${width};
`;
export const Stars = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-self: center;
  gap: 10px;
`;
