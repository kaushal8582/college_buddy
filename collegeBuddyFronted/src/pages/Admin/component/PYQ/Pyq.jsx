import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import myContext from '../../../../components/context/myContext'
import Pyqcardshow from './Pyqcardshow'


const Pyq = () => {

  const context = useContext(myContext)
  const {allPyq} = context

  useEffect(()=>{
    console.log(allPyq);
    
  },[allPyq])

  return (
    <div className='w-full h-full bg-white shadow-lg p-3'>
      <div className='flex justify-end p-5' >
        <Link to={"/addpyqform"}>
        <button className='button w-32 h-14' >Add PYQ</button></Link>
        
      </div>

      <div className='flex flex-wrap gap-3' >
        {allPyq.map((pyq)=>(
          <Pyqcardshow course={pyq.courseName} id={pyq._id} sem={pyq.semester} university={pyq.universityName} year={pyq.year} key={pyq._id} />
        ))}
      
      </div>
    </div>
  )
}

export default Pyq