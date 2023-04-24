import styled, { keyframes } from "styled-components";

const stretchDelay = keyframes`
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
  }
`;

interface NeumorphicLoaderProps {
	bgColor?: string;
	lightShadowColor?: string;
	darkShadowColor?: string;
}

const NeumorphicLoaderWrapper = styled.div<NeumorphicLoaderProps>`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Line = styled.div`
  background-color: #8f4385;
  width: 8px;
  height: 100%;
  transform-origin: 50% 100%;
  animation: ${stretchDelay} 1.2s infinite ease-in-out;
`;

const NeumorphicLoader: React.FC<NeumorphicLoaderProps> = (props) => {
	return (
		<NeumorphicLoaderWrapper {...props}>
			<Line style={{ animationDelay: "-1.1s" }} />
			<Line style={{ animationDelay: "-1.0s" }} />
			<Line style={{ animationDelay: "-0.9s" }} />
		</NeumorphicLoaderWrapper>
	);
};

export default NeumorphicLoader;
