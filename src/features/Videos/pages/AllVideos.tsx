import React from 'react'
import NavBar from '../../../components/navBars/NavBar'
import Footer from '../../../components/navBars/Footer'
import VideoNavBar from '../components/VideoNavBar'
import SearchBarComponent from '../../../components/SearchBar/SearchBarComponent'
import VideoCardComponents from '../components/FeaturedVideo'
import { videosData } from '../data/data'
import FeaturedVideo from '../components/FeaturedVideo'

const AllVideos = () => {
  return (
    <div>
      <NavBar />
      <div>
        <VideoNavBar />
      </div>
      <div>
        {/* here weare going to define the conponent of the Body Section */}
        <div className=" mx-3 md:mx-10 lg:mx-15 my-5"> 
            <SearchBarComponent  text='Search Videos' btnText='Search'/>
        </div>
        <div className='w-full h-auto flex flex-row justify-center flex-wrap py-5 '>
          {/* we are gonna to define the cards of the video review */}
          {
            videosData!= undefined && (videosData.map((video,index)=>(
              <FeaturedVideo key={index} title={video.title} summary={video.summary} url={video.url} tags={video.tags} />
            )))
          }

        </div>
        </div>
      <Footer />
    </div>
  )
}

export default  AllVideos;
