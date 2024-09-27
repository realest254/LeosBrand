import React, { useState, useEffect } from 'react';
import Herosection from './hero';
import CategorySection from './categorySection';
import Carousel from './carouselSection.jsx';

function Home () {
    return (
      <>
        <Herosection/>
        <CategorySection/>
        <Carousel/>
      </>

    )
}

export default Home;