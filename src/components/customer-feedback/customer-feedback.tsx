import { FC, Fragment } from 'react';
import { CustomerFeedbackList } from '../feedback-results-comments/feedback-results-comments';
import StarRating from '../star-rating/star-rating';
import { 
  CustomerComments, 
  CustomerEmail, 
  CustomerName,
  CustomerSeparator 
} from './customer-feedback.styles';

type CustomerFeedbackItemProps = {
  feedback: CustomerFeedbackList;
};

const CustomerFeedback: FC<CustomerFeedbackItemProps> = ({feedback}) => {
  const { comment, email, name, rating } = feedback;

  return (
    <Fragment>
      <CustomerName>{name}</CustomerName>
      <CustomerEmail>{email}</CustomerEmail>
      <StarRating rating={rating} />
      <CustomerComments>{comment}</CustomerComments>
      <CustomerSeparator><hr/></CustomerSeparator>
    </Fragment>
  );
};

export default CustomerFeedback;