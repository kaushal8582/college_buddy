import React, { useEffect } from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import myContext from '../../../../components/context/myContext'


const StudyMaterial = () => {

  const context = useContext(myContext);
  const {allStudyMaterial} = context

  useEffect(()=>{
    console.log(allStudyMaterial);
    
  },[])

  return (
    <div className='w-full h-full bg-white shadow-lg p-3 '>
       <div className='flex justify-end p-5' >
       <Link to={"/addstudymaterialform"} >
       <button className='button p-3 ' >Add Study Material</button>
       </Link>
      </div>

      <div className='flex flex-wrap gap-3' >
        {allStudyMaterial.map((material)=>(
          <Card img={material.thumbnail} id={material._id} key={material._id} type={"studymaterial"} />
        ))}
      
      </div>
    </div>
  )
}

export default StudyMaterial