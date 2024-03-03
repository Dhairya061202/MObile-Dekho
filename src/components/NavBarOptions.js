import React from 'react'
import NavOptionCard from './NavOptionCard'
import '../styles/NavBarOptions.css'

function NavBarOptions({miPhones,redmiPhones,laptop,tv,audio,vivoPhones,samsungPhone}) {
  return (
    <div className='navBarOptions'>
        <div>
            {miPhones && miPhones.map((item,index)=>(
                <NavOptionCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {redmiPhones && redmiPhones.map((item,index)=>(
                <NavOptionCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {laptop && laptop.map((item,index)=>(
                <NavOptionCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {tv && tv.map((item,index)=>(
                <NavOptionCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {audio && audio.map((item,index)=>(
                <NavOptionCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {vivoPhones && vivoPhones.map((item,index)=>(
                <NavOptionCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {samsungPhone && samsungPhone.map((item,index)=>(
                <NavOptionCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}
        </div>
    </div>
  )
}

export default NavBarOptions
