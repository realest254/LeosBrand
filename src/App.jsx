import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './homepage';
import Footer from './footer';
import Header from './header';
import TShirtsPage from './categoryPages/TShirtsPage';
import HoodiesPage from './categoryPages/HoodiesPage';
import CapsPage from './categoryPages/CapsPage';
import About from './about';
import Contact from './contact';
import ShopPage from './shopPage';

function App() {
  return (
    <HelmetProvider> {/* Wrap your app with HelmetProvider */}
      <Router basename="/LeosBrand">
        <div className="App">
          <Helmet>
            <title>LeosBrand - Your Go-To Online Clothing Store</title>
            <meta name="description" content="Discover high-quality clothing at LeosBrand. Shop our latest collection online and enjoy trendy apparel delivered to your doorstep." />
            <meta name="keywords" content="clothing, online store, fashion, Dubai, Sharjah, apparel, LeosBrand" />
            <meta name="author" content="LeosBrand" />
            <meta property="og:title" content="LeosBrand - Your Go-To Online Clothing Store" />
            <meta property="og:description" content="Discover high-quality clothing at LeosBrand. Shop our latest collection online and enjoy trendy apparel delivered to your doorstep." />
            <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
            <meta property="og:url" content="https://www.yourwebsite.com" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="LeosBrand" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:location" content="Dubai, Sharjah" />
            <meta property="og:timezone" content="Asia/Dubai" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="LeosBrand - Your Go-To Online Clothing Store" />
            <meta name="twitter:description" content="Discover high-quality clothing at LeosBrand. Shop our latest collection online and enjoy trendy apparel delivered to your doorstep." />
            <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
            <meta name="twitter:site" content="@YourTwitterHandle" />
            <link rel="canonical" href="https://www.yourwebsite.com" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID"></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
              `}
            </script>
          </Helmet>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tshirts" element={<TShirtsPage />} />
            <Route path="/hoodies" element={<HoodiesPage />} />
            <Route path="/caps" element={<CapsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider> // Close the HelmetProvider here
  );
}

export default App;
