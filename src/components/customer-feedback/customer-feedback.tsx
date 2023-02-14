import { FC, Fragment } from 'react';
import { CustomerFeedbackList } from '../feedback-results/feedback-results';

import './customer-feedback.styles.scss';

type CustomerFeedbackItemProps = {
  feedback: CustomerFeedbackList;
};

const CustomerFeedback: FC<CustomerFeedbackItemProps> = ({feedback}) => {
  const { email, comment } = feedback;
  
  return (
    <Fragment>
      <div className='Customer--feedback'>
        <div className='Customer--email'>{email}</div>
        <div className='Customer--comments'>{comment}%</div>
        <hr />
      </div>
    </Fragment>
  );
};

export default CustomerFeedback;