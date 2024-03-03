import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import '../responsive/navBarResponsive.css'

function Bannner({banner}) {
  return (
    <Carousel fade>
     {banner.end.map((item,index)=>(
        <CarouselItem key={item.image} id='banner' interval={1000} >
            <img
className="d-block w-100 "
id="bannerImage"
src={item.image}
alt={`${index} banner`}
/>
<Carousel.Caption className='text'>
<h3>{item.name}</h3>
<p>{item.description}</p>
<p>{item.source}</p>
<u>Read more</u>
</Carousel.Caption>

        </CarouselItem>
     ))}   
    </Carousel>
  )
}

export default Bannner
