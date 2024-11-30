import React from "react";
import Image from "../assest/Mask group.png";

function White() {
  return (
    <main className="bg-white p-8">
      <div style={{ fontFamily: "Italiana, serif" }}>
        <h1 className="text-[64px] text-center mb-12">Flying with Altitude</h1>
      </div>

      <div className="flex justify-between gap-8 ">
        <div className="w-1/3 space-y-8  justify-end text-right mt-16 mr-[-5%]" style={{ fontFamily: "Jura, sans-serif" }}>
          <div className="w-[280px] ">
            <h1 className="text-[25px] font-semibold">Seamless Flexibility</h1>
            <p className="text-[16px]">
              We accommodate and execute last-minute changes effortlessly, ensuring a smooth experience.
            </p>
          </div>
          <div className=" w-[280px] " style={{marginTop:"50%"}}>
            <h1 className="text-[25px] font-semibold">Exclusive Benefits</h1>
            <p className="text-[16px]">
              Receive a $500 credit towards ground transportation or catering with your first flight.
            </p>
          </div>
        </div>

        {/* Center Section with Image */}
        <div className="w-1/3 flex flex-col items-center w-[697px]">
          <img src={Image} alt="Flying with Altitude" className="w-full h-auto mb-8" />
          <div style={{ fontFamily: "Jura, sans-serif" }} className="text-center w-[310px]">
            <h1 className="text-[25px] font-semibold">Decades of Expertise</h1>
            <p className="text-[16px]">
              Over 37 years of private charter experience, setting the standard in personalized service.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 space-y-8 mt-16" style={{ fontFamily: "Jura, sans-serif" }}>
          <div className="w-[310px]">
            <h1 className="text-[25px] font-semibold">Rapid and Reliable</h1>
            <p className="text-[16px]">
              Get quotes in 2 hours, 24/7 availability, and book a flight in as little as 2 hours with expert international charter guidance.
            </p>
          </div>
          <div className="w-[310px]"  style={{marginTop:"50%"}}>
            <h1 className="text-[25px] font-semibold">Personalized Service</h1>
            <p className="text-[16px]">
              Enjoy one-on-one concierge-level care, speaking with a live consultant each time you call and working with the same expert for every booking.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default White;
