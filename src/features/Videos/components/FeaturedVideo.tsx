import React from 'react'
import image from '../../../assets/images/hackathon.png'

interface VideoProps{
  title: string;
  summary: string;
  url:string;
  tags: string[];
}

const FeaturedVideo:React.FC<VideoProps> = ({title, summary, url, tags}) => {
  return (
    <div className='mt-2'>
    <div className="h-auto w-[250px] flex justify-center">
      <div className="mx-3 my-3">
        {/* First card */}
        <div className="hover:bg-blue-200 w-full bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#" className=" w-full overflow-hidden">
            <img className="rounded-t-lg object-contain" src={image} alt="error" />
          </a>
          <div className="p-1 flex">
           <div className='mt-1'>
                <img src={image} alt="" className='w-[30px] h-[30px] rounded-full bg-black'/>
           </div>
           <div className='ml-2'>
                <a href="#">
                        <h5 className=" xl:text-lg lg:text-md text-sm font-medium text-gray-600 dark:text-white">{title}</h5>
                </a>
                <p className=" text-sm font-normal text-gray-800 dark:text-gray-400">{summary}</p>    
                <div className='flex'>
                  <div className='font-medium text-gray-500'>Tags:</div>
                  <div className='flex text-xs space-x-1 text-gray-600 mt-1.5 ml-2'>
                    {tags?.map((tag,index)=>(
                      <div key={index}>{tag}</div>
                    ))}
                  </div>
                </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default FeaturedVideo;