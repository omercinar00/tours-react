import React from 'react';
import Tour from './Tour';
const Tours = ({ data, setData }) => {

  return (
  <div>
    
    {data.map((item)=>{
      return(
          <Tour key={item.id} item={item} />
      )
    })} 
    
  </div>
  )
};

export default Tours;
