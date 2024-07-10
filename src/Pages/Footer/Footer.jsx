import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="lg:mt-[58px] mt-10 pr-16">
            <footer className="footer bg-[#E6E6E6] text-base-content py-16 px-10 lg:px-0">
                <aside className="px-16">
                    <p className="lg:w-[454px] font-nantes text-4xl font-normal">
                        Experience remarkable
                        WordPress products with a
                        new level of power, beauty,
                        and human-centered designs.
                    </p>
                    <div className="lg:mt-[278px]">
                        <div className="flex gap-4 font-messina text-sm font-bold text-[#9FA0A1]">
                            <p>©2024</p>
                            <a>Terms of Use</a>
                            <a>Privacy Policy</a>
                        </div>
                        <p className="lg:w-[517px] mt-4 font-messina text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaera </p>
                    </div>
                </aside>
                <nav>
                    <h6 className="font-messina text-xl font-bold text-[#9FA0A1]">Jump to</h6>
                    <a className="link link-hover font-neue text-xl font-normal text-[#115CD9]">About Us</a>
                    <a className="link link-hover font-neue text-xl font-normal text-[#115CD9]">Portfolio</a>
                    <a className="link link-hover font-neue text-xl font-normal text-[#115CD9]">News</a>
                    <a className="link link-hover font-neue text-xl font-normal text-[#115CD9]">Stories</a>
                    <a className="link link-hover font-neue text-xl font-normal text-[#115CD9]">Jobs</a>
                    <a className="link link-hover font-neue text-xl font-normal text-[#115CD9]">About Us</a>
                </nav>
                <div>
                    <div>
                        <h6 className="footer-title font-messina text-xl font-bold text-[#191618]">Legal</h6>
                        <p className="font-messina text-xl font-normal text-[#191618] w-[213px]">70728 Yost Burg, North Magdaleneview, UT 97952-2814</p>
                        <hr className="border-[#9FA0A1] w-[258px] mt-[30px]" />
                    </div>
                    <div className="mt-6">
                        <h6 className="footer-title font-messina text-xl font-bold text-[#191618]">London</h6>
                        <p className="font-messina text-xl font-normal text-[#191618] w-[303px]">Suite 292 903 Stehr Streets, Langworthtown, SC 94577-9465</p>
                        <hr className="border-[#9FA0A1] w-[258px] mt-[30px]" />
                    </div>
                    <div className="mt-6">
                        <h6 className="footer-title font-messina text-xl font-bold text-[#191618]">San Francisco</h6>
                        <p className="font-messina text-xl font-normal text-[#191618] w-[238px]">19837 Gilberto Lodge, Lake Kendallville, Colorado - 97392, Bhutan</p>
                        <hr className="border-[#9FA0A1] w-[258px] mt-[30px]" />
                    </div>
                    <div className="flex gap-5 mt-6">
                        <BsLinkedin className="text-4xl text-[#9FA0A1]" />
                        <FaTwitter className="text-4xl text-[#9FA0A1]" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;