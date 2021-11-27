import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import './index.css';

import { getKanyeQuote } from '../src/api/kanye'
import React from 'react';

type navItem = {
  text: string
  link: string
}

function NavigationBarItem(props: navItem): JSX.Element {
  return (
    <a className = "navigationBarItem" href={props.link}>
      {props.text}
    </a>
  )
}

function NavigationBar(): JSX.Element {
  return (
    <div className="navigationBar">
      <nav>
        <NavigationBarItem text="github" link="https://github.com/HSamiul"></NavigationBarItem>
        <NavigationBarItem text="instagram" link="https://www.instagram.com/sami_hoq/"></NavigationBarItem>
        <NavigationBarItem text="spotify" link="https://open.spotify.com/user/l9zr32khe8ejqere54nvb66aa"></NavigationBarItem>
        <NavigationBarItem text="idiot" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></NavigationBarItem>
      </nav>
    </div>
  )
}

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
      <span style={{paddingInlineEnd: 30}} >{props.description}</span>
      <span style= {{color: "#9AE66E"}}>{props.status}</span>
    </div>
  )
}

function SnippetGroup(): JSX.Element {
  return (
    <div className="snippetGroup">
      <Snippet description="tweepy listens for messages sent to a Discord channel and tweets them" status="Complete"></Snippet>
      <Snippet description="type-tac-toe is a typescript translation of the React.js interactive webpage tutorial" status="In progress"></Snippet>
    </div>
  )
}

function App(): JSX.Element {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Kanye></Kanye>
      <SnippetGroup></SnippetGroup>
    </div>
  )
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);