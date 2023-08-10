import React from "react";
import styled from "styled-components";
// import Navbar from "../Navbar/Navbar";
// import Bounce from 'react-reveal/Bounce';


const Models = ({title,text1,text2,leftButton,rightButton,link,backgroundImg, ifrightButtonExists, iflinkExists, iftextExists}) => {
  return (
    <>
      <Background style={{background:`url(${backgroundImg})`,backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
        {/* <Navbar/> */}
        <Container>

            {/* <Bounce top> */}
            <TextItems>
            
            <h1>{title}</h1>
                    
            
            {
                iftextExists &&
                    <p>{text1}</p>
                    
            }
            {
                iftextExists &&
                    <p>{text2}</p>
            }
            
            {
                iflinkExists &&
                    <a href="">{link}</a>
            }
            
          </TextItems>

            {/* </Bounce> */}

            {/* <Bounce bottom> */}
            <ButtonItems>
            <ButtonGroups>
              <button className="leftButton" type="button">
                {leftButton}
              </button>
              {
                ifrightButtonExists &&
                    <button className="rightutton" type="button">
                        {rightButton}
                    </button>
              }
              
            </ButtonGroups>
            {/* <img src="arrow" alt="arrow image" /> */}
          </ButtonItems>

            {/* </Bounce> */}
          
          
        </Container>
      </Background>
    </>
  );
};


const Background = styled.section`
  
  min-height: 100vh;
  
`;
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  min-height: 100vh;
`;
// const Bounce = styled.div``;
const TextItems = styled.div`
  line-height: 0.5;
  margin-top: 15vh;
  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: black;
  }
  p {
    font-weight: 300;
    color: black;
  }
  a{
    font-weight: 300;
    color: black;
  }
`;
const ButtonItems = styled.div`
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;
const ButtonGroups = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* margin-top: 10px; */
  button {
    outline: none;
    border: none;
    text-transform: uppercase;
    border-radius: 100px;
    margin: 0px 0px 50px 10px;
    padding: 0.8rem 5rem;
    font-size: 12px;
    font-weight: 400;
    
  }
  @media screen and (max-width: 991px) {
    /* margin-top: 0; */
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default Models;
