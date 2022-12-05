import styled from "styled-components";
import {
  FlexBetweenBox,
  FlexCenterBox,
  FlexColumnBox,
} from "../../../shared/Styles/flex";

export const DetailWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const DetailPost = styled.div`
  ${FlexCenterBox}
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  & > div {
    width: 100%;
    max-width: 600px;
    height: 100vh;
    max-height: 500px;
    margin: 4% auto 4% auto;
    background-color: #ffffff;
    border-radius: 8px;
  }
`;

export const DetailPostUserBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem;
`;

export const Cancel = styled.span`
  width: 20px;
  height: 20px;

  cursor: pointer;
  position: relative;
  top: -1.5rem;
  svg {
    width: 20px;
  }
  &:hover {
    color: ${(props) => props.theme.color.gray};
  }
`;

export const DetailPostUserInfo = styled.div`
${FlexBetweenBox};
width: 100%;
  margin-left: 0.7rem;
  & > div {
    ${FlexColumnBox};
    strong {
      font-weight: 500;
    }
    span {
      margin-top: 4px;
      color: rgba(0, 0, 0, 0.4);
      font-weight: 500;
      font-size: 0.75rem;
    }
  }
  &>span
`;

export const PostContent = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  padding: 0 1rem 1rem 1rem;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 1.4;
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
`;
