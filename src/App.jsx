import { useState } from 'react'
import './App.css'
import { QuoteBox } from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const randomElementFromArray = arr => {
    const indexRand = Math.floor( Math.random() * arr.length )
    return arr[indexRand]
  }

  const [quoteRand, setQuoteRand] = useState(randomElementFromArray(quotes))
  const [colorRand, setColorRand] = useState(randomElementFromArray(colors))

  const handleClick = () => {
    setQuoteRand(randomElementFromArray(quotes))
    setColorRand(randomElementFromArray(colors))
  }

  return (
    <div style={{ backgroundColor: colorRand }} className="App">
      <QuoteBox 
        quoteRand={quoteRand}
        colorRand={colorRand}
        handleClick={handleClick}
      />
    </div>
  )
}

export default App
