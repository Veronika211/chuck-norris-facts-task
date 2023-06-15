import { styled } from "styled-components";

export const PreviousSearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;
  padding: 10px;
  @media (max-width: 768px) {
    align-items: center;
    margin-top: 20px;
  }
`;
