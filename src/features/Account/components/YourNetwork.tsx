import React from 'react'
import FollowersInfoComponent from './FollowersInfoComponent'

const YourNetwork = () => {
  return (
    <div className='border px-5 py-3'>
        {/* here we are going to define the FOllowers and the person folllinwg */}
        <div>
            <div className='text-3xl font-bold'>Your Network</div>
            <hr  className='my-5'/>
            <div className='flex space-x-5'>   
                <button className='px-2 border py-1 bg-blue-500 rounded-sm'>Following</button>
                <button className='px-2 border py-1 bg-blue-500 rounded-sm'>Followers</button>
                <button className='px-2 border py-1 bg-blue-500 rounded-sm'>Blocked</button>
            </div>
            <p className='font-gray-400 text-sm  mt-2'>You are Following 79 persons</p>
            <div>
                {/* here we are going to define the followers and the following and the blocked users */}
                <FollowersInfoComponent />
                <FollowersInfoComponent />
                <FollowersInfoComponent />
                <FollowersInfoComponent />

                <FollowersInfoComponent />

            </div>
            
        </div>
    </div>
  )
}

export default YourNetwork
