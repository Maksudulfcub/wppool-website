import About from "../About/About";
import Banner from "../Banner/Banner";
import Companies from "../Companies/Companies";
import FutureListing from "../FutureListing/FutureListing";
import Index from "../Index/Index";
import Slider from "../Slider/Slider";
import Stories from "../Stories/Stories";
import Table from "../Table/Table";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Index></Index>
            <Table></Table>
            <FutureListing></FutureListing>
            <Slider></Slider>
            <Stories></Stories>
            <About></About>
            <Companies></Companies>
        </div>
    );
};

export default Home;