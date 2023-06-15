import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const SingleFactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const FactText = styled.p`
  width: 450px;
  margin-right: 50px;
  word-wrap: break-word;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;
