import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header heading={course} />
      <Content part={part1.name} exercise={part1.exercises} />
      <Content part={part2.name} exercise={part2.exercises} />
      <Content part={part3.name} exercise={part3.exercises} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
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