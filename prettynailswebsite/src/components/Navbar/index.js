// type in "rafce"
// import from elements.js using the names of the styled components
// Will automatically go to index (to take from / look for the component) if im importing the Navbar from another file like App.js
import '../../App.css' ;
import React, {useState, useEffect} from 'react'
import {AiOutlineBars} from 'react-icons/ai' // react icons library --> Import the name of the icon in curly braces from react-icons/(first two letters of the icon here)
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    Navbarcontainer, 
    Navbarlogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLink,
    NavLink2,
    NavButton,
    NavButtonLink
} from './NavbarElements'

// from 'react-icons/fa'
const Navbar= ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 70){
            setScrollNav(true);     

        }else{ 
            setScrollNav(false);
        }   
    };

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };
       
// <a> (anchor tags) with href creates a hyperlink to webpages,files,e.t.c, with react router, use "to".
// Components must start with capital letter
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <Nav scrollNav={scrollNav}>   
                    <Navbarcontainer>
                        <Navbarlogo to='/' onClick={toggleHome} id='playball' > Pretty Nails & Spa</Navbarlogo>
                        <MobileIcon onClick={toggle}>
                            <AiOutlineBars />
                        </MobileIcon>
                        <NavMenu  >
                            <NavItem>
                                <NavLink2 to="/" smooth={true} duration={500} spy={true} 
                                exact='true' offset={-70}> Home</NavLink2>
                            </NavItem>
                            <NavItem>
                                <NavLink to="about" smooth={true} duration={500} spy={true} 
                                exact='true' offset={-70}> About </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink2 to="/services"> Services </NavLink2>
                            </NavItem>
                            <NavItem>
                                <NavLink2 to="/location"> Location </NavLink2>
                            </NavItem>
                            <NavItem>
                                <NavLink to="contact" smooth={true} duration={500} spy={true} 
                                exact='true' offset={-70}> Contact </NavLink>
                            </NavItem>
                        </NavMenu>
                        <NavButton>
                            <NavButtonLink to="/signin"> Sign in </NavButtonLink>
                        </NavButton>
                    </Navbarcontainer>
                </Nav>
            </IconContext.Provider> 
        </>
    );
};

export default Navbar;
