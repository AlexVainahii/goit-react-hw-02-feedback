import styled from '@emotion/styled';

export const ButtonCard = styled.div`
  display: inline-flex;
  gap: 15px;
`;
export const Button = styled.button`
  width: 100px;
  color: white;
  text-align: center;
  background-color: grey;
  border-radius: 50%;
  :nth-child(1):hover {
    background-color: green;
  }
  :nth-child(2):hover {
    background-color: yellow;
    color: black;
  }
  :nth-child(3):hover {
    background-color: red;
  }
`;
