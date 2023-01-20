import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 20px;
  margin-bottom: 20px;
  height: 40px;

  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.4);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
    border-color: yellow;
    color: yellow;
  }
`;
