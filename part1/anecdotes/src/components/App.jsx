import { useState } from 'react'
// @ts-ignore
import reactLogo from '../images/react-logo.svg'
// @ts-ignore
import viteLogo from '../images/vite-logo.svg'
import './App.css'

const ANECDOTES = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
]

const Title = ({ text }) => <h1 className='title'>{text}</h1>

const Quote = ({ text }) => (
  <blockquote>
    <p className='quote'>{text}</p>
  </blockquote>
)

const Button = ({ handleClick, text }) => (
  <button className='button position--center' onClick={handleClick}>
    {text}
  </button>
)

const Footer = () => (
  <footer className='position--bottom'>
    <img src={viteLogo} className='logo' alt='Vite logo' />
    <img src={reactLogo} className='logo logo--spin' alt='React logo' />
  </footer>
)

const App = () => {
  const [selected, setSelected] = useState(0)

  const randomizeAnecdote = () => {
    const anecdote = Math.floor(Math.random() * ANECDOTES.length)
    setSelected(anecdote)
  }

  return (
    <>
      <Title text='Anecdote of software engineering' />
      <Quote text={ANECDOTES[selected]} />
      <Button handleClick={randomizeAnecdote} text='Randomize' />
      <Footer />
    </>
  )
}

export default App
