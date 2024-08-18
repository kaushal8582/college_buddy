import React, { useState } from 'react'
import SearchPYQ from '../component/SearchPYQ'
import Layout from '../../../components/layout/Layout'
import ShowPyq from '../component/ShowPyq'

const Pyqquestion = () => {

  const [findedPyq,setFindedPyq] = useState('')
  
  return (
    <Layout>
      <SearchPYQ setFindedPyq={setFindedPyq} />
      <ShowPyq findedPyq={findedPyq} />
    </Layout>
  )
}

export default Pyqquestion