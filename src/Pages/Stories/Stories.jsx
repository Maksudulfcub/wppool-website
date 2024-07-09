import img1 from "../../images/homepage/shagor.png";
import img2 from "../../images/homepage/nayem.png";
import carrot from "../../images/homepage/carrot.png";

const Stories = () => {
    return (
        <div className="lg:mt-48 mt-10 px-16">
            <div>
                <h1 className="font-nantes text-5xl font-normal text-[#191618]">Stories & Ideas</h1>
                <p className="font-messina text-base font-light text-[#191618] lg:w-[880px] mt-5">The latest news and updates</p>
            </div>
            <div className="lg:flex gap-9">
                <div className="bg-white lg:h-[220px] h-[235px] rounded-xl p-5 relative mt-[94px] hover:duration-300 hover:bg-blue-200">
                    <img className="absolute -top-14 left-2" src={img1} alt="" />
                    <div className="mt-[60px]">
                        <p className="font-messina text-sm font-normal text-[#2042B6]">By: Sahabuddin Sagor</p>
                        <p className="font-nantes text-base font-normal text-[#191618] lg:w-[323px] mt-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                        <button className="px-3 py-[10px] bg-[#2042B6] text-white font-neue text-sm font-normal rounded-full mt-[14px]">Read More</button>
                    </div>
                </div>
                <div className="bg-white lg:h-[220px] h-[235px] rounded-xl p-5 relative mt-[94px] hover:duration-300 hover:bg-blue-200">
                    <img className="absolute -top-14 left-2" src={img2} alt="" />
                    <div className="mt-[60px]">
                        <p className="font-messina text-sm font-normal text-[#2042B6]">By: Nayem Khan</p>
                        <p className="font-nantes text-base font-normal text-[#191618] lg:w-[323px] mt-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                        <button className="px-3 py-[10px] bg-[#2042B6] text-white font-neue text-sm font-normal rounded-full mt-[14px]">Read More</button>
                    </div>
                </div>
                <div className="bg-white lg:h-[220px] h-[235px] rounded-xl p-5 relative mt-[94px] hover:duration-300 hover:bg-blue-200">
                    <div className="relative">
                        <img className="absolute z-10 w-16 p-[6px] bg-white -top-[75px] left-1 rounded-tl-md rounded-br-md" src={carrot} alt="" />
                        <img className="absolute -top-[75px] -left-2" src={img1} alt="" />
                    </div>
                    <div className="mt-[60px]">
                        <p className="font-messina text-sm font-normal text-[#2042B6]">By: Sahabuddin Sagor</p>
                        <p className="font-nantes text-base font-normal text-[#191618] lg:w-[323px] mt-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                        <button className="px-3 py-[10px] bg-[#2042B6] text-white font-neue text-sm font-normal rounded-full mt-[14px]">Read More</button>
                    </div>
                </div>
            </div>
            <div className="lg:flex gap-9">
                <div className="bg-white lg:h-[220px] h-[235px] rounded-xl p-5 relative mt-[94px] hover:duration-300 hover:bg-blue-200">
                    <img className="absolute -top-14 left-2" src={img1} alt="" />
                    <div className="mt-[60px]">
                        <p className="font-messina text-sm font-normal text-[#2042B6]">By: Sahabuddin Sagor</p>
                        <p className="font-nantes text-base font-normal text-[#191618] lg:w-[323px] mt-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                        <button className="px-3 py-[10px] bg-[#2042B6] text-white font-neue text-sm font-normal rounded-full mt-[14px]">Read More</button>
                    </div>
                </div>
                <div className="bg-white lg:h-[220px] h-[235px] rounded-xl p-5 relative mt-[94px] hover:duration-300 hover:bg-blue-200">
                    <img className="absolute -top-14 left-2" src={img2} alt="" />
                    <div className="mt-[60px]">
                        <p className="font-messina text-sm font-normal text-[#2042B6]">By: Nayem Khan</p>
                        <p className="font-nantes text-base font-normal text-[#191618] lg:w-[323px] mt-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                        <button className="px-3 py-[10px] bg-[#2042B6] text-white font-neue text-sm font-normal rounded-full mt-[14px]">Read More</button>
                    </div>
                </div>
                <div className="bg-white lg:h-[220px] h-[235px] rounded-xl p-5 relative mt-[94px] hover:duration-300 hover:bg-blue-200">
                    <div className="relative">
                        <img className="absolute z-10 w-16 p-[6px] bg-white -top-[75px] left-1 rounded-tl-md rounded-br-md" src={carrot} alt="" />
                        <img className="absolute -top-[75px] -left-2" src={img1} alt="" />
                    </div>
                    <div className="mt-[60px]">
                        <p className="font-messina text-sm font-normal text-[#2042B6]">By: Sahabuddin Sagor</p>
                        <p className="font-nantes text-base font-normal text-[#191618] lg:w-[323px] mt-[2px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.</p>
                        <button className="px-3 py-[10px] bg-[#2042B6] text-white font-neue text-sm font-normal rounded-full mt-[14px]">Read More</button>
                    </div>
                </div>
            </div>
            <hr className="border-[#90B8F0] lg:w-[1180px] lg:mt-[100px] mt-10" />
        </div>
    );
};

export default Stories;