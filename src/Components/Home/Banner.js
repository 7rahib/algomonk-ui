import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-banner">
            <div class="hero-overlay bg-opacity-70"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-4xl font-bold">Welcome to <span className='text-5xl text-secondary'>AlgoMonk</span></h1>
                    <p class="mb-5">A place where algorithms are taught and visualized<br /> Get to know more about every Algoritm and give daily quiz to evaluate</p>
                    <button class="btn btn-secondary">Get started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;