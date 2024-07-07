import img from "../../images/homepage/banner.png"
import img2 from "../../images/homepage/rectangle.png"

const Banner = () => {
    return (
        <div className=" min-h-screen lg:p-11 bg-[#2042B6]">
            <div className="hero">
                <div className="relative">
                    <img className="bg-blend-darken opacity-60 mx-auto min-h-screen pt-60" src={img} alt="" />
                    <img className="absolute top-40 lg:mx-20 min-h-screen" src={img2} alt="" />
                </div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="">
                        <h1 className="text-[78px] font-nantes">The WPPOOL Index</h1>
                        <p className="mt-2 font-messina text-xl">Monitor the performance of emerging, publicly traded, financial technology companies</p>
                    </div>
                </div>
            </div>
            <div className="-mt-80 space-y-10">
                <div>
                    <h2 className="font-nantes text-white text-4xl">60</h2>
                    <p className="font-neue text-base text-[#CDCDCD]">Companies</p>
                </div>
                <div>
                    <h2 className="font-nantes text-white text-4xl">$100B</h2>
                    <p className="font-neue text-base text-[#CDCDCD]">Market cap</p>
                </div>
                <div>
                    <h2 className="font-nantes text-white text-4xl">3.5x</h2>
                    <p className="font-neue text-base text-[#CDCDCD]">Revenue multiple</p>
                </div>
                <div>
                    <h2 className="font-nantes text-white text-4xl">60%</h2>
                    <p className="font-neue text-base text-[#CDCDCD]">LTM avg. revenue growth rate</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;