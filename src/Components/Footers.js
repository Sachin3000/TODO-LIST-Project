import React from 'react'

const Footers = ({length})=> {
  
  return (
    <div className='footer'>{length} List {length===1?"item":"Items"}</div>
  )
}

export default Footers