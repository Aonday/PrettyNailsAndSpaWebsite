import React from 'react'
import {Button} from '../ButtonElements'
import pinknailsbackground from '../../images/pinknailsbackground.jpg';
import nailspabackground from '../../images/nailspabackground.jpg';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements';

//Pass everything into info section as arguments/oparameters for infosection() here.
const InfoSection = ({
    lightBackground, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary,
    dark,
    dark2
}) => {
    // Refer to data file in infosection from object declerations.
    return (
        <div>
            <InfoContainer lightBackground={lightBackground} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home'
                                    smooth={true}
                                    duration={5000} //units are in milliseconds (ms)
                                    spy={true} // need to specify spy in order to know how to add the active class to it
                                    exact="true" //to know its this one right here
                                    offset={-70}//The value of the margin for the nav bar should be equal I think, to trigger hover effect at the right margin location when you scroll down
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>  
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default InfoSection;
