import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999; // Want this sidebar to be above/ontop of everything else, no matter what.
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out; //time it takes for the menu to drop down
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0') }; // Stating if the sidebar is there or not
    // If IsOpen is true, (I clicked on the icon) -> I want to display 100 percent.
    // ? -> means true
    // : -> or else (if not true) make it 0 opacity, so you cant see it.
    // Displays depending on true or false for current properties.
    top: ${({isOpen}) => (isOpen ? '0' : '-100%') }; 
`
export const Icon = styled.div` //position for the X icon
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
// Icon for exiting (X)
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    // Make menu a shorter height mobile
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }

`

export const SidebarLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: no-wrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &.hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`