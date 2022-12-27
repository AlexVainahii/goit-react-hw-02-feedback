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
  :nth-of-type(1):hover {
    background-color: green;
  }
  :nth-of-type(2):hover {
    background-color: yellow;
    color: black;
  }
  :nth-of-type(3):hover {
    background-color: red;
  }
`;
