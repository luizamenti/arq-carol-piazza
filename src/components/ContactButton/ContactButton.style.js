import styled from "styled-components";

export const Button = styled.button`
  border: ${({ theme }) => `2px solid ${theme.colors.blue}`};
  border-radius: 2px;
  background-color: unset;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 0.1rem 0 0.4rem 0 !important;

  svg {
    fill: ${({ theme }) => theme.colors.blue};
    width: 35px;
    height: 35px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.ivory};

    svg {
      fill: ${({ theme }) => theme.colors.ivory};
    }
  }
`;

export const Label = styled.p`
  font-size: 24px;
`;
