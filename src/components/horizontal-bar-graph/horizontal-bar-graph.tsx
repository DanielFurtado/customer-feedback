import { FC, Fragment } from 'react';
import { CustomerRatings } from '../feedback-results/feedback-results';

import './horizontal-bar-graph.styles.scss';

type BarGraphItemProps = {
  rating: CustomerRatings;
};

const HorizontalBarGraph: FC<BarGraphItemProps> = ({rating}) => {
  const { barClass, label, percentage } = rating;
  
  return (
    <Fragment>
      <div className='Bar--rating-container'>
        <div className='Bar--label'>{label}</div>
        <div className='Bar--wrapper'>
            <div className={barClass}>
              <div className='Bar'></div>
            </div>
        </div>
        <div className='Bar--percentage'>{percentage}%</div>
      </div>
    </Fragment>
  );
};

export default HorizontalBarGraph;