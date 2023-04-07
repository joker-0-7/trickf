import Footer from "../components/Footer";
import { useEffect } from "react";
import Nav from "../components/Nav"
import Section from "../components/Section";
import axios from "axios";
import Carousel from "../components/Carousel";
import FormFilter from "../components/FormFilter";

const Home = ()=>{
    return(
        <div className="home">
            <Nav />
            <Carousel />
            <FormFilter />
            <Section />
            <Footer />
        </div>
    )
}
export default Home;