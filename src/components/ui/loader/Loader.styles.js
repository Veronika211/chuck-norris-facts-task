import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderSpinner = styled.div`
  border: 6px solid #f3f3f3;
  border-top: 6px solid #18204a;
  border-radius: 50%;
  height: ${({ height }) => (height ? height : 35)}px;
  width: ${({ width }) => (width ? width : 35)}px;
  animation: ${spinAnimation} 1s linear infinite;
`;
