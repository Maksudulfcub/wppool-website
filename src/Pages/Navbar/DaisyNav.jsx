import Hamburger from "hamburger-react";
import { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import logo from "../../images/homepage/logo.png";


const DaisyNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar justify-between bg-[#F3F3F3]">
            <img src={logo} alt="" />
            <div className="gap-5">
                <button className="p-4 rounded-full bg-[#AFCD80]"><IoShareSocialOutline /></button>
                <button className="btn text-white font-messina border-none font-light rounded-3xl bg-[#2042B6]">Download the 2024 Report</button>
                <div className="dropdown right-2">
                    <Hamburger toggled={open} toggle={setOpen} />
                    <ul
                        tabIndex={0}
                        className="menu menu-sm right-[-10px] top-[-15px] dropdown-content bg-white rounded-box z-[1] mt-3 w-96 px-6 py-4 shadow">
                        <div className="flex gap-4 mb-4">
                            <button className="p-4 rounded-full bg-[#AFCD80]"><IoShareSocialOutline /></button>
                            <button className="btn text-white font-messina border-none font-light rounded-3xl bg-[#2042B6] mr-4">Download the 2024 Report</button>
                            <Hamburger toggled={open} toggle={setOpen} />
                        </div>
                        <li><a>The WPPOOL Index</a></li>
                        <li><a>All Companies</a></li>
                        <li><a>Potential Future Listings</a></li>
                        <li><a>State of USA</a></li>
                        <li><a>Stories & Ideas</a></li>
                        <li><a>About WPPOOL</a></li>
                        <li><a>WPPOOL Portfolio Companies</a></li>
                        <li className="text-[#2042B6] font-nantes"><a>Visit WPPOOL</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DaisyNav;