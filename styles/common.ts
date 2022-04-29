import styled from "@emotion/styled";

export const Title = styled.h1`
  color: var(--text);
  font-size: 25px;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 15px;
  color: var(--sub-text);
`;

export const Button = styled.button`
  background-color: var(--main);
  color: var(--white);
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid var(--sub-text);
  border-radius: 5px;
  padding: 0 20px;
  font-size: 14px;
  box-sizing: border-box;
  color: var(--text);
  transition: 0.3s;
  ::placeholder {
    color: var(--sub-text);
  }
  :focus {
    border: 1px solid var(--main);
    color: var(--main);
  }
`;
