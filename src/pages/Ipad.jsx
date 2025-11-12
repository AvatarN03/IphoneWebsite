import React, { useState } from "react";
import { ipadBox1, ipadBox2 } from "../constants";
import { ChevronUp } from "lucide-react";
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const Ipad = () => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive((prev) => (prev === index ? (index == 2 ? 0 : prev + 1) : index));
  };

  useGSAP(() => {
    gsap.from(".scale-down", {
      scale: 2.9, 
      x: "150%", 
      opacity: 0, 
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.from(".box-gsap", {
      x: -150,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      stagger: 0.4,
    });

    gsap.from(".up", {
      y: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".up",
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);
  return (
    <>
      <div className="max-w-[1500px] mx-auto">
        <section className="p-4 ">
          <h1 className="text-5xl md:text-7xl font-semibold mt-12 md:mt-28 scale-down">
            iPad
          </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
  {ipadBox1.map((item, index) => (
    <div
      key={index}
      className="flex flex-col p-3 md:p-6 gap-4 bg-slate-900 rounded-[20px] box-gsap"
    >
      {/* Image */}
      <div className="w-full h-64 overflow-hidden rounded-[20px] shadow-blue-500/30 shadow-sm">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col text-center gap-4 p-3 flex-grow">
        <h2 className="text-2xl font-bold text-white">{item.title}</h2>
        <p className="font-thin text-gray-200 max-w-sm mx-auto">{item.desc}</p>
        <h4 className="font-bold text-blue-400">{item.price}</h4>

        {/* Buttons */}
        <div className="flex w-full justify-center gap-6 mt-auto mb-4">
          <button className="bg-blue-600 text-white font-medium px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
            Learn More
          </button>
          <button className="border-2 border-blue-600 text-blue-600 font-medium px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200">
            Buy &gt;
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        </section>
        <section className="p-4 my-14">
          <h1 className="text-4xl md:text67xl">Significant others.</h1>

          <div className="rounded-xl flex flex-col md:block h-fit md:h-[60vh] w-full p-4 md:p-8 bg-slate-900 my-12 relative up">
            <div className="max-w-sm p-2 md:p-4 h-full flex justify-center flex-col relative z-10">
              {ipadBox2.map((item, index) => (
                <div key={index} className="mb-6">
                  <div className={`md:p-3 ${index === 2 ? "" : "border-b-2"}`}>
                    <div
                      onClick={() => handleClick(index)}
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

            
            <div className="hidden md:block absolute top-1/2 right-5 -translate-y-1/2 rounded-md overflow-hidden md:w-[55%] md:max-w-2xl h-[400px]">
              <img
                src={ipadBox2[active >= 0 ? active : 0].image} 
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
