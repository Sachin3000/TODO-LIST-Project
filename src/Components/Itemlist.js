import React from 'react'

const Itemlist = ({items,HandleChange,HandleDelete}  ) => {
  return (
    <ul>
            {
                items.map(item =>(
                <li className='item' key={item.id}>
                    <input 
                    type='checkbox'
                    onChange={()=>HandleChange(item.id)}
                    checked={items.checked}
                    />
                    <label >{item.item}</label>
                    <button onClick={()=>HandleDelete(item.id)}>delete</button>
                    
                </li>
                ))
                }
            </ul>
  )
}

export default Itemlist