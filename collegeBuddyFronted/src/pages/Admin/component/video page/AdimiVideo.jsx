import React, { useContext } from 'react'
import myContext from '../../../../components/context/myContext'
import { Link } from 'react-router-dom';
import VideoCard from '../Add Video/VideoCard';

const AdimiVideo = () => {

  const context = useContext(myContext)

  const {getAllVideo} = context;


  return (
    <div className='w-full h-full bg-white shadow-lg p-3 '>
       <div className='flex justify-end p-5' >
       <Link to={"/addvideoform"} >
       <button className='button p-3 ' >Add Video</button>
       </Link>
      </div>

      <div className='flex flex-wrap gap-3' >
      {getAllVideo?.length > 0 ? (
        getAllVideo.map((item) => (
          <VideoCard id={item._id} url={item.videoLink} key={item._id} />
        ))
      ) : (
        <h1>Not have any video, sorry 🤔🤩🤗</h1>
      )}
       
      </div>
    </div>
  )
}

export default AdimiVideo