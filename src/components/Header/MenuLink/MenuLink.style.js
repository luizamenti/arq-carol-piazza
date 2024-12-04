import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  margin-bottom: -2px !important;
  border-bottom: ${({ active }) =>
    active ? `0.3rem solid ${theme.colors.ivory} !important` : ""};

  p {
    color: ${({ theme }) => theme.colors.ivory};
    margin-bottom: 5px !important;
  }
`;

export const BotaoWhats = styled.div``;
