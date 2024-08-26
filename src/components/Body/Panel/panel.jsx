import React from 'react'

const Panel = () => {
  return (
    <div className='p-1 m-2 w-1/2 border-2 min-h-[60vh]  border-blue-600 rounded-md'>
      <div className="title flex gap-2 items-center">
      <h1 className="font-bold text-3xl text-blue-500 my-2 mx-1 p-2">Daily Goals</h1>
      <i class="fa-solid fa-fire font-bold text-3xl text-blue-500 my-2 p-1"></i>
      </div>
      <div className="daily-txt w-full mx-2 p-2">
        <div className="exercise font-bold text-lg">Schedule:  </div>
        <div className="calories font-bold text-lg">Calories Burned: </div>
      </div>
    </div>
  )
}

export default Panel
