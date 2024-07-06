import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Home from "../Pages/Home/Home";
import DaisyNav from "../Pages/Navbar/DaisyNav";

const Root = () => {
    return (
        <div className="max-w-[1316px] mx-auto">
            <DaisyNav></DaisyNav>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;