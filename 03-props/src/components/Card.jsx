import React from 'react'

const Card = (props) => {
  console.log(props.age);
    console.log(props.user);

  

  return (
    <div>
      <div className='card'>
        <img src={props.img} alt=''/>
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos placeat cupiditate</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card
