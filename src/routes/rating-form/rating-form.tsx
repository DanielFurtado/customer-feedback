import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from '../../App.styles';
import FeedbackForm  from '../../components/feedback-form/feedback-form';

const RatingForm = () => { 
  return (
    <Fragment>
      <MainContainer>
        <FeedbackForm />
      </MainContainer>
      <Outlet />
    </Fragment>
  );
};

export default RatingForm;
