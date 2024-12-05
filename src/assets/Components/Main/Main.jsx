import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import NavigateButtons from '../Navbar/NavigateButtons/NavigateButtons'
import ProductSection from '../ProductSection/ProductSection'
import Footer from '../Footer/Footer'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <NavigateButtons></NavigateButtons>
            <ProductSection />
            <Footer />
        </div>
    )
}

export default Main