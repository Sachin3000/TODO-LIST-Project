import React from 'react'
import Itemlist from './Itemlist'

const Contents = ({items,HandleChange,HandleDelete})=> {
    
  return (
    <main>
        {(items.length)?(
            <Itemlist
            items={items}
            HandleChange={HandleChange}
            HandleDelete={HandleDelete}
            />
            
        ):(<p className='empty'>your list is empty</p>)
        }

    </main>
    
  )
}

export default Contents