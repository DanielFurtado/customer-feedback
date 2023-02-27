import { StarRatingWrapper, Star } from './star-rating.styles';

const StarRating = (props: any) => { 
  const { rating } = props;
  const stars = [...Array(5)];
  
  return (
    <StarRatingWrapper title={`${rating} out of 5 stars`}>
      {stars.map((star, index) => {
        index += 1;
        const starSetting = index <= rating ? 'on': 'off';
        return (
          <Star key={index} className={`Star--rating ${starSetting}`}>
            <span className='star'>&#9733;</span>
          </Star>
        );
      })}
    </StarRatingWrapper>
  );
};

export default StarRating;
