import React from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import myContext from  '../../../../components/context/myContext.jsx'

const Ebook = () => {

  const context = useContext(myContext)
  const {allEbook} = context

  return (
    <div className='w-full h-full bg-white shadow-lg p-3' >
      <div className='flex justify-end p-5' >
       <Link to={"/addebookform"}> <button className='button w-32 h-14' >Add Ebook</button></Link>
      </div>

      <div className='flex flex-wrap gap-3' >
        {allEbook.map((book)=>(
           <Card key={book._id} img={book.thumbnail} id={book._id} type={"ebooks"} />
        ))}
       
        
      
      </div>

      </div>
  )
}

export default Ebook