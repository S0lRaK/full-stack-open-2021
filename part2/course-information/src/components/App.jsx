// @ts-ignore
import reactLogo from '../icons/react-logo.svg'
// @ts-ignore
import viteLogo from '../icons/vite-logo.svg'
import './App.css'

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const Header = ({ text }) => <h1 className='title'>{text}</h1>

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  )
}

const Part = ({ part: { name, exercises } }) => (
  <p className='padding-sides'>
    {name}: {exercises}
  </p>
)

const Total = ({ parts }) => {
  const totalExercises = parts.reduce(
    (total, part) => total + part.exercises,
    0
  )

  return (
    <>
      <p className='padding-sides total'>Total of {totalExercises} exercises</p>
    </>
  )
}

const Footer = () => (
  <footer className='position--bottom'>
    <span>Made with</span>
    <img src={viteLogo} className='logo' alt='Vite logo' />
    <span>+</span>
    <img src={reactLogo} className='logo logo--spin' alt='React logo' />
  </footer>
)

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return (
    <>
      <Course course={course} />
      <Footer />
    </>
  )
}

export default App
