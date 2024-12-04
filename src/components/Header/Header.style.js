import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.terracota};
  padding: 0.5rem 3rem 0 3rem;
`;

export const LogoLink = styled(Link)`
  padding: 0.3rem 0 0.7rem 0;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const LinksMenu = styled.div`
  display: flex;
  justify-content: center;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 90px;
`;

export const BotaoWhats = styled.div``;
