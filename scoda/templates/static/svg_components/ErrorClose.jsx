import React from 'react'

export const ErrorClose = ({close}) => {
  return (<div onClick={()=>{close()}}>
    <svg  width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L13 13M13 1L1 13" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
</svg>
  </div>

  )
}
