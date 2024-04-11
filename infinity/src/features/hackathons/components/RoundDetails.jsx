import React from 'react'

const RoundDetails = () => {
  return (
    <div>
      <div className='border bg-white rounded-md px-3 py-2 mt-1'>
            <div>
                <div className='flex justify-between'>
                        <div className='text-md text-gray-800 font-semibold'>Idea Submission and Presentation Round</div>
                        <div className='px-1 text-sm border bg-blue-100'>On Stop</div>
                </div>

                <div className='mt-2'>
                      <p className='text-sm text-gray-500'>Prepare a presentation based on the provided format/template DownloadTemplate
                          Submit and present your PowerPoint presentation online.
                            This presentation should effectively communicate your project idea, solution, and how it addresses the selected problem statement.
                      </p>
                </div>
                <div className='flex flex-row mt-2 space-x-5'>
                    <div className='flex flex-col'>
                        <p className='text-sm text-gray-700 font-semibold '>Start Date</p>
                        <p className='text-sm text-gray-500'>Date</p>
                    </div>
                <div></div>
                <div className=''>
                    <p className='text-sm text-gray-700 font-semibold'>End Date</p>
                    <p className='text-sm text-gray-500'>Date</p>
                </div>
            </div>
        </div>
     </div>  
    </div>
  )
}

export default RoundDetails
