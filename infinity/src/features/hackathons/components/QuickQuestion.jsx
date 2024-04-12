import React from 'react'
import { useState } from 'react';


const QuickQuestion = () => {
    const [activeQusetionId, setActiveQuestionId]= useState(null);
    const handleAnswertToggle= (questionId)=>{
        if(questionId==activeQusetionId){
          setActiveQuestionId(null);
        }
        else{
          setActiveQuestionId(questionId);
        }
    }
  return (
    <div className='w-full mx-5 rounded-md'>
       <div className='mx-5 rounded-md my-10'>
                <div><p className='text-3xl text-dark-blue font-semibold'>Frequently Asked Questions</p></div>
                <ul className='py-3 ml-5'>
                  <li key="q1" onClick={()=>handleAnswertToggle("q1")} className='text-dark-blue my-2 text-lg'>What is a hackathon?
                      <div className={activeQusetionId=== "q1" ? "" : "hidden"}><p className='text-sm text-black font-normal ml-5'>A hackathon is a coding marathon where teams create software or hardware solutions </p></div>
                  </li>
                  <li key="q2" onClick={()=>handleAnswertToggle("q2")} className='text-dark-blue my-2 text-lg'>Do I need coding skills for the hackathon?
                      <div className={activeQusetionId=== "q2" ? "" : "hidden"}><p className='text-sm text-black font-normal ml-5'>No, you don't necessarily need coding skills for a hackathon! While coding is a valuable asset in many hackathons, many roles contribute to a successful team</p></div>
                  </li>
                  <li key="q3" onClick={()=>handleAnswertToggle("q3")} className='text-dark-blue my-2 text-lg'>Can I go to a hackathon with no experience?
                      <div className={activeQusetionId=== "q3" ? "" : "hidden"}><p className='text-sm text-black font-normal ml-5'>Absolutely! Hackathons are a fantastic opportunity for people of all experience levels, even those with no prior experience.</p></div>
                  </li>
                  <li key="q4" onClick={()=>handleAnswertToggle("q4")} className='text-dark-blue my-2 text-lg'>Do companies hire from hackathons?
                      <div className={activeQusetionId=== "q4" ? "" : "hidden"}><p className='text-sm text-black font-normal ml-5'>Yes, companies absolutely hire from hackathons! Hackathons have become a popular recruitment tool</p></div>
                  </li>
                  <li><a href="#" className='text-md font-bold text-dark-blue'>Other Questions</a></li>
                </ul>
                
              </div>
    </div>
  )
}

export default QuickQuestion
