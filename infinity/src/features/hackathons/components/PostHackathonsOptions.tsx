import React from 'react'
import PostHackthonOptionsCard from './PostHackthonOptionCard'

const PostHackathonsOptions = () => {
  return (
    <div className='mt-20'>
      {/* here we are gonna to deifne the options to the user what type o the hackthons he wished to psot on the platforms */}
        <div className='mt-5'>
            <div className='w-full flex flex-col items-center'>
                <p>Start Your Hackathon Today</p>
                <p className='text-3xl my-2'>What kind of hackathon do you want to run?</p>
                <div className='mt-5 flex flex-row justify-evenly w-2/3  space-x-5 py-5'>
                    <PostHackthonOptionsCard />
                    <PostHackthonOptionsCard />
                    <PostHackthonOptionsCard />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostHackathonsOptions
