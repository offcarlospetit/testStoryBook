import React from 'react';
import { AirbnbRating, TapRatingProps} from 'react-native-elements';

export interface RatingProps extends TapRatingProps {}

const Rating: React.FC<RatingProps> = (props) => {
    const { count, reviews, defaultRating, size, onFinishRating, ...rest } = props;

    return (
      
        <AirbnbRating
          {...rest}
          count={count}
          reviews={reviews}
          defaultRating={defaultRating}
          size={size}
          onFinishRating={onFinishRating}
          />
    );
  };
  
  export default Rating;