import React from 'react'
import { Carousel } from 'react-responsive-carousel';



let styles = {
  margin: 'auto',
  height:'600px',
  width: '800px'
};

const HomePage = () => {
  const myStyle={
    
    width:'20%',
    height:'200px',
    };
    
  return (


    <div className='homePage'>
      
       <h1 style={{color:'whitesmoke',fontFamily:'cursive',textAlign:'center'}}><i class="bi bi-plug-fill" style={{marginRight:'3px'}}></i>EV Charging Assistance </h1>
      
    </div>

  )
}

export default HomePage