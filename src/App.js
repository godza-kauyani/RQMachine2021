import {useState} from 'react'
import quotes from 'quotesy'
import './App.css'
import styled from 'styled-components'


function App() {
  const[quote,setQuote] = useState(()=>{
    return quotes.random()
  })
  function getQuotes(){
    setQuote(()=>{
      return quotes.random()
    })
  }
  return (
    <div id='quote-box'>
      <p id='text'>{quote.text}</p>
      <p id='author'>{quote.author}</p>
      <button id='new-quote' onClick={getQuotes}>New Quote</button>
      <a href='twitter.com/intent/tweet' id='tweet-quote'/>
    </div>

  );
}

export default App;
