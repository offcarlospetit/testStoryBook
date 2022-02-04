import React from 'react';

import {text, array, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import Contact from './Contact';
import Container from '../container/Container';

const logoStories = storiesOf('Molecules/Contact', module);

logoStories.addDecorator(withKnobs);

logoStories
  .addDecorator(story => <Container>{story()}</Container>)
  .add('contact Avatar', () => (
    <Contact
      title="RL"
      size={40}
      contactName="Example  Name"
      alias="Example  Name"
      accounts={['Example  Name']}
    />
  ))
  .add('contact flex', () => (
    <Contact
      title={text('title', 'NN')}
      contactName={text('name', 'Sir You')}
      alias={text('alias', 'You')}
      accounts={array('account', ['1234'])}
    />
  ))
  .add('contact person icon', () => <Contact contactName="" accounts={[]} />);
