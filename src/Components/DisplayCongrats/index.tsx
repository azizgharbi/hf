import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const StyledCongratsText = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  animation: ${bounce} 2s infinite;
`;

interface CongratsTextProps {
	text: string;
}
const CongratsText = (props: CongratsTextProps) => {
	const { text } = props;
	return <StyledCongratsText>{text}</StyledCongratsText>;
};

export default CongratsText;
