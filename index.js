/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { name as appName } from './app.json';


import Root from './src/storybook.index'
import 'storybook/rn-addons.js'

addDecorator(withKnobs)
AppRegistry.registerComponent(appName, () => Root);