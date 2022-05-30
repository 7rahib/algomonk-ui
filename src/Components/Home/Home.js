import React from 'react';
import AlgorithmList from './AlgorithmList';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <AlgorithmList></AlgorithmList>
        </div>
    );
};

export default Home;