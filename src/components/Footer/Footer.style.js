import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.ivory};
  margin-top: 3rem;
`;

export const Logo = styled.img`
  width: 300px;
`;
