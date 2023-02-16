import React from 'react';
import styled from 'styled-components';
import smallYellowLink from './images/red_cartoon 4.svg';
import pinkLink from './images/red_cartoon 3.svg';
import greenLink from './images/green.svg';

const FooterWrapper = styled.div`
  min-height: 200px;
  background: #FAFAFA;
  border: 1px solid #D8D8D8;
  position: relative;
  overflow: hidden;
`;

const Pink = styled.img`
  position: absolute;
  left: 1%;
  top: -16.5%;
`;

const SmallYellow = styled.img`
  position: absolute;
  right: -2.1%;
  bottom: 2%;
`;

const Green = styled.img`
  position: absolute;
  right: 10%;
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
