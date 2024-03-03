import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'
import '../responsive/navBarResponsive.css'

function HotAccessories({music,musicCover,smartDeviceCover,smartDevice,home,homeCover,lifeStyle,lifeStyleCover,mobileAccessories,mobileAccessoriesCover}) {
  return (
    <div className='HotAccessories'>

        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="cover" />
        </div>

        {/* 2nd div */}
        <div>
            {music && music.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {smartDevice && smartDevice.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {home && home.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {lifeStyle && lifeStyle.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

            {mobileAccessories && mobileAccessories.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}

<HotItemCard image="https://www.cancelcancerafrica.org/wp-content/uploads/2016/03/PaddedImage225160-view-more.png" />            
        </div>
      
    </div>
  )
}

export default HotAccessories
