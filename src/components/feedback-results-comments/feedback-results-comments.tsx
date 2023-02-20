import { Fragment, Key } from 'react';
import CustomerFeedback from '../customer-feedback/customer-feedback';
import { useAppSelector } from '../../store/hooks';
import { selectFeedbackList } from '../../store/rating/rating.selector';
import { ReactComponent as InfoIcon} from '../../assets/info-icon.svg';
import { FormAlertInfo, FormAlertIcon } from './feedback-results-comments.styles';

export type CustomerFeedbackList = {
  id: Key;
  name: string;
  email: string;
  rating: number;
  comment: string;
};

const FeedbackResultsComments = () => {
  const feedbackList: CustomerFeedbackList[] = useAppSelector(selectFeedbackList);

  return (
    <Fragment>
      <h3>Latest Comments</h3>
      <section>
        {feedbackList.length ? (
          feedbackList.map((feedback: any) => 
            <CustomerFeedback key={feedback.id} feedback={feedback} />)
        ) : (
          <FormAlertInfo>
            <FormAlertIcon>
              <InfoIcon />
            </FormAlertIcon>
            Be the first to submit your feedback.
          </FormAlertInfo>
        )}
      </section>
    </Fragment>
  );
};

export default FeedbackResultsComments;