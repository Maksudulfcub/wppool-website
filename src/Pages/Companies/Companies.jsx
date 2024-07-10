import alibaba from "../../images/selected-companies/alibaba.png";
import vendr from "../../images/selected-companies/vendr.png";
import vestwell from "../../images/selected-companies/vestwell.png";
import snapdocs from "../../images/selected-companies/snapdocs.png";
import toast from "../../images/selected-companies/toast.png";
import connexpay from "../../images/selected-companies/connexpay.png";
import mineraltree from "../../images/selected-companies/mineraltree.png";
import flywire from "../../images/selected-companies/flywire.png";
import quovo from "../../images/selected-companies/quovo.png";
import spendesk from "../../images/selected-companies/spendesk.png";
import notabene from "../../images/selected-companies/notabene.png";
import recurly from "../../images/selected-companies/recurly.png";
import fireblocks from "../../images/selected-companies/fireblocks.png";
import kensho from "../../images/selected-companies/kensho.png";
import futureadvisor from "../../images/selected-companies/futureadvisor.png";
import argyle from "../../images/selected-companies/argyle.png";
import snapsheet from "../../images/selected-companies/snapsheet.png";


const Companies = () => {
    return (
        <div className="lg:mt-[126px] mt-10 px-16">
            <div>
                <h1 className="font-nantes text-5xl font-normal text-[#191618]">Selected WPPOOL Portfolio Companies</h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:mt-12 mt-3">
                <div className="px-4 py-12 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-5" src={alibaba} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-5" src={vendr} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-2" src={vestwell} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-7" src={snapdocs} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-5" src={vendr} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-7" src={snapdocs} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-2" src={toast} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-5" src={connexpay} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-5" src={connexpay} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto mt-3" src={mineraltree} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto mt-2" src={flywire} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto mt-2" src={quovo} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-5" src={spendesk} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-2" src={notabene} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-2" src={recurly} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-5" src={fireblocks} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-3" src={kensho} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-4" src={futureadvisor} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-1" src={argyle} alt="" />
                </div>
                <div className="p-10 bg-white rounded-lg hover:shadow-2xl hover:duration-500 hover:bg-slate-50">
                    <img className="mx-auto lg:mt-1" src={snapsheet} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Companies;