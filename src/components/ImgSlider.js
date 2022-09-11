import React from 'react'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
function ImgSlider() {
    let settings={
        dots:true,
        infinite:true,
        speed:300,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt=''/>
      </Wrap>
      <Wrap>
        <img src='/images/slider-badging.jpg' alt=''/>
      </Wrap>
    </Carousel>
  )
}
const Carousel=styled(Slider)`
margin-top:20px;
li.slick_active button:before{
  color:white;
}
ul li button{
  &:before{
    font-size:10px;
    color:rgb(150,150,171);
  }
}
.slick-list{
  overflow:visible;
}
`
const Wrap=styled.div`
cursor:pointer;
img{
    border-radius:4px;
    width:100%;
    height:100%;
    transition-duration:300ms;
    &:hover{
      border:4px solid rgba(249,249,249,0.8);
    }
}
`
export default ImgSlider
