import { styled, css } from "styled-components";

const buttonBaseStyles = css`
  font-size: 14px;
  font-weight: 600;
  border-radius: 100px;
  text-align: center;
  height: ${({ height }) => (height ? height : 20)}px;
  width: ${({ width }) => (width ? width : 40)}px;
  margin-top: 20px;
  cursor: pointer;
`;
export const FilledButton = styled.button`
  ${buttonBaseStyles};
  color: #ffff;
  background-color: #18204a;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: #374151;
  }
`;

export const OutlinedButton = styled.button`
  ${buttonBaseStyles};
  color: #18204a;
  background-color: #ffffff;
  border: 1px solid #18204a;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: rgb(249, 250, 251);
  }
`;
