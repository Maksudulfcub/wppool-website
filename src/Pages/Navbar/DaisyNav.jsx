import Hamburger from "hamburger-react";
import { useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import logo from "../../images/homepage/logo.png";


const DaisyNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar fixed z-10 max-w-[1316px] mx-auto font-messina justify-between bg-[#F3F3F3] bg-opacity-40 px-6">
            <img className="px-3" src={logo} alt="" />
            <div className="gap-5">
                <div className="space-x-2 sm:block hidden">
                    <button className="p-4 rounded-full border border-solid text-black hover:duration-500 border-[#D9D9D9] hover:border-[#AFCD80] hover:bg-[#AFCD80]"><IoShareSocialOutline /></button>
                    <button className="p-4 text-black font-messina font-light rounded-full border border-solid hover:duration-500 border-[#D9D9D9] hover:text-white hover:border-[#2042B6] hover:bg-[#2042B6]">Download the 2024 Report</button>
                </div>
                <div className="dropdown right-2">
                    <Hamburger toggled={open} toggle={setOpen} />
                    <ul
                        tabIndex={0}
                        className="menu menu-sm right-[-5px] top-[-22px] dropdown-content bg-white rounded-box z-[1] mt-3 w-96 px-6 py-4 shadow">
                        <div className="flex gap-4 mb-4">
                            <button className="p-4 text-[#191618] rounded-full border border-solid hover:text-white hover:duration-500 border-[#AFCD80] hover:border-[#AFCD80] hover:bg-[#AFCD80]"><IoShareSocialOutline /></button>
                            <button className="text-[#191618] hover:text-white font-messina font-light rounded-full border border-solid hover:duration-500 border-[#2042B6] hover:border-[#2042B6] hover:bg-[#2042B6] px-4 mr-4">Download the 2024 Report</button>
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