import React from 'react'

function ClassesCard({title, desc, img, price, schedule}) {
  return (
    <div className='border-greenPrimary rounded-xl w-[250px] flex flex-col justify-between items-center gap-3'>
      <h2 className='text-center text-4xl font-bold'>{title}</h2>
      <h3 className='text-2xl font-semibold text-gray-700'>{desc}</h3>
      <img src={img} alt="" className='w-full' />
      <p className='text-lg font-medium'>Price: Rs{price}</p>
      <p className='text-lg font-medium'>Schedule: {schedule}</p>
    </div>
  )
}

export default ClassesCard
