import React from 'react'

const ProjectCard = () => {
  return (
    <div className='mt-3 border rounded-md px-5 py-3'>
      <div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <div className='flex justify-between'>
                <div className='text-xl font-semibold'>Infinity</div>
                <div className='text-sm text-gray-500'>date</div>
            </div>
            <div className='mt-1'>
                <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ullam mollitia ex praesentium ipsum, fugiat numquam in et necessitatibus quas aliquid at corporis alias ad, distinctio fugit sint. Libero, error ipsa? Minus, aliquid laborum molestias quidem, recusandae reprehenderit dolorum iusto ea corrupti possimus doloremque voluptas tenetur saepe voluptatem dolor eos?</p>
            </div>
            <div className='flex justify-between mt-2'>
                <div><p className='text-sm font-semibold'>FLutter , firebase ...</p></div>
                <div className='text-sm font-semibold'><a href="">Git repo</a></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
