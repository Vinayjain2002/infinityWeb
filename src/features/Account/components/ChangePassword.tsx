import React from 'react'

const ChangePassword = () => {
  return (
    <div className='w-full'>
      <div className=' rounded-md px-10 py-3'>
        <div>
            <p className='text-4xl font-semibold'>Change your Password</p>
            <p className='text-md text-gray-500 mt-3'>Passwords must be strong</p>
        </div>
        <hr className='my-5' />

        <div>
            <div>
                <p className='text-2xl font-semibold my-3 text-gray-900'>Create new Password</p>
            </div>

            <div className='mt-5'>
              <div className='mt-3'>
                  <div className='text-md font-semibold text-gray-800'><label>Old Password</label></div>
                  <div className='ml-3 mt-2'><input type="password" className='border-2 w-full border-gray-200 focus:border-gray-400 rounded-md focus:border-1 py-1 px-5 text-dark-blue focus:outline-none' ></input></div>
              </div>
              <div className='mt-3'>
                  <div className='text-md font-semibold text-gray-800'><label>New Password</label></div>
                  <div className='ml-3 mt-2'><input type="password" className='border-2 w-full border-gray-200 focus:border-gray-400 rounded-md focus:border-1 py-1 px-5 text-dark-blue focus:outline-none' ></input></div>
              </div>
              <div className='mt-3'>
                  <div className='text-md font-semibold text-gray-800'><label>Confirm Password</label></div>
                  <div className='ml-3 mt-2'><input type="password" className='border-2 w-full border-gray-200 focus:border-gray-400 rounded-md focus:border-1 py-1 px-5 text-dark-blue focus:outline-none' ></input></div>
              </div>
            </div>
        </div>

        {/* we are gonna to define the two buttons ie the button to save or cancel */}
        <div className='mt-5 space-x-10'>
            <button className='px-3 py-2 border rounded-sm bg-blue-500'>Save Changes</button>
            <button className='px-3 py-2 border rounded-sm bg-gray-500'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
