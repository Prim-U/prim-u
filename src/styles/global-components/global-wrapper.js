import styled, { css } from "styled-components";

export const GlobalWrapper = styled.main`
  max-width: 1440px;
  width: 100%;
  /* border: 4px solid red; */
  margin: auto; ;
`;

export const GlobalSection = styled.section`
  /* padding: 80px 60px; */
  max-width: 1320px;
  border: 1px solid red;
  margin: auto;
`;

/**
to make this work all you need is to pass props in the component like so
example: <GlobalTitle p="2rem"> My title </GlobalTitle>
this is one way or if you need to pass a padding to a specific side just use one of the below props pr= for padding-right pl= padding-left pt=padding-top pb=padding-bottom
 */

/* if you need a different color pass this prop */
export const GlobalTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `};
  ${(props) =>
    props.pt &&
    css`
      padding-top: ${props.pt};
    `};
  ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `};
  ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl};
    `};
  ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr};
    `};
`;

export const SpanTitle = styled.span`
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.condensed};

  text-transform: inherit;
  font-style: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
`;

export const GlobalSubtitle = styled.p`
  font-family: ${({ theme, condensed }) =>
    condensed ? theme.fonts.condensed : theme.fonts.roboto};

  font-style: normal;
  font-weight: bold;
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.p};
    `};
  line-height: 37px;
  letter-spacing: -0.01em;
  color: #000000;
`;
