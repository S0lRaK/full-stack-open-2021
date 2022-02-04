import { useState } from 'react'
import './App.css'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button className='button' onClick={handleClick}>
    {text}
  </button>
)

const StatisticsEmptyMsg = () => <p>No feedback given yet</p>

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ goodVotes: good, neutralVotes: neutral, badVotes: bad }) => {
  const total = good + neutral + bad
  // calculate average score (good: 1, neutral: 0, bad: -1)
  const average =
    total === 0
      ? 0
      : ((good - bad) / total).toFixed(2)
  // calculate positive feedback percentage
  const positivePercentage =
    total === 0
      ? 0
      : ((good / (good + neutral + bad)) * 100).toFixed(2)

  return (
    <section>
      <Header text='Statistics' />
      {total === 0
        ? <StatisticsEmptyMsg />
        : <table className='table'>
          <tbody>
            <StatisticLine text='Good' value={good} />
            <StatisticLine text='Neutral' value={neutral} />
            <StatisticLine text='Bad' value={bad} />
            <StatisticLine text='Total' value={total} />
            <StatisticLine text='Average' value={average} />
            <StatisticLine text='Positive' value={positivePercentage} />
          </tbody>
        </table>
      }
    </section>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <section>
        <Header text='Give your feedback' />
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
      </section>
      <Statistics goodVotes={good} neutralVotes={neutral} badVotes={bad} />
    </>
  )
}

export default App
