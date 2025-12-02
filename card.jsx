import React from 'react'

const card = (props) => {
  console.log();
  return (
   <div className="card">
        <img src={props.img} alt="" />
        <h1 className="m">{props.user}</h1>
        <h1>my life is best </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>{props.use}</button>
        
      </div>
  )
}

export default card
