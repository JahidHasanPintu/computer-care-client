import React from 'react';
import Banner from '../Banner/Banner';
import BannerWithText from '../BannerWithText/BannerWithText';
import Reveiew from '../Reveiew/Reveiew';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div className='App'>
            <Banner></Banner>
            <Summary></Summary>
            
            <BannerWithText></BannerWithText>
            <Reveiew></Reveiew>
            
        </div>
    );
};

export default Home;