import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
      <>
          <div className='relative z-10 w-[100%] h-full'>
              <div className='w-full h-[60px] text-black bg-[#ccc] flex justify-center items-center'>
                  <Link to="/" className='text-black text-lg font-medium' style={{fontFamily:"'Mr Dafoe', cursive"}}>WikiTrailblazer</Link></div>
              <Outlet />
          </div>
      </>
  )
}

export default Header