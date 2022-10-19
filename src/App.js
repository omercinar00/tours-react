import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'


function App() {
  const [data, setData] = useState([])

  const axiosTours = async ()=>{
    try {
      const response = await axios(url);
      setData(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    axiosTours()
  }, [])
  console.log(data)
  return <div>
    <Tours data={data} setData={setData}/>
  </div>
}

export default App
