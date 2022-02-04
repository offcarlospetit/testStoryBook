import React from 'react';
import { storiesOf} from '@storybook/react-native';
import Rating from './Rating';


const logoStories = storiesOf('Atoms/Rating', module);


logoStories
  .add('Rating', () => <Rating  count={5} 
                                reviews={[]}
                                defaultRating={3} 
                                size={30}
                                onFinishRating={(rating)=> console.log(rating)}
                                />)
