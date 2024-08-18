import React from 'react'
import Card from '../../Card/Card'
import { useContext } from 'react'
import myContext from '../../../../../components/context/myContext'
import { Link } from 'react-router-dom'



const AddTeam = () => {

  const context = useContext(myContext);
  const {getAllTeam} = context;

  return (
    <div className='w-full h-full bg-white shadow-lg p-3 '>
       <div className='flex justify-end p-5' >
       <Link to={"/addteamform"} >
       <button className='button p-3 ' >Add Team Member</button>
       </Link>
      </div>

      <div className='flex flex-wrap gap-3' >
        {getAllTeam?.map((item)=>(
          <Card img={item.profilePic} id={item._id} type={"team"} key={item._id} />
        ))}
      
      </div>
    </div>
  )
}

export default AddTeam


