import React from 'react'

function Navbar() {
  return (
    <>
      <div className='p-3 top-0 left-0 m-0 bg-grayDark text-white shadow-md flex flex-row justify-around items-center gap-8'>
        <div>
            {/* logo */}
            <a href="">
                <h1 className='text-4xl'>
                    YogaLife
                </h1>
            </a>
        </div>
        <div className='flex justify-between items-center gap-5'>
            <div>About</div>
            <div>Online Classes</div>
            <div>Contact</div>
        </div>
        <div>
            Login 
        </div>
      </div>
    </>
  )
}

export default Navbar
