import { Fragment, Key } from 'react';
import { useAppSelector } from '../../store/hooks';
import { ReactComponent as InfoIcon} from '../../assets/info-icon.svg';
import { selectFeedbackList } from '../../store/rating/rating.selector';
import { CustomerFeedbackList } from '../feedback-results-comments/feedback-results-comments';
import HorizontalBarGraph from '../horizontal-bar-graph/horizontal-bar-graph';

import { FormAlertInfo, FormAlertIcon } from '../feedback-results-comments/feedback-results-comments.styles';
import { FormOverallRating } from './feedback-result-graph.styles';

export type CustomerRatings = {
  id: Key;
  barColour: string;
  label: string;
  startTime: string;
  percentage: string;
};

const ratings: CustomerRatings[] = [
  {id: 5, barColour: '#64b2d1', label: '5 star', startTime: '0.1s', percentage: '0'},
  {id: 4, barColour: '#5292ac', label: '4 star', startTime: '0.2s', percentage: '0'},
  {id: 3, barColour: '#407286', label: '3 star', startTime: '0.3s', percentage: '0'},
  {id: 2, barColour: '#2e515f', label: '2 star', startTime: '0.4s', percentage: '0'},
  {id: 1, barColour: '#1d333b', label: '1 star', startTime: '0.5s', percentage: '0'},
];

const setStarRatingsCount = (feedbackList: Array<CustomerFeedbackList>) => {
  let starRatingsCount = new Array(5).fill(0);
  
  feedbackList.map((feedback: any) => {
    const starIndex = parseInt(feedback.rating) - 1;
    starRatingsCount[starIndex]++;
  });
  return starRatingsCount.reverse();
};

const calculateRatingsTotal = (feedbackList: Array<CustomerFeedbackList>) => {
  let ratingTotal = 0;
  feedbackList.map((feedback: any) => {
    ratingTotal+=parseInt(feedback.rating);
  });
  const average = (ratingTotal / feedbackList.length) || 0;
  const total = Number.isInteger(average) ? average : average.toFixed(2);
  return total;
};

const FeedbackResultsGraph = () => {
  const feedbackList: Array<CustomerFeedbackList> = useAppSelector(selectFeedbackList);

  const starRatings = setStarRatingsCount(feedbackList);
  const totalStarRating = calculateRatingsTotal(feedbackList);

  const percentage = (rating: number) => {
    return (rating / feedbackList.length * 100).toFixed(0);
  }

  starRatings.forEach((stars: number, index: number) => {
    const ratingPercentage = percentage(stars);
    ratings[index].percentage = ratingPercentage;
  });
  
  return (
    <Fragment>
      <section>
        {
          feedbackList.length > 0 && 
          <FormOverallRating>
            <span>Overall Rating: </span> 
            {totalStarRating} out of 5
          </FormOverallRating>
        }
        {
          feedbackList.length ? (ratings.map(rating => 
            <HorizontalBarGraph key={rating.id} rating={rating} />)
          ) : (
            <FormAlertInfo>
              <FormAlertIcon>
                <InfoIcon />
              </FormAlertIcon>
              No ratings yet!
            </FormAlertInfo>
          )
        }
      </section>
    </Fragment>
  );
};

export default FeedbackResultsGraph;