import React from 'react';
import HomepageSection from '../../components/homepage-section/homepage-section.component';
import SectionSupport from "../../components/section-support/section-support.component";
import OurServices from "../../components/our-services/our-services.component";
import OurBlog from "../../components/our-blog/our-blog.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";
import DropdownNav from "../../components/dropdown/dropdown.component";

const Homepage = () => (
    <>
    <HomepageSection/>
        <SectionSupport/>
        <OurServices/>
        <OurBlog/>
        <Footer/>
    </>
)

export default Homepage;