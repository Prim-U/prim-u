import styled, { css } from "styled-components";

export const Nav = styled.nav`
  --padding: ${(props) => (props.isOpen ? "45px" : 0)};
  --opacity: ${(props) => (props.isOpen ? 1 : 0)};
  --visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  --maxheight: ${(props) => (props.isOpen ? "100vh" : 0)};
  --color: ${(props) => (props.isOpen ? props.theme.colors.black : props.theme.colors.white)};
  --bgColor: ${(props) => (props.isOpen ? props.theme.colors.white : props.theme.colors.black)};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1440px;
  padding: 40px 50px 0;
  @media screen and (max-width: 1024px) {
    padding: 40px 40px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 30px 0;
  }
  @media screen and (max-width: 640px) {
    padding: 10px 6px 0;
  }
  button {
    ${(props) =>
      props.isOpen
        ? css`
            mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='2.12109' width='30' height='3' transform='rotate(45 2.12109 0)' fill='white'/%3E%3Crect y='21.2134' width='30' height='3' transform='rotate(-45 0 21.2134)' fill='white'/%3E%3C/svg%3E");
          `
        : css`
            mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='30' height='14' viewBox='0 0 30 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='30' height='3' fill='white'/%3E%3Crect y='11' width='30' height='3' fill='white'/%3E%3C/svg%3E");
          `};
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 10px;
  transition: all 0.2s;
  @media screen and (max-width: 768px) {
    padding: 10px 10px 40px;
    background-color: var(--bgColor);
  }
`;

export const LogoContainer = styled.a`
  display: flex;
  column-gap: 12px;
  align-items: center;
  cursor: pointer;

  &:hover {
    p {
      color: ${(props) => props.theme.colors.purple};
    }
    div {
      background-color: ${(props) => props.theme.colors.purple};
    }
  }
  @media screen and (max-width: 768px) {
    :hover {
      p {
        color: var(--color);
      }
      div {
        background-color: var(--color);
      }
    }
  }
  @media screen and (max-width: 640px) {
    column-gap: 9px;
  }
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 51px;
  mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='32' height='51' viewBox='0 0 32 51' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C28 37 32 22.5 32 16.5C31.5 5.5 23 0 16 0L16 9C19.866 9 23 12.134 23 16C23 19.866 19.866 23 16 23L16 51Z' fill='white' fill-opacity='0.6'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 51C4 37 0 22.5 0 16.5C0.5 5.5 9 0 16 0L16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23L16 51Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z' fill='white'/%3E%3C/svg%3E");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: var(--color);
  transition: all 0.2s;
  @media screen and (max-width: 640px) {
    width: 21px;
    height: 33px;
  }
`;

export const LogoTitle = styled.p`
  font-family: ${(props) => props.theme.fonts.roboto};
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.03em;
  color: ${(props) => props.theme.colors.white};
  margin: 0;
  transition: all 0.2s;
  @media screen and (max-width: 768px) {
    color: var(--color);
  }
  @media screen and (max-width: 640px) {
    line-height: 14px;
    font-size: 20px;
  }
`;

export const NavIcon = styled.button`
  all: unset;
  width: 30px;
  mask-repeat: no-repeat;
  mask-position: center;
  background-color: var(--color);
  cursor: pointer;
  display: none;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;

export const NavLinks = styled.ul`
  all: unset;
  display: flex;
  column-gap: 40px;
  align-items: center;
  padding-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding-top: var(--padding);
    opacity: var(--opacity);
    visibility: var(--visibility);
    max-height: var(--maxheight);
    row-gap: 20px;
    transition: all 0.3s ease-out;
  }
`;

export const NavLink = styled.a`
  font-family: ${(props) => props.theme.fonts.condensed};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.purple};
  }
  @media screen and (max-width: 768px) {
    color: var(--color);
    :hover {
      color: var(--color);
    }
  }
`;
