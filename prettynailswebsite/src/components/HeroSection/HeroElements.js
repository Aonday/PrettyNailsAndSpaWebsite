import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0px; //30px
    height: 800px;
    position: relative;
    z-index: 1;
    :before{    /*Add Before Styles -> Make Background darker for added effect*/
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; 
    width: 100%;
    height: 100%;
    overflow: hidden;
`   

export const BackgroundPicture = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover; //want the inserted picture to be scaled to cover the entire container we created
    object-fit: cover;
    background: #232a34;
    background-size: cover;
    background-repeat: no-repeat;
    /*background-blend-mode: luminosity;*/
    filter: blur(0px);
    filter: grayscale(0.41) sepia(0.15) hue-rotate(190deg);
    filter: grayscale(0.41) sepia(0.22) hue-rotate(336deg) url('#grain') brightness(1) contrast(0.6);
    


    
`

export const HeroContent = styled.div`
    display: flex;
    position: absolute;
    margin-top: -50px;
    padding: 9px 24px;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    user-select: none;
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    backdrop-filter: blur(10px);
  
`
export const HeroH1 = styled.div`
    color: #fff;
    font-size: 64px;
    text-align: center;
    color: #f2d8ea;
    z-index: 1;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 28px;
    max-width: 600px;
    text-align: center;
   

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroPPContainer = styled.div`
    margin-top: -45px;
    color: #fff;
    font-size: 24px;
    max-width: 600px;
    text-align: center;



    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`


export const HeroP1Container = styled.div`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    max-width: 600px;
    text-align: center;
    display: inline-block;
    padding: 25px;
    

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroP2Container = styled.div`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    max-width: 600px;
    text-align: center;
    display: inline-block;
    padding: 25px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`


export const HeroP1 = styled.p`
    margin-top: 18px;
    color: #fff;
    font-size: 24px;
    max-width: 600px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroP2 = styled.p`
    margin-top: 18px;
    color: #fff;
    font-size: 24px;
    max-width: 600px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`