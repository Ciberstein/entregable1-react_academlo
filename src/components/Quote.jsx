import React from 'react'

export const Quote = ({ colorRand, quoteRand }) => {
  return (
    <>
        <div className='div__quote'>
            <div className='icon__quote'>
                <i className='fas fa-quote-left' style={{ color: colorRand }}></i>
            </div>
            <div>
                <p className='quote' style={{ color: colorRand }}>{quoteRand.quote}</p>
                <h4 className='quote__author' style={{ color: colorRand }}><i>{quoteRand.author}</i></h4>            
            </div>
        </div>
    </>
  )
}
