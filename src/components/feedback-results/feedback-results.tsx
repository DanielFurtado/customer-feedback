import { useNavigate } from 'react-router-dom';
import FeedbackResultsGraph from '../feedback-results-graph/feedback-results-graph';
import FeedbackResultsComments from '../feedback-results-comments/feedback-results-comments';
import { FeedbackResultsControl, FeedbackResultsStyled } from './feedback-results.styles';
import { ButtonPrimary } from '../../App.styles';

const FeedbackResults = () => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate('/');

  return (
    <FeedbackResultsStyled>
      <FeedbackResultsControl>
        <h2>Feedback Results</h2>
        <ButtonPrimary type='button' onClick={onNavigateHandler}>
          Write a review
        </ButtonPrimary>
      </FeedbackResultsControl>
      <FeedbackResultsGraph />
      <FeedbackResultsComments />
    </FeedbackResultsStyled>
  );
};

export default FeedbackResults;