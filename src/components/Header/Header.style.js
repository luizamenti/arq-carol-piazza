import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.terracota};
  padding: 0.5rem 8rem 0 8rem;

  p {
    color: ${({ theme }) => theme.colors.ivory};
  }
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

export const BotaoWhats = styled.div`
  width: 30px;
`;

export const WhatsImage = styled.img`
  width: 25px;
`;

export const ContactButton = styled.button`
  border: ${({ theme }) => `1.5px solid ${theme.colors.ivory}`};
  border-radius: 2px;
  background-color: unset;
  padding: 6px 9px;
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0.1rem 0 0.4rem 0 !important;
`;
