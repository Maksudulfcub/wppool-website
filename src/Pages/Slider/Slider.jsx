import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../images/homepage/slider-1.png";
import slide2 from "../../images/homepage/slider-2.png";
import slide3 from "../../images/homepage/slider-3.png";
import bg from "../../images/homepage/slider-bg.png";
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io';

const Slider = () => {

    return (
        <div className='lg:mt-[155px] mt-10 px-16 relative'>
            <div>
                <img className='absolute lg:right-36 right-10' src={bg} alt="" />
            </div>
            <div>
                <div>
                    <h1 className="font-nantes text-5xl font-normal text-[#191618]">State of USA</h1>
                    <div className='mt-5'>
                        <select className="select bg-[#2042B6] rounded-full border-none text-white font-nantes text-3xl">
                            <option className='px-7' disabled selected>2024</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                        </select>
                    </div>
                    <p className="font-messina text-base font-light text-[#191618] lg:w-[880px] mt-4">Click through the slides or download the report to view natively on your device.</p>
                </div>

                <div className='mt-5'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper">

                        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                    </Swiper>
                </div>

                <div className="lg:flex items-center justify-between mt-5">
                    <div className='flex'>
                        <div className='space-x-5 mr-8 flex'>
                            <button className="bg-white p-3 w-[56px] h-[56px] rounded-full shadow-xl">
                                <IoMdArrowBack className="text-xl mx-auto text-[#2042B6]" />
                            </button>
                            <button className="bg-white p-3 w-[56px] h-[56px] rounded-full shadow-xl">
                                <IoMdArrowForward className="text-xl mx-auto text-[#2042B6]" />
                            </button>
                        </div>
                        <div className='lg:flex gap-2 sm:block hidden'>
                            <p className="font-messina text-base font-light mt-3 text-[#191618]">Pages</p>
                            <div className="w-[131px] h-[56px]">
                                <select className="select w-full max-w-xs bg-white rounded-full border-none shadow-xl [text-[#191618] font-messina text-base font-light py-3">
                                    <option disabled selected>1 and 2</option>
                                    <option>2 and 3</option>
                                    <option>3 and 4</option>
                                    <option>4 and 5</option>
                                </select>
                            </div>
                            <p className="font-messina text-base font-light mt-3 text-[#191618]">of 37</p>
                        </div>
                    </div>
                    <div>
                        <button className="w-full lg:[240px] mt-4 lg:mt-0 p-4 px-8 mr-[163px] font-messina font-light rounded-full hover:duration-500 border-none shadow-xl text-white hover:border-[#2042B6] bg-[#2042B6]">Download the 2023 Report</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;