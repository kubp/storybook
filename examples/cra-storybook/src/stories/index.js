import React from 'react';
import { storiesOf, action, getStorybook } from '@kadira/storybook';
import Button from './Button';
import { WithNotes } from '../notes-addon';
import ReactDOMServer from 'react-dom/server'

storiesOf('Button1', module)
  .add('with text', () => (
      <Button onClick={action('clicked')}>Hello Button 1</Button>
  ))
  .add('with some emojies', () => (
      <Button onClick={action('clicked')}>😀 😎 👍 💯 1</Button>
  ));



  storiesOf('Button2', module)
    .add('with text 2', () => (
        <Button onClick={action('clicked')}>1</Button>
    ))
    .add('with some emojies 2', () => (
        <Button onClick={action('clicked')}>2</Button>
    ));



    const styles ={
      all: {
        background: 'rgb(230,230,230)',
        borderRadius: '4px'
      }
    };



    const myStories = getStorybook();

    for (var i = 0; i < myStories.length; i++) {
      let stories = []
      let note = ReactDOMServer.renderToStaticMarkup(React.createElement(
        "div",
         {},
        stories
      ))

      for (var j = 0; j < myStories[i].stories.length; j++) {
        stories.push(React.createElement(myStories[i].stories[j].render))
      }

      storiesOf(myStories[i].kind, module).add('All', () => (
        React.createElement(
          WithNotes,
          {notes: note},
          React.createElement(
            "div",
             {style: styles.all},
            stories
          )
      )
      ))
    }
