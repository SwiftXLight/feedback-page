import React from 'react';
import styled from 'styled-components';
import smallYellowLink from './images/red_cartoon 4.svg';
import pinkLink from './images/red_cartoon 3.svg';
import greenLink from './images/green.svg';
import twitterSvg from './images/twitter.svg';
import facebookSvg from './images/facebook.svg';
import pinterestSvg from './images/pinterest.svg';
import linkedinSvg from './images/in.svg';

const FooterWrapper = styled.div`
  min-height: 200px;
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  @media (max-width: 380px) {
    min-height: 100px;
  }
`;

const Pink = styled.img`
  position: absolute;
  left: 1%;
  top: -16.5%;
  @media (max-width: 380px) {
    display:none
  }
`;

const SmallYellow = styled.img`
  position: absolute;
  right: -2.1%;
  bottom: 2%;
  @media (max-width: 380px) {
    display:none
  }
`;

const Green = styled.img`
  position: absolute;
  right: 10%;
  top: 0;
  @media (max-width: 380px) {
    display:none
  }
`;

const LinksContainer = styled.div`
  z-index: 10;
  display: flex;
  gap: 26px;
  margin-left: 35vw;
`;

const LogoImage = styled.img`
`;

function Footer() {
  return (
    <FooterWrapper>
      <SmallYellow src={smallYellowLink} />
      <Pink src={pinkLink} />
      <Green src={greenLink} />
      <LinksContainer>
        <LogoImage src={linkedinSvg} />
        <LogoImage src={twitterSvg} />
        <LogoImage src={facebookSvg} />
        <LogoImage src={pinterestSvg} />
      </LinksContainer>
    </FooterWrapper>
  );
}

export default Footer;
