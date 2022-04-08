import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function HomePageComponent() {
    
  return (

    <div style={{backgroundColor: "lightblue"}}>
     
      <Carousel>
	 
      <div>
				<img src="https://autovista24.autovistagroup.com/wp-content/uploads/sites/5/2021/09/GettyImages-1325838855-1024x585.jpg "alt='backimg' style={{height:"600px"}}/>
      	         <p className="legend">Car Charging</p>
			</div>
			<div>
				<img src="https://as2.ftcdn.net/v2/jpg/04/96/72/57/1000_F_496725738_rLoyzy9qGeTUkqCVn5D7pW7ZA5ONiyiC.jpg" alt="Singapore" style={{height:"600px"}}/>
				<p className="legend"></p>
			</div>
			
			<div>
				<img src="https://www.planinsurance.co.uk/wp-content/uploads/2021/11/AdobeStock_219077951x-1024x585.jpg" alt="Las Vegas"style={{height:"600px"}}/>
				<p className="legend">Las Vegas</p>
			</div>
      <div>
				<img src="https://www.onmanorama.com/content/dam/mm/en/news/business/images/2021/8/28/electric-car-2.jpg.transform/onm-articleimage/image.jpg" alt="Japan"style={{height:"600px"}}/>
				<p className="legend">Japan</p>
			</div>
      <div>
				<img src="https://www.kbb.com/wp-content/uploads/2020/09/electric-car-charging.jpg?resize=1024,576" alt="Japan"style={{height:"600px"}}/>
				<p className="legend">Japan</p>
      </div>
	  
  </Carousel>
</div>

  )
}

export default HomePageComponent