import img from "../../images/chart-section/Union.png";
import wppool from "../../images/chart-section/orange.png";
import google from "../../images/chart-section/blue.png";
import microsoft from "../../images/chart-section/green.png";
import twitter from "../../images/chart-section/purple.png";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import photo1 from "../../images/chart-section/Rectangle1.png"
import photo2 from "../../images/chart-section/Rectangle2.png"
import photo3 from "../../images/chart-section/Rectangle3.png"
import photo4 from "../../images/chart-section/Rectangle4.png"


const Index = () => {

    const data = [
        {
            "name": "Feb",
            "WPPOOL": 2000.5,
            "Google": 1400,
            "Microsoft": 400,
            "Twitter": 300,
            "amt": 2400
        },
        {
            "name": "Mar",
            "WPPOOL": 3500.2,
            "Google": 2000,
            "Microsoft": 2500,
            "Twitter": 3700,
            "amt": 2210
        },
        {
            "name": "Apr",
            "WPPOOL": 4000.8,
            "Google": 3400,
            "Microsoft": 4400,
            "Twitter": 3500,
            "amt": 2290
        },
        {
            "name": "May",
            "WPPOOL": 4500.8,
            "Google": 400,
            "Microsoft": 3400,
            "Twitter": 1500,
            "amt": 2000
        },
        {
            "name": "Jun",
            "WPPOOL": 6500.8,
            "Google": 3400,
            "Microsoft": 2400,
            "Twitter": 4500,
            "amt": 2181
        },
        {
            "name": "Jul",
            "WPPOOL": 3500.8,
            "Google": 2400,
            "Microsoft": 4400,
            "Twitter": 5500,
            "amt": 2500
        }
    ]

    return (
        <div className="px-6">
            <div className="flex mt-[60px] px-[23px] py-5 bg-white">
                <div className="bg-[#EFF3F6] min-h-screen w-1/5 p-3 space-y-2 font-nantes text-base">
                    <div className="collapse collapse-plus rounded-md shadow-lg">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-white bg-[#2042B6]">The index</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 rounded-md hover:bg-blue-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-[#647888]">The index tab two</div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200 rounded-md hover:bg-blue-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-[#647888]">The index tab three</div>
                    </div>
                </div>


                <div className="w-full p-6">
                    <div className="flex gap-1 items-center">
                        <img src={img} alt="" />
                        <h2 className="font-nantes text-4xl text-[#191618]">The WPPOOL Index</h2>
                    </div>
                    <div className="lg:flex lg:flex-row flex-col-reverse gap-8 mt-3">
                        <div className="flex gap-10 justify-between items-center p-[10px] bg-[#F3F3F3] rounded-lg">
                            <h2 className="font-nantes text-3xl text-[#FC714D]">+66.2%</h2>
                            <div className="flex gap-2">
                                <div className="text-right font-messina text-xs text-[#191618]">
                                    <p>WPPOOL</p>
                                    <p>Index</p>
                                </div>
                                <img src={wppool} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-10 justify-between items-center p-[10px] bg-[#F3F3F3] rounded-lg">
                            <h2 className="font-nantes text-3xl text-[#615DE3]">+26.6%</h2>
                            <div className="flex gap-2">
                                <div className="text-right font-messina text-xs text-[#191618]">
                                    <p>Google</p>
                                    <p>Index</p>
                                </div>
                                <img src={google} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-10 justify-between items-center p-[10px] bg-[#F3F3F3] rounded-lg">
                            <h2 className="font-nantes text-3xl text-[#7CA63A]">+34.1%</h2>
                            <div className="flex gap-2">
                                <div className="text-right font-messina text-xs text-[#191618]">
                                    <p>Microsoft</p>
                                    <p>Index</p>
                                </div>
                                <img src={microsoft} alt="" />
                            </div>
                        </div>
                        <div className="flex gap-10 justify-between items-center p-[10px] bg-[#F3F3F3] rounded-lg">
                            <h2 className="font-nantes text-3xl text-[#6F34A1]">+17%</h2>
                            <div className="flex gap-2">
                                <div className="text-right font-messina text-xs text-[#191618]">
                                    <p>Twitter</p>
                                    <p>Index</p>
                                </div>
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 lg:flex lg:flex-row flex-col-reverse justify-between">
                        <div className="flex gap-4">
                            <div className="w-[178px] h-6">
                                <select className="select w-full max-w-xs bg-[#2042B6] rounded-full border-none shadow-xl text-white font-messina text-xs">
                                    <option disabled selected>Sectors</option>
                                    <option>Homer</option>
                                    <option>Marge</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                            </div>
                            <div className="w-[178px] h-6">
                                <select className="select w-full max-w-xs bg-[#2042B6] rounded-full border-none shadow-xl text-white font-messina text-xs">
                                    <option disabled selected>Types of IPO</option>
                                    <option>Homer</option>
                                    <option>Marge</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-10 lg:mt-0">
                            <div className="flex font-messina text-xs gap-5 px-5 bg-[#EFF3F6] rounded-full items-center">
                                <p className="text-[#748DA1]">1Y</p>
                                <p className="text-[#748DA1]">YTD</p>
                                <p className="bg-[#2042B6] text-white px-5 py-4 rounded-3xl">6M</p>
                                <p className="text-[#748DA1]">1M</p>
                                <p className="text-[#748DA1]">1W</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 font-inter text-sm">
                        <div className="w-full h-96 md:h-128">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <XAxis dataKey="name"></XAxis>
                                    <YAxis></YAxis>
                                    <CartesianGrid stroke="#eee"></CartesianGrid>
                                    <Tooltip></Tooltip>
                                    <Line type="monotone" dataKey="WPPOOL" stroke="#FC714D"></Line>
                                    <Line type="monotone" dataKey="Google" stroke="#615DE3"></Line>
                                    <Line type="monotone" dataKey="Microsoft" stroke="#AFCD80"></Line>
                                    <Line type="monotone" dataKey="Twitter" stroke="#6F34A1"></Line>
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="font-messina text-xs lg:flex flex-row-reverse mx-auto gap-12 mt-7">
                            <div className="flex gap-5">
                                <div className="flex gap-2 items-center">
                                    <img className="h-3" src={photo3} alt="" />
                                    <p>Microsoft</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img className="h-3" src={photo4} alt="" />
                                    <p>Twitter</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <div className="flex gap-2 items-center">
                                    <img className="h-3" src={photo1} alt="" />
                                    <p>WPPOOL</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <img className="h-3" src={photo2} alt="" />
                                    <p>Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Index;