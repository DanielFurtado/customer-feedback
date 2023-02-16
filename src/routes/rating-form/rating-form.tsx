import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import FeedbackForm  from '../../components/feedback-form/feedback-form';

const RatingForm = () => {
  return (
    <Fragment>
      <main className='Main--container'>
        <FeedbackForm />
      </main>
      <Outlet />
    </Fragment>
  );
};

export default RatingForm;
