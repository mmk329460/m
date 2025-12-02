import React from 'react'
import Card from './Cmponents/card'

const App = () => {
  return (
    <div className='parent'>
      
      <div className='car'>
        <h1>WELCOME MY PAGE</h1>
      </div>

      <div className="card">
        <img src="https://i.pinimg.com/474x/51/51/cd/5151cd36e805777f86ec63d580c4c173.jpg" alt="" />
        <h1 className="m">Mithlesh kumar</h1>
        <h1>my life is best </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
        
      </div>
      
      <Card user='saurabh kumar' use='login' img='https://t3.ftcdn.net/jpg/07/51/04/18/240_F_751041839_YYbC5i4UQi4xmHuNlxFv8c573NzcMF27.jpg'  /> <br />

      <Card  user='prince kumar'  use='summit' img='https://t4.ftcdn.net/jpg/15/67/38/65/240_F_1567386570_7t31E9Uaiqgix00QDM6GDqlx1JhjkzPI.jpg'  />
      <Card  user='Amit kumar' use='search' img='https://media.istockphoto.com/id/460674827/photo/mumbai-harbour-taj-mahal-palace-hotel-and-gateway-of-india.jpg?s=2048x2048&w=is&k=20&c=4_BU33-lbwDoaPBarqV1Geq7tKRx4pVqic7cNeo6v8c='  />
      <Card  user='vikash kumar' use='profile' img='https://img.freepik.com/free-photo/butterfly-wild_53876-90199.jpg' />
      <Card  user='Nitish kumar' use='register' img='https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon73-1266810.jpg&fm=jpg' /> 
      <Card  user= 'pankaj kumar' use= ' profile' img='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=' />

      <Card img='https://img.freepik.com/free-photo/butterfly-wild_53876-90199.jpg'  />
    </div>
  
  )
}

export default App
     