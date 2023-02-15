import React from 'react';
import styled from 'styled-components';
import smallYellowLink from './images/red_cartoon 4.svg';
import pinkLink from './images/red_cartoon 3.svg';
import greenLink from './images/green.svg';

const FooterWrapper = styled.div`
  height: 200px;
  background color: #D8D8D8;
  color: #D8D8D8;
`;

const Pink = styled.img`
  position: absolute;
  left: 1%;
  bottom: -5.15%;
`;

const SmallYellow = styled.img`
  position: absolute;
  right: -2.1%;
  bottom: 2%;
`;

const Green = styled.img`
  position: absolute;
  right: 10%;
  bottom: 100px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <SmallYellow src={smallYellowLink} />
      <Pink src={pinkLink} />
      <Green src={greenLink} />
    </FooterWrapper>
  );
}

export default Footer;
