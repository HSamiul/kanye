import ReactDOM from 'react-dom';
import './index.css';
import { getKanyeQuote } from '../src/api/kanye'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Kanye(): JSX.Element {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    async function fetchData() {
      const quote = await getKanyeQuote()
      setQuote(quote)
    }
    fetchData()
  }, [])

  return (
    <div className="kanye">
      <span>{quote}</span>
    </div>
  )
}

ReactDOM.render(
  <Kanye></Kanye>,
  document.getElementById('root')
);