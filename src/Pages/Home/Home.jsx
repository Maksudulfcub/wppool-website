import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;