import React, { useState } from "react";
import { ipadBox1, ipadBox2 } from "../constants";
import { ChevronUp } from "lucide-react";
import Footer from "../components/Footer";

const Ipad = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive((prev) => (prev === index ? (index == 2 ? 0 : prev + 1) : index)); // toggle
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <section className="p-4 ">
          <h1 className="text-5xl md:text-7xl font-semibold mt-12 md:mt-28">iPad</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8 ">
            {ipadBox1.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-3 md:p-0  gap-4 bg-slate-900 rounded-[40px]"
              >
                <div className="w-full overflow-hidden rounded-[40px] shadow-blue shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-300 ease-in-out "
                  />
                </div>
                <div className="flex flex-col text-center gap-4 p-3">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="font-thin max-w-sm mx-auto">{item.desc}</p>
                  <h4 className="font-bold max-w-64 mx-auto">{item.price}</h4>

                  <div className="flex w-full justify-around items-center my-8">
                    <button className="bg-blue hover:bg-blue/80 cursor-pointer rounded-md p-2">
                      Learn More
                    </button>
                    <button className="border-blue p-2 rounded-md border-2">
                      Buy{">"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="p-4 my-14">
          <h1 className="text-4xl md:text67xl">Significant others.</h1>

          <div className="rounded-xl flex flex-col md:block h-fit md:h-[60vh] w-full p-4 md:p-8 bg-slate-900 my-12 relative">
            <div className="max-w-sm p-2 md:p-4 h-full flex justify-center flex-col relative z-10">
              {ipadBox2.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className={`md:p-3 ${index === 2 ? "" : "border-b-2"}`}>
                    <div
                      onClick={() => handleClick(index)} // pass index
                      className="flex justify-between items-center mb-4 cursor-pointer select-none"
                    >
                      <h1 className="text-xl font-semibold text-white">
                        {item.title}
                      </h1>
                      <button
                        aria-expanded={active === index}
                        className={`transition-transform duration-300 ease-in-out transform ${
                          active === index ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronUp className="size-8" />
                      </button>
                    </div>

                    {/* Paragraph with smooth expand */}
                    <div
                      className={
                        `overflow-hidden transition-all duration-700 ease-in-out ` +
                        (active === index
                          ? "h-fit  md:max-h-[200px] opacity-100 mt-2"
                          : "max-h-0 opacity-0")
                      }
                    >
                      <p className="font-normal leading-6 text-slate-300">
                        {item.desc}
                      </p>

                      {/* 👇 Image for mobile view (inside paragraph, visible only on small screens) */}
                      <div className="block  md:hidden my-4 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transition-all duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 👇 Image for desktop view (absolute on the right) */}
            <div className="hidden md:block absolute top-1/2 right-5 -translate-y-1/2 rounded-md overflow-hidden md:w-[55%] md:max-w-2xl h-[400px]">
              <img
                src={ipadBox2[active >= 0 ? active : 0].image} // fallback
                alt={ipadBox2[active >= 0 ? active : 0].title}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Ipad;
