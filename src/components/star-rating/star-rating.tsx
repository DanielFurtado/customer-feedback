import { useState } from "react";
import './star-rating.styles.scss';

const StarRating = (props: any) => { 
  const stars = [...Array(5)];
  const [hover, setHover] = useState(0);
  
  const handleClick = (index: number) => {
    props.setStarRating(index);
  }

  return (
    <div className="Star--rating">
      {stars.map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`Star--button ${index <= (hover || props.rating) ? "Star--button-on" : "Star--button-off"}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(props.rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
