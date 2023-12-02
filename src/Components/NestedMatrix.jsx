import React from 'react'

const NestedMatrix = () => {
  return (
    <>
        {/*nested matrix */}
        <div className='flex flex-wrap w-[9rem] h-[9rem]'>
          {/*nested Cell*/}
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
          <div className='bg-yellow-700 w-[3rem] h-[3rem] border-[1px] border-blue-700'></div>
        </div>
    </>
  )
}

export default NestedMatrix