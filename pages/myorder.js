import React from "react";
import Layout from "../components/Layout";
import Lottie from "lottie-react";
import noorders from "/public/noorders.json"
import { useReadRepairOrderQuery } from "../app/store/apiSlice";

export default function MyOrder() {
    const {data,error,isLoading} = useReadRepairOrderQuery()
    console.log(data,error);
    return (
        <section className="myorder md:min-h-[50vh] min-h-[40vh] mt-4 lg:mt-8">
            <div className="container">
                {/* this show if order is none  change flex with hidden if there's order*/}
                {/* <div className="flex md:min-h-[50vh] min-h-[40vh] items-center justify-center">
                    <div>
                        <div className="max-w-[450px] w-4/5 mx-auto">
                            <Lottie animationData={noorders} loop={true} width={"100%"} />
                        </div>
                        <div className="text-primary -mt-6 md:-mt-10 text-xl md:text-3xl rounded-md text-center capitalize"><p>there's no order</p></div>
                    </div>
                </div> */}
                {/* end here */}
                {/* this show if user has order  change grid to hidden if there's no order*/}
                <div className="grid-cols-2 grid gap-12 my-2 ">
                    <div className="col-span-2 lg:col-span-1 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-primaryLight py-4 px-6">
                            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
                                <p className="text-lg font-medium  text-secondary">Booking ID: <span className="text-primary">ELKD42333</span></p>
                                <div>
                                    <p className="text-sm text-secondary font-medium">Status: <span className="text-primary">In Progress</span></p>
                                    <p className="text-sm text-secondary font-medium">date: <span className="text-primary">22-12-2022</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 px-6 bg-white">
                            <div className="grid grid-cols-2 gap-4">
                                <p className="col-span-2 sm:col-span-1">Technician: <span className="text-primary">XYZ</span></p>
                                <p className="col-span-2 sm:col-span-1">Time Slot: <span className="text-primary">01:00pm to 04:00pm</span></p>
                                <p className="col-span-2 sm:col-span-1">Repair Date: <span className="text-primary">22-12-2022</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Brand: <span className="text-primary">Apple</span></p>
                                <p className="col-span-2 sm:col-span-1">IEMI NO: <span className="text-primary">123456789012345</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Model: <span className="text-primary">iphone 12 pro max</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Model: <span className="text-primary">iphone 12 pro max</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Color: <span className="text-primary">White</span></p>
                                <p className="col-span-2">Issue With Phone: <span className="text-primary">Screen Broken</span></p>
                                <hr className="col-span-2"/>
                            </div>
                            <button className="brand-btn mt-4">Download Invoice</button>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-primaryLight py-4 px-6">
                            <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
                                <p className="text-lg font-medium  text-secondary">Booking ID: <span className="text-primary">ELKD42333</span></p>
                                <div>
                                    <p className="text-sm text-secondary font-medium">Status: <span className="text-primary">In Progress</span></p>
                                    <p className="text-sm text-secondary font-medium">date: <span className="text-primary">22-12-2022</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="py-4 px-6 bg-white">
                            <div className="grid grid-cols-2 gap-4">
                                <p className="col-span-2 sm:col-span-1">Technician: <span className="text-primary">XYZ</span></p>
                                <p className="col-span-2 sm:col-span-1">Time Slot: <span className="text-primary">01:00pm to 04:00pm</span></p>
                                <p className="col-span-2 sm:col-span-1">Repair Date: <span className="text-primary">22-12-2022</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Brand: <span className="text-primary">Apple</span></p>
                                <p className="col-span-2 sm:col-span-1">IEMI NO: <span className="text-primary">123456789012345</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Model: <span className="text-primary">iphone 12 pro max</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Model: <span className="text-primary">iphone 12 pro max</span></p>
                                <p className="col-span-2 sm:col-span-1">Mobile Color: <span className="text-primary">White</span></p>
                                <p className="col-span-2">Issue With Phone: <span className="text-primary">Screen Broken</span></p>
                                <hr className="col-span-2"/>
                            </div>
                            <button className="brand-btn mt-4">Download Invoice</button>
                        </div>
                    </div>
                </div>
                {/* end here  */}
            </div>
        </section>
    );
}

MyOrder.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
