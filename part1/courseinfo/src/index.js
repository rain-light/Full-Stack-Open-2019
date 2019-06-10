import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

/** Actually, I had completed both 1.1 and 1.2 without knowing.
 * Making the "Content" component a smaller one which rendered
 * every part on its own appeared the most reasonabole choice
 * to me. This comment is for a second commit.
 */

const Header = (props) => (
    <>
        <h1>{props.heading}</h1>
    </>
);

/** Course explicitly says we DO NOT have to go through the arrays
 * using loops. So from there I'll always assume there will be 3
 * objects inside the array, as advised.
 */

const Content = (props) => (
  <>
    <p>
      {props.parts[0].name} {props.parts[0].exercises}
    </p>
    <p>
      {props.parts[1].name} {props.parts[1].exercises}
    </p>
    <p>
      {props.parts[2].name} {props.parts[2].exercises}
    </p>
  </>
);

const Total = (props) => {
    const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    return (
        <p>Number of exercises {total}</p>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))