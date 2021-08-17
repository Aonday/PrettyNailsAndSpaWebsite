    import React from 'react'
    import{animateScroll as scroll} from 'react-scroll'
    import {FaFacebook,FaInstagram,FaPinterest,FaYelp} from 'react-icons/fa'
    import {
        FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle, 
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRights,
        SocialIcons,
        SocialIconLink
        } from './FooterElements'
        
    const Footer = () => {
        const toggleHome = () => {
            scroll.scrollToTop();
        };
        return (
            <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/signin"> How It Works </FooterLink>
                            <FooterLink to="/signin"> Testimonals </FooterLink>
                            <FooterLink to="/signin"> Careers </FooterLink>
                            <FooterLink to="/signin"> Investors</FooterLink>
                            <FooterLink to="/signin"> Terms of Sertvices </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to="/signin"> Contact </FooterLink>
                            <FooterLink to="/signin"> Support </FooterLink>
                            <FooterLink to="/signin"> Destinations </FooterLink>
                            <FooterLink to="/signin"> Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Videos </FooterLinkTitle>
                            <FooterLink to="/signin"> How It Works </FooterLink>
                            <FooterLink to="/signin"> Testimonals </FooterLink>
                            <FooterLink to="/signin"> Careers </FooterLink>
                            <FooterLink to="/signin"> Investors</FooterLink>
                            <FooterLink to="/signin"> Terms of Sertvices </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to="/signin"> Facebook </FooterLink>
                            <FooterLink to="/signin"> Instagram </FooterLink>
                            <FooterLink to="/signin"> Pinterest </FooterLink>
                            <FooterLink to="/signin"> Yelp </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Pretty Nails & Spa
                        </SocialLogo>
                        <WebsiteRights> Pretty Nails & Spa © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/Pretty-Nails-Spa-109745794601863" target="blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.facebook.com/Pretty-Nails-Spa-109745794601863" target="blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.facebook.com/Pretty-Nails-Spa-109745794601863" target="blank" aria-label="Pinterest">
                                <FaPinterest />
                            </SocialIconLink>
                            <SocialIconLink href="//www.yelp.ca/biz/pretty-nails-and-spa-burlington" target="blank" aria-label="Yelp">
                                <FaYelp />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>



            </FooterWrap>
        </FooterContainer>
        )
    }
    
    export default Footer
    