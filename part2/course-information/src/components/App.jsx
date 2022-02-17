// @ts-ignore
import reactLogo from '../icons/react-logo.svg'
// @ts-ignore
import viteLogo from '../icons/vite-logo.svg'
import './App.css'

const Course = ({ name, parts }) => {
  return (
    <>
      <Header text={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

const Title = ({ text }) => <h1 className='title'>{text}</h1>

const Header = ({ text }) => <h2 className='header'>{text}</h2>

const Content = ({ parts = [] }) => {
  if (typeof parts === 'undefined' || parts.length === 0) {
    return <p>No content</p>
  }

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
  const courses = [
    {
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        }
      ]
    }
  ]

  return (
    <>
      <Title text='Web development curriculum' />
      {courses.map((course) => (
        <Course key={course.id} name={course.name} parts={course.parts} />
      ))}
      <Footer />
    </>
  )
}

export default App
