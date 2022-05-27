import React from 'react';
import Banner from '../Banner/Banner';
import BannerWithText from '../BannerWithText/BannerWithText';
import Parts from '../Parts/Parts';
import Reveiew from '../Reveiew/Reveiew';
import Loading from '../Shared/Loading/Loading';
import Summary from '../Summary/Summary';
import Counter from './Counter';
import NewArrival from './NewArrival';

const Home = () => {
    return (
        <div className='App'>
            <Banner></Banner>
            <Parts></Parts>
            
            
            <BannerWithText></BannerWithText>
            <Summary></Summary>
            <Counter></Counter>
            <Reveiew></Reveiew>
            <NewArrival></NewArrival>
            
            {/* <Loading></Loading> */}
            
        </div>
    );
};

export default Home;