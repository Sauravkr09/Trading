import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
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
  SocialIconLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  // Scroll to top of page on click (react-scroll)
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Our Appoach</FooterLinkTitle>
              <FooterLink to="/">Schemes</FooterLink>
              <FooterLink to="/">Donations</FooterLink>
              <FooterLink to="/">Partners</FooterLink>
              <FooterLink to="/">Insight</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              sauravTrading
            </SocialLogo>
            <WebsiteRights>Created by saurav kumar &copy; 2025</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/@Raistarvlog06" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="https://x.com/home" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/saurav-kumar-171078269/" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
