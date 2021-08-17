import React, { useState } from 'react';
import Image from '../../images/PrettyNailsPicture1.jpg'; // Change the background here
import {Button} from '../ButtonElements';
import {
    HeroContainer, 
    HeroBackground, 
    BackgroundPicture, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroP1,
    HeroP2,
    HeroPPContainer,
    HeroP1Container,
    HeroP2Container,
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);  
    };
 
    return (
        <HeroContainer id="home">
            <HeroBackground>
                <BackgroundPicture style={{ backgroundImage: `url(${Image})` }} />
            </HeroBackground>
            <HeroContent>   
                <HeroH1> Pretty nails and spa </HeroH1>
                 <HeroP> Hours: </HeroP>
                <HeroPPContainer>
                    
                    <HeroP1Container>
                        <HeroP1> Monday </HeroP1>
                        <HeroP1> Tuesday </HeroP1>
                        <HeroP1> Wednesday </HeroP1>
                        <HeroP1> Thursday </HeroP1>
                        <HeroP1> Friday </HeroP1>
                        <HeroP1> Saturday </HeroP1>
                        <HeroP1> Sunday </HeroP1>
                    </HeroP1Container>
                    <HeroP2Container>
                        <HeroP2> 10AM - 7PM </HeroP2>
                        <HeroP2> 10AM - 7PM </HeroP2>
                        <HeroP2> 10AM - 7PM </HeroP2>
                        <HeroP2> 10AM - 7PM </HeroP2>
                        <HeroP2> 10AM - 7PM </HeroP2>
                        <HeroP2> 10AM - 6PM </HeroP2>
                        <HeroP2> (Closed) </HeroP2>
                    </HeroP2Container>
                </HeroPPContainer>  
               
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;

/*
<HeroBtnWrapper>
<Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
Get Started {hover ? <ArrowForward /> : <ArrowRight />}      
</Button>
</HeroBtnWrapper>
*/

/*
                <HeroP> Monday &nbsp;&nbsp;&nbsp;&nbsp;  10AM - 7PM </HeroP>
                <HeroP> Tuesday  &nbsp;&nbsp;&nbsp;&nbsp; 10AM - 7PM</HeroP>
                <HeroP> Wednesday  &nbsp;&nbsp;&nbsp;&nbsp; 10AM - 7PM</HeroP>
                <HeroP> Thursday &nbsp;&nbsp;&nbsp;&nbsp; 10AM - 7PM</HeroP>
                <HeroP> Friday  &nbsp;&nbsp;&nbsp;&nbsp; 10AM - 7PM</HeroP>
                <HeroP> Saturday  &nbsp;&nbsp;&nbsp;&nbsp; 10AM - 6PM</HeroP>
                <HeroP> Sunday  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; (Closed)</HeroP>
*/ 