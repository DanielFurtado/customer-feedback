import { FC, Fragment } from 'react';
import { CustomerFeedbackList } from '../feedback-results-comments/feedback-results-comments';
import { 
  CustomerComments, 
  CustomerEmail, 
  CustomerSeparator 
} from './customer-feedback.styles';

type CustomerFeedbackItemProps = {
  feedback: CustomerFeedbackList;
};

const CustomerFeedback: FC<CustomerFeedbackItemProps> = ({feedback}) => {
  const { email, comment } = feedback;
  
  return (
    <Fragment>
      <CustomerEmail>{email}</CustomerEmail>
      <CustomerComments>{comment}</CustomerComments>
      <CustomerSeparator><hr/></CustomerSeparator>
    </Fragment>
  );
};

export default CustomerFeedback;