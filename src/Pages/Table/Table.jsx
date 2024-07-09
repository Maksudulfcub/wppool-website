import { IoMdArrowDropdown } from "react-icons/io";

const Table = () => {
    return (
        <div className="px-6 mt-[60px] ">
            <div className="p-7 bg-white rounded-2xl">
                <div className="lg:flex flex-row-reverse justify-between items-center">
                    <div className="lg:w-[588px]">
                        <label className="input input-bordered bg-[#F3F3F3] flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-6 w-6 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input type="text" className="grow font-nantes text-2xl text-[#191618]" placeholder="Search Companies" />
                        </label>
                    </div>
                    <h2 className="font-nantes text-5xl text-[#191618] mt-4 lg:mt-0">All Companies</h2>
                </div>
                <div>
                    <div className="overflow-x-auto lg:mt-[52px]">
                        <div className="scrollbar  h-[438px] overflow-y-scroll">
                            <div className="h-64">
                                <table className="table table-xs table-pin-rows table-pin-cols">
                                    <thead>
                                        <tr className="font-messina text-sm font-normal text-black">
                                            <td className="font-bold text-base text-black">Company</td>
                                            <td className="flex items-center gap-1 mt-1">Ticker <IoMdArrowDropdown /></td>
                                            <td className="text-left">Vertical</td>
                                            <td className="text-center">Price</td>
                                            <td className="text-center">Market Cap ($B)</td>
                                            <td className="text-center">Revenue Growth</td>
                                            <td className="text-center">Gross Margin</td>
                                            <td className="text-center">EV/Revenue</td>
                                            <td className="text-center">YTD Performance</td>
                                        </tr>
                                    </thead>
                                    <tbody className="font-nantes text-base font-normal text-black">
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Adyen</td>
                                            <td>AFRM</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$17.15</td>
                                            <td className="text-center">$50.5</td>
                                            <td className="text-center">49.0%</td>
                                            <td className="text-center">15.8%</td>
                                            <td className="text-center">6.3</td>
                                            <td className="text-center">24.3%</td>
                                        </tr>
                                        <tr>
                                            <td>Affirm</td>
                                            <td>AFRM</td>
                                            <td className="text-left">Lending</td>
                                            <td className="text-center">$16.12</td>
                                            <td className="text-center">$4.7</td>
                                            <td className="text-center">32.0%</td>
                                            <td className="text-center">48.7%</td>
                                            <td className="text-center">4.9</td>
                                            <td className="text-center">77.1%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Alkami Technology</td>
                                            <td>ALKT</td>
                                            <td className="text-left">B2B SaaS</td>
                                            <td className="text-center">$16.27</td>
                                            <td className="text-center">$1.5</td>
                                            <td className="text-center">34.0%</td>
                                            <td className="text-center">53.0%</td>
                                            <td className="text-center">7.0</td>
                                            <td className="text-center">10.0%</td>
                                        </tr>
                                        <tr>
                                            <td>AvidXchange</td>
                                            <td>AVDX</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$10.21</td>
                                            <td className="text-center">$2.0</td>
                                            <td className="text-center">27.0%</td>
                                            <td className="text-center">61.5%</td>
                                            <td className="text-center">6.0</td>
                                            <td className="text-center">10.5%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Bakkt Holdings</td>
                                            <td>BKKT</td>
                                            <td className="text-left">Wealth</td>
                                            <td className="text-center">$1.32</td>
                                            <td className="text-center">$0.1</td>
                                            <td className="text-center">38.0%</td>
                                            <td className="text-center">--</td>
                                            <td className="text-center">0.4</td>
                                            <td className="text-center">13.8%</td>
                                        </tr>
                                        <tr>
                                            <td>Virtu Financial Inc</td>
                                            <td>VIRT</td>
                                            <td className="text-left">Wealth</td>
                                            <td className="text-center">$17.0</td>
                                            <td className="text-center">$3.1</td>
                                            <td className="text-center">-22.0%</td>
                                            <td className="text-center">38.2%</td>
                                            <td className="text-center">2.6</td>
                                            <td className="text-center">-17.8%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Adyen</td>
                                            <td>AFRM</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$17.15</td>
                                            <td className="text-center">$50.5</td>
                                            <td className="text-center">49.0%</td>
                                            <td className="text-center">15.8%</td>
                                            <td className="text-center">6.3</td>
                                            <td className="text-center">24.3%</td>
                                        </tr>
                                        <tr>
                                            <td>Affirm</td>
                                            <td>AFRM</td>
                                            <td className="text-left">Lending</td>
                                            <td className="text-center">$16.12</td>
                                            <td className="text-center">$4.7</td>
                                            <td className="text-center">32.0%</td>
                                            <td className="text-center">48.7%</td>
                                            <td className="text-center">4.9</td>
                                            <td className="text-center">77.1%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Alkami Technology</td>
                                            <td>ALKT</td>
                                            <td className="text-left">B2B SaaS</td>
                                            <td className="text-center">$16.27</td>
                                            <td className="text-center">$1.5</td>
                                            <td className="text-center">34.0%</td>
                                            <td className="text-center">53.0%</td>
                                            <td className="text-center">7.0</td>
                                            <td className="text-center">10.0%</td>
                                        </tr>
                                        <tr>
                                            <td>AvidXchange</td>
                                            <td>AVDX</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$10.21</td>
                                            <td className="text-center">$2.0</td>
                                            <td className="text-center">27.0%</td>
                                            <td className="text-center">61.5%</td>
                                            <td className="text-center">6.0</td>
                                            <td className="text-center">10.5%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>PayPal</td>
                                            <td>PYPL</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$250.00</td>
                                            <td className="text-center">$5.5</td>
                                            <td className="text-center">15.0%</td>
                                            <td className="text-center">45.0%</td>
                                            <td className="text-center">4.5</td>
                                            <td className="text-center">12.0%</td>
                                        </tr>
                                        <tr>
                                            <td>Square</td>
                                            <td>SQ</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$220.50</td>
                                            <td className="text-center">$4.8</td>
                                            <td className="text-center">22.5%</td>
                                            <td className="text-center">55.5%</td>
                                            <td className="text-center">5.5</td>
                                            <td className="text-center">14.0%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Stripe</td>
                                            <td>PRIVATE</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$380.00</td>
                                            <td className="text-center">$6.3</td>
                                            <td className="text-center">18.5%</td>
                                            <td className="text-center">50.0%</td>
                                            <td className="text-center">6.8</td>
                                            <td className="text-center">11.5%</td>
                                        </tr>
                                        <tr>
                                            <td>Adyen</td>
                                            <td>ADYEN</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$1800.00</td>
                                            <td className="text-center">$12.5</td>
                                            <td className="text-center">35.0%</td>
                                            <td className="text-center">70.5%</td>
                                            <td className="text-center">7.2</td>
                                            <td className="text-center">9.0%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Worldline</td>
                                            <td>WLN</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$120.00</td>
                                            <td className="text-center">$3.0</td>
                                            <td className="text-center">28.0%</td>
                                            <td className="text-center">60.0%</td>
                                            <td className="text-center">5.0</td>
                                            <td className="text-center">13.5%</td>
                                        </tr>
                                        <tr>
                                            <td>Fiserv</td>
                                            <td>FISV</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$110.75</td>
                                            <td className="text-center">$2.5</td>
                                            <td className="text-center">20.0%</td>
                                            <td className="text-center">50.5%</td>
                                            <td className="text-center">6.5</td>
                                            <td className="text-center">10.0%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Global Payments</td>
                                            <td>GPN</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$190.50</td>
                                            <td className="text-center">$4.2</td>
                                            <td className="text-center">25.0%</td>
                                            <td className="text-center">62.0%</td>
                                            <td className="text-center">6.2</td>
                                            <td className="text-center">14.5%</td>
                                        </tr>
                                        <tr>
                                            <td>Visa</td>
                                            <td>V</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$220.75</td>
                                            <td className="text-center">$5.8</td>
                                            <td className="text-center">30.0%</td>
                                            <td className="text-center">65.5%</td>
                                            <td className="text-center">6.5</td>
                                            <td className="text-center">12.5%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Mastercard</td>
                                            <td>MA</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$360.00</td>
                                            <td className="text-center">$7.5</td>
                                            <td className="text-center">33.5%</td>
                                            <td className="text-center">70.0%</td>
                                            <td className="text-center">7.0</td>
                                            <td className="text-center">11.0%</td>
                                        </tr>
                                        <tr>
                                            <td>Payoneer</td>
                                            <td>PAYO</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$8.50</td>
                                            <td className="text-center">$1.5</td>
                                            <td className="text-center">22.0%</td>
                                            <td className="text-center">48.5%</td>
                                            <td className="text-center">5.5</td>
                                            <td className="text-center">10.0%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Afterpay</td>
                                            <td>AFTPF</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$125.00</td>
                                            <td className="text-center">$3.2</td>
                                            <td className="text-center">26.0%</td>
                                            <td className="text-center">60.0%</td>
                                            <td className="text-center">6.3</td>
                                            <td className="text-center">13.0%</td>
                                        </tr>
                                        <tr>
                                            <td>Block</td>
                                            <td>SQ</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$240.00</td>
                                            <td className="text-center">$5.7</td>
                                            <td className="text-center">28.0%</td>
                                            <td className="text-center">63.0%</td>
                                            <td className="text-center">6.8</td>
                                            <td className="text-center">12.0%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Affirm</td>
                                            <td>AFRM</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$22.50</td>
                                            <td className="text-center">$2.3</td>
                                            <td className="text-center">21.0%</td>
                                            <td className="text-center">52.0%</td>
                                            <td className="text-center">5.0</td>
                                            <td className="text-center">11.5%</td>
                                        </tr>
                                        <tr>
                                            <td>Marqeta</td>
                                            <td>MQ</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$14.50</td>
                                            <td className="text-center">$1.9</td>
                                            <td className="text-center">24.0%</td>
                                            <td className="text-center">58.0%</td>
                                            <td className="text-center">5.3</td>
                                            <td className="text-center">10.5%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>SoFi</td>
                                            <td>SOFI</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$16.75</td>
                                            <td className="text-center">$2.2</td>
                                            <td className="text-center">27.5%</td>
                                            <td className="text-center">62.0%</td>
                                            <td className="text-center">6.0</td>
                                            <td className="text-center">12.5%</td>
                                        </tr>
                                        <tr>
                                            <td>Remitly</td>
                                            <td>RELY</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$25.00</td>
                                            <td className="text-center">$2.8</td>
                                            <td className="text-center">23.0%</td>
                                            <td className="text-center">57.0%</td>
                                            <td className="text-center">5.7</td>
                                            <td className="text-center">11.0%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Chime</td>
                                            <td>PRIVATE</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$30.50</td>
                                            <td className="text-center">$3.1</td>
                                            <td className="text-center">29.0%</td>
                                            <td className="text-center">65.0%</td>
                                            <td className="text-center">6.3</td>
                                            <td className="text-center">12.0%</td>
                                        </tr>
                                        <tr>
                                            <td>Venmo</td>
                                            <td>PRIVATE</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$45.00</td>
                                            <td className="text-center">$4.5</td>
                                            <td className="text-center">31.0%</td>
                                            <td className="text-center">68.0%</td>
                                            <td className="text-center">6.8</td>
                                            <td className="text-center">13.5%</td>
                                        </tr>
                                        <tr className="bg-[#F3F3F3]">
                                            <td>Revolut</td>
                                            <td>PRIVATE</td>
                                            <td className="text-left">Payments</td>
                                            <td className="text-center">$60.75</td>
                                            <td className="text-center">$5.6</td>
                                            <td className="text-center">26.5%</td>
                                            <td className="text-center">60.5%</td>
                                            <td className="text-center">5.9</td>
                                            <td className="text-center">10.5%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-14 text-center">
                <div className="lg:space-x-3 space-y-3">
                    <button className="p-4 font-messina font-light rounded-full hover:duration-500 border-none shadow-lg text-white hover:border-[#2042B6] bg-[#2042B6]">Download ‘All Companies’ Data</button>
                    <button className="p-4 px-8 font-messina font-light rounded-full hover:duration-500 border-none shadow-lg text-white hover:border-[#2042B6] bg-[#2042B6]">View Methodology</button>
                </div>
            </div>
        </div>
    );
};

export default Table;