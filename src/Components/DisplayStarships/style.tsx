// StyledComponents.tsx
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
