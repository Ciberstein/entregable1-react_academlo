import React from 'react'
import { ButtonBox } from './ButtonBox'
import { Quote } from './Quote'

export const QuoteBox = ({ quoteRand, handleClick, colorRand }) => {
  return (
    <article className='box'>
        <Quote 
            colorRand={colorRand} 
            quoteRand={quoteRand} 
        />
        <ButtonBox 
            handleClick={handleClick} 
            colorRand={colorRand}
        />
    </article>
  )
}
