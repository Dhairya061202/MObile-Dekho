import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



function Slider({start}) {
  return (
    <Carousel utoPlay interval="1000" transitionTime="1000" showThumbs={false} showStatus={false}>
        <div>
            <img src="https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif" alt="first" />

                    
        </div>
        <div>
            <img src="https://i02.appmifile.com/615_operator_in/05/07/2021/a4b26d6b2ad2d6d2edbfb23a8482328e.jpg" alt='second' />
                    
        </div>
        <div>
            <img src= "https://i02.appmifile.com/762_operator_in/05/07/2021/4c90dda893b43e0153950f36ee37dc03.jpg" alt='third' />       
        </div>
        <div>
            <img src= "https://i02.appmifile.com/645_operator_in/02/06/2021/4e32c24cfdf8c48ad1bc911807cac09e.jpg" alt="" />
        </div>
        <div>
            <img src="https://i02.appmifile.com/232_operator_in/04/06/2021/568c8fd7c3c4368c14c8ef64cda7866b.jpg" alt="" />
        </div>
        <div>
            <img src="https://i02.appmifile.com/3_operator_in/08/06/2021/3e2d6457a1e569145f66318a17ea1e03.jpg" alt="" />
        </div>
        <div>
            <img src="https://i02.appmifile.com/860_operator_in/09/06/2021/15c70c1f59ef4aad235531578c3d1757.jpg" alt="" />
        </div>
        <div>
            <img src="https://i02.appmifile.com/279_operator_in/08/06/2021/072acd0a667c5a0e045ed50a9064c531.jpg" alt="" />
        </div>

    </Carousel>
  )
}

export default Slider
