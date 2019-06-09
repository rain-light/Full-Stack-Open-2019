import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header heading={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
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

const Content = (props) => (
    <>
    <p>
        {props.part} {props.exercise}
    </p>
    </>
);

const Total = (props) => {
    const total = props.exercises.reduce((acc, curr) => acc + curr);
    return (
        <p>Number of exercises {total}</p>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))