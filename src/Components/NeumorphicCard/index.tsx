import styled from "styled-components";

const NeumorphicCard = styled.div`
font-size: 24px;

.flip-card {
  width: 250px;
  height: 250px;
  margin: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card-button{
  margin-bottom: 20px;
  background-color: #8f4385;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid #8f4385;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}

.flip-card-front {
  background-color: '#f0f0f0';
  color: #1abfc8;
}

.flip-card-back {
  transform: rotateY(180deg);
  color: #1abfc8;
}
`;

export default NeumorphicCard;
