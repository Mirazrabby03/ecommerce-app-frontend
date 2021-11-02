import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import "./slider.css"
import {sliderItems} from '../../data';
import styled from 'styled-components';

const SlideWrapper = styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
    transform: translateX(${props=> props.slideIndex * -100}vw)
`

const Slider = () => {

    const [slideIndex, setSlideIndex] =useState(0);
    const handleClick =(direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex >0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex <2 ? slideIndex +1 : 0)
        }
    }
    return (
        <div className="sliderContainer">
            <div className="arrowLeft" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
            </div>
            <SlideWrapper slideIndex={slideIndex}>
                 {sliderItems.map((item)=>(
                     <div className="slide" bg={item.bg} style={{backgroundColor: "f5fafd"}}>
                     <div className="imgContainer">
                         <div className="image">
                         <img src={item.img}  alt="" />
                         </div>
                         </div>
                         <div className="infoContainer">
                             <div className="slideTitle">{item.title}</div>
                             <div className="slideDesc">{item.desc}</div>
                             <button className="slideButton">SHOP NOW</button>
                         </div>
                     
                     </div>
                 ))}
                

                <div className="slide">
                <div className="imgContainer">
                    <div className="image">
                    <img src="https://i.ibb.co/TmDfkJQ/1.jpg"  alt="" />
                    </div>
                    </div>
                    <div className="infoContainer">
                        <div className="slideTitle"><h1>SUMMER SALE</h1></div>
                        <div className="slideDesc">DON'T COMRPOMISE ON STYLE! GET FLAT 30% OFF ON SUMMER SALE!</div>
                        <button className="slideButton">SHOP NOW</button>
                    </div>
                
                </div>
            </SlideWrapper>
            <div className="arrowRight" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
            </div>
            
            
        </div>
    )
}

export default Slider;
