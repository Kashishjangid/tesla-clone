import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div>
      <TeslaFooter>
        <ul className='teslafooter'>
            <li>Tesla 2023</li>
            <li>Privacy and Legal</li>
            <li>Vehicle Recalls</li>
            <li>Contact</li>
            <li>News</li>
            <li>Get Updates</li>
            <li>Locations</li>
        </ul>
      </TeslaFooter>
    </div>
  )
}
const TeslaFooter = styled.div`
    background-color: black;
    min-height: 12vh;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li{
        display: inline-flex;
        padding: 0.5rem 0.5rem;
        cursor: pointer;
    }

`;
export default Footer
