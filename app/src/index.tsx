import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import './index.css';

import { getKanyeQuote } from '../src/api/kanye'

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
      <span><span style={{color: "#FFD369"}}> Kanye says: </span>{quote}</span>
    </div>
  )
}

type SnippetProps = {
  description: string,
  status: string,

}

function Snippet(props: SnippetProps): JSX.Element {
  return (
    <div className="snippet">
      {props.description}<br/>
      {props.status}
    </div>
  )
}


ReactDOM.render(
  <Kanye></Kanye>,
  document.getElementById('root')
);