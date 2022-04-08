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


    <div style={styles}>
       <div id="#car1"class="carousel slide" data-bs-ride="carousel" data-bs-interval='100'
        data-bs-pause="false">
      <Carousel>
      <div>
				<img src='../public/Images/4.jpg' alt='backimg' style={{height:"600px"}}/>
      	<p className="legend">Car Charging</p>
			</div>
			<div>
				<img src="../public/Images/3.jpg" alt="Singapore" style={{height:"600px"}}/>
				<p className="legend"></p>
			</div>
			
			<div>
				<img src="../public/Images/2.jpg" alt="Las Vegas"style={{height:"600px"}}/>
				<p className="legend">Las Vegas</p>
			</div><div>
				<img src="../public/Images/1.jpg" alt="Japan"style={{height:"600px"}}/>
				<p className="legend">Japan</p>
			</div>
      <div>
				<img src="../public/Images/bg.jpg" alt="Japan"style={{height:"600px"}}/>
				<p className="legend">Japan</p>
			</div>

           <button type="button" class="carousel-control-prev" data-bs-target="#car1" data-bs-slide="prev">               
                <i class="bi bi-arrow-left-circle-fill"></i>
            </button>
            <button type="button" class="carousel-control-next" data-bs-target="#car1" data-bs-slide="next">                
                <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
            <div className='carousel-indicators'>
                <button type="button" data-bs-target="#car1" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#car1" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#car1" data-bs-slide-to="2"></button>
            </div>

    </Carousel>
   </div> 
</div>

  )
}

export default HomePage