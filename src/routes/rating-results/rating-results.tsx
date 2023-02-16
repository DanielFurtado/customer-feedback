import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import FeedbackResults from '../../components/feedback-results/feedback-results';

const RatingResults = () => {
  return (
    <Fragment>
      <main className='Main--container'>
        <FeedbackResults />
      </main>
      <Outlet />
    </Fragment>
  );
};

export default RatingResults;
