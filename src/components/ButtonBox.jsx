import React from 'react'

export const ButtonBox = ({ handleClick, colorRand }) => {
  return (
    <button onClick={handleClick} className='box__btn' style={{ backgroundColor: colorRand }}><i className='fas fa-chevron-right'></i></button>
  )
}
