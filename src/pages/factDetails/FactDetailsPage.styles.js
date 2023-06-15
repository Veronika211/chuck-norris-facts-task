import { styled } from "styled-components";

export const FactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-width: 150px;
  padding: 5px 20px;
  border-radius: 30px;
  max-height: 340px;
  max-width: 850px;
  @media (max-width: 768px) {
    min-width: 200px;
  }
`;
