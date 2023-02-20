import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import FeedbackResults from '../../components/feedback-results/feedback-results';
import { MainContainer } from '../../App.styles';

const RatingResults = () => {
  return (
    <Fragment>
      <MainContainer>
        <FeedbackResults />
      </MainContainer>
      <Outlet />
    </Fragment>
  );
};

export default RatingResults;
