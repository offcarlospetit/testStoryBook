import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Select from './Select';

const options = [
  { value: '1', text: 'Solo una vez' },
  { value: 'S', text: 'Semanal' },
  { value: 'M', text: 'Mensual' },
  { value: 'U', text: 'Último día hábil del mes' }
];

test('Select component should render correctly selected', () => {
  render(
    <Select          
      options={options}
      selectedValue="1"
      setSelectedValue={() => null}
    />,
  );
});
