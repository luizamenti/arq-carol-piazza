import styled from "styled-components";
import { Link } from "react-router-dom";

export const PhotoLink = styled(Link)`
  width: 50%;
  height: 300px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;
`;

export const PhotoBox = styled.div`
  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(6, 37, 56, 0.5); */
    background-color: rgba(#ae503f);
    backdrop-filter: blur(4px); /* Adjust blur intensity */
    z-index: 1;
  }

  &:hover span {
    opacity: 1;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* color: white; Adjust text color */
    color: ${({ theme }) => theme.colors.ivory};
    font-size: 1.5rem; /* Adjust text size */
    opacity: 0;
    z-index: 2;
    transition: opacity 0.3s ease;
  }
`;
