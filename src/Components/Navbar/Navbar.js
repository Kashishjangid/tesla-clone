import React from "react";
import styled from "styled-components";
import logo from "../Images/Teslalogo.svg";
import { useState } from "react";
import close from "../Images/close.svg"
// import { Link } from 'react-router-dom';

import { menuData } from "./Data.js";

const Navbar = () => {

    const [status, setStatus]=useState(false);

    const MenuButton=()=>{
        setStatus(true);
    }
    const CloseButton=()=>{
        setStatus(false);
    }
  return (
    <>
      <NavBar>
        <NavBrand>
          <img src={logo} alt="tesla logo" />
        </NavBrand>
        <NavMenu>
          <ul className="display-none">
            <li><a href="https://github.com/">Vehicles</a> </li>
            <li><a href="https://github.com/">Energy</a> </li>
            <li><a href="https://github.com/">Charging</a> </li>
            <li><a href="https://github.com/">Discover</a> </li>
            <li><a href="https://github.com/">Shop</a>  </li>
          </ul>
          <ul className="right">
            <li className="display-none"><a href="https://github.com/">English</a></li>
            <li className="display-none"><a href="https://github.com/">Support</a> </li>
            <li className="display-none"><a href="https://github.com/">LogIn</a> </li>
            <li onClick={MenuButton} className="menu-active" >Menu </li>
          </ul>
        </NavMenu>
        {status?
        <>
                <Datamenu >
            <div className="closeIcon">
                <img onClick={CloseButton} src={close} alt="closeIcon" />
            </div>
        
            
            {menuData && menuData.map((value, index) => <li key={index}>{value.link}</li>)}
            </Datamenu>
        </>  : <></>  
        
          
        
        }
      </NavBar>
    </>
  );
};

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 5vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 3rem;
  min-height: 10vh;
`;
const NavBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavMenu = styled.div`
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  

  li {
    display: inline-block;
    padding: 10px 20px;
    /* display: flex; */
    /* flex-direction: row; */
    /* align-items: center; */
    /* justify-content: center; */
    cursor: pointer;

    font-weight: 400;

    &:hover {
      background-color: aqua;
    }
  }
  a{
    text-decoration: none;
    color: black;
  }
`;

const Datamenu = styled.div`
  /* display: ${props => props.show ? 'ture' : 'false'}; */
  display: flex;
  min-height: auto;
  width: 15rem;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: fixed;
  background: #fff;
  padding: 0.7rem 0.7rem;
  top: 0;
  right: 0;
  border: 2px solid;
  /* opacity: 1; */
  z-index: 2000;
  /* overflow-y: scroll; */
  li {
    list-style: none;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.7rem 0.7rem;
    cursor: pointer;
  }

  > .closeIcon{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 1rem;
    width: 100%;
    cursor: pointer;
  }
  img{
    width: 1rem;
    height: auto;
    object-fit: contain;
    opacity: 20;
    z-index: 2000;
    
  }
`;

export default Navbar;
