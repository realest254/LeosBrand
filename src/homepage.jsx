import React, { useState, useEffect } from 'react';
import Herosection from './hero';
import CategorySection from './categorySection'

function Home () {
    return (
      <>
        <Herosection/>
        <CategorySection/>
      </>

    )
}

export default Home;