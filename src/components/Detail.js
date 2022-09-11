import React from 'react'
import styled from 'styled-components'
function Detail() {
  return (
    <Container>
       <Background>
         <img src='https://s1.dmcdn.net/v/DnpUC1N9acMX0wpwG/x1080'/>
       </Background>
       <Controls>
           <PlayButton>
                <img src='/images/play-icon-black.png'/>
                <span>Play</span>
           </PlayButton>
           <TrailerButton>
                <img src='/images/play-icon-white.png'/>
                <span>Trailer</span>
           </TrailerButton>
           <AddButton>
               <span>+</span>
           </AddButton>
           <GroupButton>
           <img src='/images/group-icon.png'/>
           </GroupButton>
       </Controls>
       <SubTitle>
        2018 .7m .Family .Fantasy .Kids .Animation
       </SubTitle>
       <Description>
       Doraemon in Nobita's little war is the first movie of doraemon which was released in India on 5th December 2010 this movie was first shown on Hungama tv. and after this movie is also telecast on Disney Channel on 26 December 2010
       </Description>
    </Container>
  )
}
const Container=styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw+5px);
position:relative;
`
const Background=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;
img{
  height:100%;
  width:100%;
  object-fit:cover;
}
`
const Controls=styled.div`
display:flex;
margin-top:300px;
margin-left:50px;
align-items:center;
`
const PlayButton=styled.button`
border-radius:4px;
font-size:15px;
display:flex;
padding 0px 24px;
margin-right:22px;
align-items:center;
background:rgb(249,249,249);
border:none;
letter-spacing:1.8px;
cursor:pointer;
text-transform:uppercase;
&:hover{
  background:rgb(198,198,198);
}
`
const AddButton=styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
      font-size:30px;
      color:white;
    }
`
const GroupButton=styled(AddButton)`
background:rgb(0,0,0);
`
const TrailerButton=styled(PlayButton)`
background:rgb(0,0,0,0.3);
border:1px solid rgb(249,249);
color:rgb(249,249,249);
`
const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:20px;
padding:30px;
font-weight: bold;
`
const Description=styled.div`
padding-left:30px;
padding-right:1000px;
`
export default Detail
