import React from 'react';
import { storiesOf} from '@storybook/react-native';
import Select from './Select';
import Container from '../container/Container';

const logoStories = storiesOf('Molecule/Select', module);

const options = [
  { value: '1', text: 'Solo una vez' },
  { value: 'S', text: 'Semanal' },
  { value: 'M', text: 'Mensual' },
  { value: 'U', text: 'Último día hábil del mes' }
];

logoStories
  .addDecorator((story) => <Container style={{ paddingVertical: 200, backgroundColor: '#fff'}}>{story()}</Container>)
  .add('Select', () =>
    <Select
      options={options}
      selectedValue="1"
      setSelectedValue={() => null}
    />,
  )
