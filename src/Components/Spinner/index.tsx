import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 4px solid #8f4385;
  margin-bottom: 5px;
  border-radius: 50%;
  border-top-color: #83716221;
  animation: ${spin} 0.8s ease-in-out infinite;
`;

export default Spinner;
