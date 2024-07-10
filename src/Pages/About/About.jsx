import img from "../../images/homepage/about-img.png";

const About = () => {
    return (
        <div className="lg:mt-[80px] mt-10 px-16">
            <div className="flex items-center bg-white rounded-2xl">
                <div className="lg:pl-[78px] sm:px-3 py-10">
                    <h1 className="font-nantes text-5xl font-normal text-[#191618]">About WPPOOL</h1>
                    <h2 className="font-nantes text-3xl font-normal text-[#7D7F81] mt-2">Investing in wppool for over 50 years</h2>
                    <p className="font-messina text-base font-light text-[#191618] lg:w-[622px] mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    <button className="px-4 py-3 bg-[#2042B6] text-white font-neue text-sm font-normal rounded-full mt-8 shadow-lg">Contact WPPOOL</button>
                </div>
                <div className="sm:block hidden">
                    <img src={img} alt="" />
                </div>
            </div>
            <hr className="border-[#90B8F0] lg:w-[1180px] lg:mt-[100px] mt-10" />
        </div>
    );
};

export default About;