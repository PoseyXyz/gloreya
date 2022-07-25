import React from 'react';
import Banner from '../components/Banner';
import Welcome from '../components/Welcome';
import Specials from '../components/Specials';
import BurgerComponenets from '../components/BurgerComponenets';
import Menu from '../components/Menu';
import Delivery from '../components/Delivery';
import Testimonial from '../components/Testimonial';
import Gallery from '../components/Gallery';
import News from '../components/News';
import Footer from '../components/Footer'

function Home(props) {
    return (
        <div>
            <Banner />
            <Welcome />
            <Specials />
            <BurgerComponenets />
            <Menu />
            <Delivery />
            <Testimonial />
            <Gallery />
            {/* <News /> */}
            <Footer />
            


        </div>
    );
}

export default Home;