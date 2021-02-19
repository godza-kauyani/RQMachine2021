import quotes from 'quotesy'
import styled from 'styled-components'
import {useState} from 'react'


const QuoteEdit =()=>{
const [quote , setQuote] = useState(()=>{
  return quotes.random()
})
const getQuote = ()=>{
  setQuote(quotes.random())
}
  return (
    <div id="quote-box">
     <h1>Godza</h1>
    </div>
    )
}
export default QuoteEdit;
