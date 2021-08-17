// have to say export const because we have a different file, 
// However, if we were to do this in the index.js file abbove the function,
// you could just straight up say "const Nav" and it styles, but we have
// to export it since it is in another file.

// Im importing link from two react router and react scroll.
// How do I know which one is which?
// Trick: I can have an alias --> RENAME yourself. Link as LinkR.

import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import '../../App.css';


  
// Components must start with capital letter

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? 'rgba(134, 45, 89, 0.75)': '#ab5c91'/*'#d9a5c8''#520b2f''#862d59'*/)};
    opacity: 0.8;
    height: 70px; // 80px
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    position: sticky;
    top: 0;
    z-index: 10;
// media query is a CSS technique that uses the @media rule to include a 
// block of css code/properties only if a certain condition is true.
// **Link: https://www.w3schools.com/css/css_rwd_mediaqueries.asp **
// If the browser window is 600px or smaller, the background color will be lightblue.
@media screen and (max-width : 960px){
    transition: 0.8 all ease;
}
`;

export const Navbarcontainer = styled.div`
    display: flex;
    color: #862d59;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100 px;
    user-select: none;
    //The z-index property specifies the stack order of an element.
    // An element with greater stack order is always in front of an element with a lower stack order.
    `;

    // Logo Component - First line of code is a react router link.
export const Navbarlogo = styled(LinkR)`
    color: #fff;
    align-items: center;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;
 

export const MobileIcon = styled.div`
// Default display setting will be hidden by default, only when on mobile version
    display: none; 
// Only want to display at a particular break point:
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right: 25px;
    transform: translated(-100%,60%); // This centers it
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
` 

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 575px; // play around with this bc FAicon has some padding around itself so offset it to center
    font-family: 'Notable', sans-serif;
    @media screen and (max-width: 768px){ // if its smaller that 768px hide the menu items
        display: none;
    }
`

export const NavItem = styled.ul`
    height: 70px;
`

// react scroll links
export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    // active class: to make a js effect to make a link change color when howevered over the link
    // to get the green bottom bar when you hover over one of the menu item links.
    &.active{
        border-bottom: 3px solid #e3a1e0;
    }
`
export const NavLink2 = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    // active class: to make a js effect to make a link change color when howevered over the link
    // to get the green bottom bar when you hover over one of the menu item links.
    &.active{
        border-bottom: 3px solid #e3a1e0;
    }
`
export const NavButton = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
    display: none;
    }
`
export const NavButtonLink = styled(LinkR)`
    border-radius: 5px;
    background: #e3c1d2;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    outline-width: 5px;
    outline-color: #fff;
    



    &:hover{
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }



`