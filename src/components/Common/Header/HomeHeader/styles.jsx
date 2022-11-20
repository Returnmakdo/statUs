import styled from "styled-components";
import { FlexAlignBox, FlexCenterBox } from "../../../../shared/Styles/flex";

export const Wrapper = styled.div`
  ${FlexAlignBox};
  position: relative;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.layoutColor.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 3rem;
`;

export const Nav = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 10rem;
  align-items: center;
  width: 100%;
  z-index: 100;
`;

export const RightNav = styled.ul`
  ${FlexAlignBox};
  justify-content: flex-end;
  & > li {
    position: relative;
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
    border-radius: 50%;
    cursor: pointer;
    ${FlexCenterBox};
    &:nth-child(2) {
      margin-left: 0.5rem;
    }
    & > img {
      width: 2.4rem;
      height: 2.4rem;
      object-fit: cover;
      background-color: ${(props) => props.theme.color.extraLightGray};
      border-radius: 50%;
    }
    &:hover {
      background-color: ${(props) => props.theme.color.extraLightGray};
    }
  }
`;

export const SearchForm = styled.form`
  ${FlexAlignBox};
  position: relative;
  justify-self: center;

  svg {
    position: absolute;
    left: 1rem;
  }
  input {
    width: 30vw;
    max-width: 420px;
    padding: 1rem 1rem 1rem 3rem;
    background-color: #fbfbfa;
    border: none;
    border-radius: 100px;

    &::placeholder {
      color: #aaaaaa;
    }
  }
`;
