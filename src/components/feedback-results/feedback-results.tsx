import { Key } from 'react';
import HorizontalBarGraph from '../horizontal-bar-graph/horizontal-bar-graph';
import CustomerFeedback from '../customer-feedback/customer-feedback';

import './feedback-results.styles.scss';

export type CustomerRatings = {
  id: Key;
  barColour: string;
  label: string;
  startTime: string;
  percentage: string;
};

export type CustomerFeedbackList = {
  id: Key;
  email: string;
  comment: string;
};

const ratings: CustomerRatings[] = [
  {id: 1, barColour: '#64b2d1', label: '5 star', startTime: '0.1s', percentage: '100'},
  {id: 2, barColour: '#5292ac', label: '4 star', startTime: '0.2s', percentage: '50'},
  {id: 3, barColour: '#407286', label: '3 star', startTime: '0.3s', percentage: '10'},
  {id: 4, barColour: '#2e515f', label: '2 star', startTime: '0.4s', percentage: '5'},
  {id: 5, barColour: '#1d333b', label: '1 star', startTime: '0.5s', percentage: '1'},
];

const feedbacks: CustomerFeedbackList[] = [
  {id: 1, email: 'test1@email.com', comment: 'Comment 1 this is cool!'},
  {id: 2, email: 'test2@email.com', comment: 'Comment 2 this is cool!'},
  {id: 3, email: 'test3@email.com', comment: 'Comment 3 this is cool!'},
  {id: 4, email: 'test4@email.com', comment: 'Comment 4 this is cool!'},
  {id: 5, email: 'test5@email.com', comment: 'Comment 5 this is cool!'},
];

const FeedbackResults = () => {
  return (
    <div className='Feedback--results'>
      <h1>Feedback Results</h1>
      <section className='Bar--graph-horizontal Bar--graph-one'>
        {ratings.length ? (
          ratings.map((rating) => <HorizontalBarGraph key={rating.id} rating={rating} />)
        ) : (
          <div>No ratings yet!</div>
        )}
      </section>
      <h1>Latest Comments</h1>
      <section className='Feedback--comments'>
        {feedbacks.length ? (
            feedbacks.map((feedback) => <CustomerFeedback key={feedback.id} feedback={feedback} />)
          ) : (
            <div>Be the first to submit feedback!</div>
          )}
      </section>
    </div>
  );
};

export default FeedbackResults;