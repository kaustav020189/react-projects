import styled from "styled-components";

export const Clock = styled.div`
  border: 2px solid orangered;
  border-radius: 50%;
  height: 400px;
  width: 400px;
  position: relative;
`;

export const HourHand = styled.div`
  width: 5px;
  height: 5px;
  background: #999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 135px;
    width: 5px;
    background: #999;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const MinuteHand = styled.div`
  width: 5px;
  height: 5px;
  background: green;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 165px;
    width: 3px;
    background: green;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SecondHand = styled.div`
  width: 5px;
  height: 5px;
  background: goldenrod;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  transform: rotate(${(p) => p.rotation}deg);
  &:after {
    content: "";
    height: 175px;
    width: 2px;
    background: goldenrod;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
