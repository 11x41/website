import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from '../public/media/js/react/reducers'
import App from '../public/media/js/react/components/App'


storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Website', module)
  .add('ToDo', () => {
    const store = createStore(todoApp)
    const TodoApp = () => (
        <MuiThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </MuiThemeProvider>
    );
    return (<TodoApp/>);
  });
