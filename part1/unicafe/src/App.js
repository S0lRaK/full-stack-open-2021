import { useState } from 'react'
import './App.css'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button className="button" onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <section>
        <Header text="Give your feedback" />
        <Button
          handleClick={() => setGood(good + 1)}
          text="good"
        />
        <Button
          handleClick={() => setNeutral(neutral + 1)}
          text="neutral"
        />
        <Button
          handleClick={() => setBad(bad + 1)}
          text="bad"
        />
      </section>
      <section>
        <Header text="Statistics" />
        <p>
          Good: {good} <br />
          Neutral: {neutral} <br />
          Bad: {bad}
        </p>
      </section>
    </>
  )
}

export default App
