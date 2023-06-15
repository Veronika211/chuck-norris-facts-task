import { styled } from "styled-components";

export const SearchFormContainer = styled.div`
  margin-bottom: 30px;
  position: relative;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 8px 8px 12px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  width: 300px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HelperText = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 4px;
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  position: absolute;
  top: 15%;
  right: 10px;
`;
