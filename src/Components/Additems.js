import React from 'react'

const Additems = ({newItem,setNewitem,handleSubmit}) => {
  return (
    <form className='addform' onSubmit={handleSubmit}>
        <label htmlFor='additems'>Add Item</label>
        <input 
            type='text'
            autoFocus
            id='additems'
            placeholder='ADD ITEMS'
            required
            value={newItem}
            onChange={(e)=>setNewitem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='additems'>
            submit
            </button>
    </form>
  )
}

export default Additems