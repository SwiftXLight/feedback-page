import React from 'react';
import styled from 'styled-components';
import smallYellowLink from './images/red_cartoon 4.svg';
import yellowLink from './images/goodie1.svg';
import pinkLink from './images/red_cartoon 3.svg';
import clouds from './images/Cloud.svg';
import sun from './images/circle.svg';
import map from './images/map.svg';

const MainWrapper = styled.div`
  position: relative;
`;

const Pink = styled.img`
    position: absolute;
    z-index: 1;
    width: 214px !important;
    height: 214px !important;
    left: -44px !important;
    top: 610px !important;
    // transform: matrix(-0.74, 0.67, 0.67, 0.74, 0, 0);
    // @media screen and (max-width:1300px) {
    //     right: 46.24%;
    //     top: 63%;
    // }
    // @media screen and (max-width:900px) {
    //     display: none;
    // }
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
    width: 127px !important;
    height: 127px !important;
    left: -51px !important;
    top: 568px !important;
    
    // @media screen and (max-width:1300px) {
    //     right: 58.24%;
    //     top: 60%;
    // }
    // @media screen and (max-width:900px) {
    //     display: none;
    // }
`;

const Clouds = styled.img`
    position: absolute;
    left: -6.39%;
    right: 4.39%;
    top: 8.95%;
    bottom: 13.32%;
    width: 100vw;
`;

const Map = styled.div`
    // left: calc(100% - 625px);
    top: -52px;
    position: relative;
    width: 976px;
    height: 976px;
    img {
        width: 1606px;
        height: 970px;
        position: absolute;
        left: -490px;
        top: -24px;
    }
`;
const OverflowMap = styled.div`
    position: absolute;
    left: calc(100% - 625px);
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
            <Clouds src={clouds} />
            <OverflowMap>
                <Yellow src={yellowLink} />
                <Pink src={pinkLink} />
                <Map><img src={map} alt='' /></Map>
            </OverflowMap>
            <Sun src={sun} />
        </MainWrapper>
    );
}

export default Main;
