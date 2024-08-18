import React, { useEffect, useState } from 'react'
import profilePic from "../../../../assets/resources/img/kaushal img2.png"
import { json } from 'react-router-dom'

const AdminProfile = () => {

  // const[user,setUser] = useState(null)

  // useEffect(()=>{
  //   const data = JSON.parse(localStorage.getItem("user"))
  //   console.log(data.data);
  // },[])

  return (
    <div className='w-full  h-full flex items-center justify-center gap-20 max-md-xs:gap-10 max-md-xs:pl-4 ' >
      <div className='w-[200px] h-[200px] max-md-xs:w-[130px] max-md-xs:h-[130px]   rounded-full border-2 border-[#153D50] p-1 ' >
        <img src={profilePic} alt="profile pic" className='w-full h-full  ' />
      </div>
      <div>
        <h1 className='text-3xl font-bold' >Kausahl Kumar</h1>
        <p>kaushal@gmail.com</p>
        <p>+91 8582063716</p>
        <p>+91 98944365469</p>
      </div>
    </div>
  )
}

export default AdminProfile