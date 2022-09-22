import React from 'react'

const MenuBar = () => {
  return (
    <div>
    <div>
        <nav className='menu-container'>
            
            <div className='menu-list'>
                <a href="/" className='list-1'>Abstract |</a>
                <a href="/" className='list-2'>Help Center</a>
            </div>
            
            <div className='menu-button'>
                <button className='btn-1'>Submit a Request</button>
                <button className='btn-2'>Sign In</button>
            </div>
                
         </nav>
         
            
    </div>
    
    
    </div>
  )
}

export default MenuBar