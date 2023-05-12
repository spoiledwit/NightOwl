import React from 'react'

const EmptyState = () => {
  return (
    <div
    className='
    px-4
    py-10
    sm:px-6
    lg:px-8
    h-full
    flex
    items-center
    justify-center
    bg-bgClr 
    '
    >
        <div className='text-center items-center flex flex-col'>
                <h3 className='
                mt-2
                text-2xl
                font-semibold
                text-fuchsia-500
                '>
                    Join the nocturnal chatter! Select a chat or start a new one.
                </h3>
        </div>
    </div>
  )
}

export default EmptyState;