import stripe from "../../images/future-listing/stripe.png";
import klarna from "../../images/future-listing/klarna.png";
import plaid from "../../images/future-listing/plaid.png";
import checkout from "../../images/future-listing/checkout.png";
import revolut from "../../images/future-listing/revolut.png";
import chime from "../../images/future-listing/chime.png";
import n26 from "../../images/future-listing/n26.png";
import brex from "../../images/future-listing/brex.png";
import deel from "../../images/future-listing/deel.png";
import gusto from "../../images/future-listing/gusto.png";


const FutureListing = () => {
    return (
        <div className="lg:mt-[151px] mt-10 px-16">
            <div>
                <h1 className="font-nantes text-5xl font-normal text-[#191618]">Potential Future Listings</h1>
                <p className="font-messina text-base font-light text-[#191618] lg:w-[880px] mt-5">Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:mt-6 mt-3">
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto" src={stripe} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto mt-3" src={klarna} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto" src={plaid} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto mt-5" src={checkout} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto mt-3" src={revolut} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto mt-2" src={chime} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto" src={n26} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto mt-3" src={brex} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto mt-2" src={deel} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-sky-100">
                    <img className="mx-auto mt-2" src={gusto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FutureListing;