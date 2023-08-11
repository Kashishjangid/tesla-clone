import React from 'react'
import Models from './Home/Models'
// import styled from 'styled-components'

import bgImg1 from './Images/tesla-car-1.jpg'
import bgImg2 from './Images/tesla-car-2.jpg' 
import bgImg3 from './Images/tesla-car-3.jpg'
import bgImg4 from './Images/tesla-car-4.jpg'
import bgImg5 from './Images/solar-panels.jpg'
import bgImg6 from './Images/solar-roof.jpg'
// import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <>
        
        {/* <main> */}
            <Models
                title= "Model 3"
                text1="Starting at $32,740"
                text2="After Federal Tax Credit"
                link="Model 3"
                leftButton="Explore Inventory"
                rightButton="Custome Order"
                backgroundImg={bgImg1}
                ifrightButtonExists
                iftextExists
            />
             <Models
                title="Model Y"
                text1="Starting at $40,240"
                text2="After Federal Tax Credit"
                link="Model Y"
                leftButton="Explore Inventory"
                rightButton="Custome Order"
                backgroundImg={bgImg2}
                ifrightButtonExists
                iftextExists
            />
            <Models
                title="Model S"
                text1="Starting at $32,740"
                text2="After Federal Tax Credit"
                link="Explore Inventory"
                leftButton="Custome Order"
                rightButton="Demo Drive"
                backgroundImg={bgImg3}
                ifrightButtonExists
                iflinkExists
            />
            <Models
                title="Model X"
                text1="Starting at $32,740"
                text2="After Federal Tax Credit"
                link="Explore Inventory"
                leftButton="Custome Order"
                rightButton="Demo Drive"
                backgroundImg={bgImg4}
                ifrightButtonExists
                iflinkExists
            />
            <Models
                title="Solar Panels"
                text1="Starting at $32,740"
                text2="After Federal Tax Credit"
                link="Schedule a Virtual Consultation"
                leftButton="Order Now"
                rightButton="Learn More"
                backgroundImg={bgImg5}
                ifrightButtonExists
                iflinkExists
            />
             <Models
                title="Solar Roof"
                text1="Produce Clean Energy From Your Roof"
                text2="After Federal Tax Credit"
                leftButton="Order Now"
                rightButton="Learn More"
                backgroundImg={bgImg6}
                ifrightButtonExists
                iftextExists
            />
            <Models
                title="Powerwall"
                text1="Starting at $32,740"
                text2="After Federal Tax Credit"
                leftButton="Order Now"
                rightButton="Learn More"
                backgroundImg={bgImg1}
                ifrightButtonExists
            />
            <Models
                title="Accessories"
                text1="Starting at $32,740"
                text2="After Federal Tax Credit"
                leftButton="Shop Now"
                rightButton="Learn More"
                backgroundImg={bgImg2}
                // ifrightButtonExists
            />
            
            
        {/* </main> */}
    </>
  )
}

// const main = styled.div`
//     width: auto;
//     height: auto;
//     overflow: auto;
//     scroll-behavior: smooth;
//     scroll-snap-align: initial;
//     scroll-snap-type: mandatory;
// `;


export default Home
