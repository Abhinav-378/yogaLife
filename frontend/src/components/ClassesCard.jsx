import React, { useState } from 'react';
import zoom from "../assets/zoomLogo.jpg"
import accPaym from "../assets/accPaym.jpg"
function ClassesCard({ title, desc, img, price, schedule, batchType }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      {/* Card */}
      <div className='border-greenPrimary border-2 rounded-xl w-[300px] flex flex-col justify-between gap-3'>
        <img src={img} alt={title} className='w-full h-[180px] object-cover rounded-t-xl' />
        <h2 className='text-center text-4xl font-bold'>{title}</h2>
        <h3 className='text-lg font-semibold text-gray-500 px-4'>{desc}</h3>
        <p className='text-lg font-medium px-6'>Price: Rs {price}</p>
        <p className='text-lg font-medium px-6  mb-4'>Schedule: {schedule}</p>
        <div
          onClick={toggleModal}
          className='cursor-pointer mx-auto bg-orange-400 p-2 text-lg text-white rounded-2xl w-[80%] text-center mb-4 hover:bg-orange-500'
        >
          Book a Spot
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50'
          onClick={toggleModal} // Close modal on background click
        >
          {/* Modal Content */}
          <div
            className='bg-white rounded-lg p-6 w-[90%] max-w-6xl relative flex flex-col md:flex-row'
            onClick={(e) => e.stopPropagation()} // Prevent background click from closing the modal
          >
            <div className='w-full md:w-[70%]'>
              <h2 className='text-2xl font-bold mb-2'>{title}</h2>
              <h3 className='text-lg font-medium text-gray-600 mb-2'>{desc}</h3>

              <div className='mt-5 md:mt-12'>
                <p className='text-lg font-semibold md:text-xl'>About the class:</p>
                <ul class="list-disc pl-6 space-y-2 md:text-base">
                  <li>Learn foundational and advanced yoga postures to improve flexibility and strength.</li>
                  <li>Practice breathing exercises (Pranayama) to enhance mental clarity and relaxation.</li>
                  <li>Experience guided meditation sessions to reduce stress and promote mindfulness.</li>
                  <li>Customized sessions for all skill levels, from beginners to advanced practitioners.</li>
                  <li>Join interactive live classes over Zoom with certified and experienced yoga instructors.</li>
                </ul>

              </div>

              <div className='my-8 border-2 p-2 w-fit border-dashed border-blue-200 rounded-2xl'>
                <div className='flex gap-3 items-center text-lg'>
                  <img src={zoom} alt="" className='h-12' />
                  <p>Video call</p>
                </div>
                <p className='text-gray-700 text-base'>
                  Joining link and password will be shared to you after booking
                </p>
              </div>

              <div className='mb-3'>
                <p className='text-lg md:text-xl font-semibold'>Batch Type:</p>
                <p className='text-gray-700 text-base'> {batchType} </p>
              </div>

            </div>
            <div className='w-full md:w-[30%] flex flex-col justify-between'>
              <div>
              <img src={img} alt={title} className='w-full h-[150px] object-cover rounded-md mb-4' />

              <p className='text-lg font-medium'>Batch timings and schedule:</p>

              <p className='text-gray-700 my-2'>{schedule}</p>

              </div>
              {/* Payment Button */}
              <div className='mt-4'>
                <img src={accPaym} alt="" className='w-full my-3'/>
                <p className='text-lg font-medium mb-4'>Total Payable Amount: Rs {price}</p>
                <button
                  className='w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-lg'
                  onClick={() => alert('Redirecting to payment...')}
                >
                  Pay Now →
                </button>
              </div>
            </div>



            {/* Close Button */}
            <button
              onClick={toggleModal}
              className='absolute top-0 right-0 text-gray-900 px-[6px] rounded bg-opacity-40 bg-red-200 text-xl hover:text-white hover:bg-red-500 transition-colors delay-50 '
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ClassesCard;
