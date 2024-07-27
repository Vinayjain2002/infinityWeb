import React from 'react'
import InputFields from './InputFieldComponent'

const EditAccount = () => {
  return (
    <div>
       <div>
            <p className='font-semibold text-3xl my-5 ml-10 font-gray-600'>Account and Privacy</p>
        </div> 
        <hr />
        <div className='ml-10'>
            <div className='my-4 text-2xl font-gray-400  font-semibold'>
                <p>Account</p>          
            </div>                   
            <InputFields labelName="Email"/>
            <InputFields labelName= "UserName"/>
           <InputFields labelName= "Mobile No"/>
            <div className='flex flex-row my-5 space-x-4'>
                <label className='font-semibold text-dark-blue text-lg'>Want to collaborate:</label>
                <div className='flex flex-row space-x-5'>
                    <div className=''>
                        <input type="radio" id="yes" name="answer" value="yes" />
                        <label className='pl-2 text-dark-blue font-semibold text-sm' htmlFor="yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="no" name="answer" value="no"  />
                        <label className='pl-2 text-dark-blue font-semibold text-sm' htmlFor="yes">No:</label>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='text-2xl font-semibold font-gray-600'>Social Network</p>
            </div>
            <InputFields labelName="Linked In" />
           <InputFields labelName="Github"/>

           {/* now we are going to define the full and the final Soltion ie the Save Changes and the Delete Account */}
           <div className='flex flex-row space-x-5 mt-5'>
                <button className='px-3 py-2 border bg-blue-500 rounded-md text-white font-semibold'>Save Changes</button>
                <button className='px-5 py-2 border bg-gray-500 rounded-md text-white font-semibold'>Cancel</button>
           </div>
           <div className='mt-4 text-lg font-red'>
                <a href="#">Delete Account</a>
           </div>
        </div>
    </div>
  )
}

export default EditAccount
