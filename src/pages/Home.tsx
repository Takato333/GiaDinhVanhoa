import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Categories from '../components/Categories';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="pt-16">
                <Hero />
                <Intro />
                <Categories />
                <Gallery />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
