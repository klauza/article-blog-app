import React from 'react';

// SEO
import { Helmet } from 'react-helmet';

// content
import FeaturedArticles from './FeaturedArticles';
import Newsletter from '../../../containers/Newsletter';
import Hero from './Hero';
import ContactForm from '../../../containers/ContactForm';


// css
import { Wrapper } from './HomeCSS';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Welcome to blog's home page" />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - the best blog" />
        <meta property="og:description" content="Blog about something awesome" />
        <meta property="og:url" content={window.location.origin} />
        <meta property="og:site_name" content="Your App" />
        <meta property="og:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta name="twitter:card" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
        <meta name="twitter:description" content="Blog about something awesome" />
        <meta name="twitter:title" content="Blog - the best blog" />
        <meta name="twitter:image" content={`https://images.pexels.com/photos/34123/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`} />
      </Helmet>

      <Wrapper className="page">
        <Hero />
        <FeaturedArticles />
        <Newsletter />
        <ContactForm />
      </Wrapper>
    </>
  )
}

export default Home
