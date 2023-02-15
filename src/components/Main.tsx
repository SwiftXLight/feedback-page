import React from 'react';
import styled from 'styled-components';
import smallYellowLink from './images/red_cartoon 4.svg';
import yellowLink from './images/goodie1.svg';
import pinkLink from './images/red_cartoon 3.svg';
import clouds from './images/Cloud.svg';
import sun from './images/circle.svg';
import map from './images/map.svg';

const MainWrapper = styled.div`
`;

const Pink = styled.img`
    position: absolute;
    z-index: 1;
    right: 26.24%;
    top: 48.47%;
    bottom: 32.09%;
`;

const SmallYellow = styled.img`
    position: absolute;
    z-index: 1;
    left: 2.01%;
    right: 91.85%;
    top: 6.55%;
    bottom: 85.84%;
    height: 85.84px;
    width: 88.32px;
    border-radius: 0px;
`;

const Yellow = styled.img`
    position: absolute;
    z-index: 2;
    width: 127px;
    height: 127px;
    right: 38.24%;
    top: 45.47%;
    bottom: 32.09%;
`;

const Clouds = styled.img`
    position: absolute;
    left: -6.39%;
    right: 4.39%;
    top: 8.95%;
    bottom: 13.32%;
    width: 100vw;
`;

const Map = styled.img`
    position: absolute;
    right: 0;
`;

const Sun = styled.img`
    position: absolute;
    width: 87px;
    height: 87px;
    right: 50%;
    top: 21px;
`;

function Main() {
    return (
        <MainWrapper>
        <SmallYellow src={smallYellowLink} />
        <Yellow src={yellowLink} />
        <Pink src={pinkLink} />
        <Clouds src={clouds} />
        <Map src={map} />
        <Sun src={sun} />
        </MainWrapper>
    );
}

export default Main;
