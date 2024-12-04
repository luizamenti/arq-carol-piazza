import styled from "styled-components";

export const Container = styled.div`
  height: calc(97vh - 59px);
  width: 100%;
  display: flex; /* Optional: Center image */
  justify-content: center; /* Optional: Center image horizontally */
  align-items: center; /* Optional: Center image vertically */
  overflow: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
