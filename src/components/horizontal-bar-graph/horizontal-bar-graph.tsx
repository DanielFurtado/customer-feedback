import { FC, Fragment } from 'react';
import { CustomerRatings } from '../feedback-results-graph/feedback-results-graph';

import {
  BarWrapper,
  BarLabel,
  BarPercentage,
  BarRatingContainer,
  HorizontalBar,
} from './horizontal-bar-graph.styles';

type BarGraphItemProps = {
  rating: CustomerRatings;
};

const HorizontalBarGraph: FC<BarGraphItemProps> = ({rating}) => {
  const { barColour, label, startTime, percentage } = rating;
  
  return (
    <Fragment>
      <BarRatingContainer>
        <BarLabel>{label}</BarLabel>
        <BarWrapper>
          <HorizontalBar 
            barColour={barColour} 
            startTime={startTime} 
            percentage={percentage}
          ></HorizontalBar>
        </BarWrapper>
        <BarPercentage>{percentage}%</BarPercentage>
      </BarRatingContainer>
    </Fragment>
  );
};

export default HorizontalBarGraph;