import styled, { css, keyframes } from 'styled-components';

/* Modified version from reference -> https://codepen.io/anythinggraphic/pen/LYPeaQV */

export const BarGraphHorizontal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BarWrapper = styled.div`
  flex: 1;
  border: 1px solid rgb(12, 17, 66);
  border-radius: 4px;
  overflow: hidden; 
`;

export const BarLabel = styled.div`
  width: 46px;
`;

export const BarPercentage = styled.div`
  margin-left: 5px;
  width: 42px;
`;

export const BarRatingContainer = styled.div`
  display: flex;
  margin: 5px 0;
  width: 100%;
`;

const bar = (barColour: string, keyframeNum: any, startTime: string) => css`
  background-color: ${barColour};
  -webkit-animation: ${keyframeNum} 1.2s ${startTime} forwards;
  -moz-animation: $showBar 1.2s ${startTime} forwards;
  animation: $showBar 1.2s ${startTime} forwards;  
`;

const setHorizontalBar = ({ percentage = '0', barColour = '#64b2d1', startTime = '0.1s'}) => {
  const horizontalBarAnimation = keyframes`
    0% { width: 0; }
    100% { width: ${percentage}%; }
  `;

  return css`
    ${bar(barColour, horizontalBarAnimation, startTime)};
    border-radius: 0;
    height: 25px;
    overflow: hidden;
    position: relative;
    width: 0;
  `;
};

export const HorizontalBar = styled.div`
  ${setHorizontalBar}
`;
