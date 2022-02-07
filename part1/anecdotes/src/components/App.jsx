import { useState } from 'react'
// @ts-ignore
import reactLogo from '../icons/react-logo.svg'
// @ts-ignore
import viteLogo from '../icons/vite-logo.svg'
// @ts-ignore
import triangleUpIcon from '../icons/triangle-up-icon.svg'
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

const Heading2 = ({ text }) => <h2 className='heading-2'>{text}</h2>

const Quote = ({ text }) => (
  <blockquote className='blockquote'>
    {Array.isArray(text) ? (
      <p className='quote'>{text[0]}</p>
    ) : (
      <p className='quote'>{text}</p>
    )}
  </blockquote>
)

const Vote = ({ votes, setVotes, selected }) => {
  const upVote = () => {
    const newVotes = { ...votes }
    newVotes[selected] = votes[selected] + 1
    setVotes(newVotes)
  }

  return (
    <div className='votes'>
      <ButtonIcon
        handleClick={upVote}
        icon={triangleUpIcon}
        a11yText='Upvote'
      />
      <VoteNum votes={votes} selected={selected} />
    </div>
  )
}

const VoteNum = ({ votes, selected }) =>
  Array.isArray(selected) ? (
    <span className='votes__num'>{selected[1]}</span>
  ) : (
    <span className='votes__num'>{votes[selected]}</span>
  )

const ButtonIcon = ({ handleClick, icon, a11yText }) => (
  <button className='button' onClick={handleClick}>
    <img src={icon} alt='Arrow up icon' className='button--icon' />
    <span className='screen-reader screen-reader--focusable'>{a11yText}</span>
  </button>
)

const ButtonText = ({ handleClick, text }) => (
  <button
    className='button button--text position--center'
    onClick={handleClick}
  >
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
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  })

  const randomizeAnecdote = () => {
    const anecdote = Math.floor(Math.random() * ANECDOTES.length)
    setSelected(anecdote)
    const maxVotes = Object.entries(votes).reduce((max, vote) =>
      max[1] > vote[1] ? max : vote
    )
  }

  const getAnecdoteMostVotes = () => {
    const maxVotes = Object.entries(votes).reduce((max, vote) =>
      max[1] > vote[1] ? max : vote
    )
    return [ANECDOTES[maxVotes[0]], maxVotes[1]]
  }

  const isVotesEmpty = () =>
    Object.keys(votes).every((vote) => votes[vote] === 0)

  return (
    <>
      <Title text='Anecdote of software engineering' />
      <div className='vote-anecdote'>
        <Vote votes={votes} setVotes={setVotes} selected={selected} />
        <Quote text={ANECDOTES[selected]} />
      </div>
      <section>
        <Heading2 text='Most voted anecdote' />
        <div className='vote-anecdote'>
          {isVotesEmpty() ? (
            <p>No votes registered yet</p>
          ) : (
            <>
              <VoteNum votes={votes} selected={getAnecdoteMostVotes()} />
              <Quote text={getAnecdoteMostVotes()} />
            </>
          )}
        </div>
      </section>
      <ButtonText handleClick={randomizeAnecdote} text='Randomize' />
      <Footer />
    </>
  )
}

export default App
