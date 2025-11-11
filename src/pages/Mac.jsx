import React, { useState, useRef, useEffect } from "react";
import { ArrowRightCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { macBox, tabs } from "../constants";
import Footer from "../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const Mac = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const tabRefs = useRef([]);
  const scrollContainerRef = useRef(null);



  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const activeTabElement = tabRefs.current[activeTab];
      const { offsetLeft, offsetWidth } = activeTabElement;

      setIndicatorStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 200;

      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        updateArrowVisibility();
      }, 300);
    }
  };

  const updateArrowVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = () => {
    updateArrowVisibility();
  };

  useEffect(() => {
    updateArrowVisibility();
  }, []);

  useGSAP(() => {
    gsap.from(".scale-down", {
      scale: 2.9, // starts slightly larger (120%)
      x: "150%", // moves from right
      opacity: 0, // fades in
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


  // Filter products based on active tab
  const filterBox = macBox.filter((item) => {
    if (activeTab === 0) return true; 
    if (activeTab === 1) return item.type === "laptops"; 
    if (activeTab === 2) return item.type === "desktops"; 
    if (activeTab === 3) return item.type === "displays"; 
    return true;
  });
  return (
    <div className="p-4 w-screen min-h-screen max-w-7xl mx-auto">
      <section className="p-2 pt-4 md:pt-16">
        <h1 className="text-4xl md:text-7xl font-semibold scale-down">Mac</h1>
        <div className="my-12">
          <div className="relative">
            {/* Mobile Arrows */}
            <div className="md:hidden mb-2 flex justify-between items-center w-full px-2 ">
              {/* Left Arrow */}
              {showLeftArrow && (
                <button
                  onClick={() => scroll("left")}
                  className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
              )}

              {/* Right Arrow */}
              {showRightArrow && (
                <button
                  onClick={() => scroll("right")}
                  className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg hover:bg-white transition-colors ml-auto"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              )}
            </div>

            {/* Background container */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex px-3 md:px-8 gap-2 md:gap-8 justify-between py-2 w-full md:w-fit items-center bg-slate-600 rounded-full overflow-x-auto scrollbar-hide relative"
            >
              {/* Moving black background indicator */}
              <div
                className="absolute left-0 top-2 h-[75%] rounded-2xl bg-black transition-all duration-300 ease-in-out z-0"
                style={indicatorStyle}
              />

              {/* Tab buttons */}
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => setActiveTab(index)}
                  className={`font-medium transition-colors md:px-4 duration-200 hover:text-white whitespace-nowrap box-gsap p-2 relative z-20 flex-shrink-0 ${
                    activeTab === index
                      ? "text-white font-semibold"
                      : "text-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex my-8 justify-start items-stretch gap-6 flex-wrap">
            {filterBox.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 p-4 rounded-lg transition-all hover:-translate-y-2 ease-in-out  duration-300 w-80 max-w-full flex flex-col"
              >
                <div className="overflow-hidden w-full rounded-lg mb-4 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-col text-center gap-4 flex-grow">
                  <h2 className="text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <h5 className="font-bold text-sm">{item.desc1}</h5>
                  <p className="text-gray-400 flex-grow">{item.desc2}</p>
                  <h5 className="text-base max-w-52 mx-auto font-semibold text-white mt-auto">
                    {item.price}
                  </h5>
                </div>
                <div className="flex justify-around items-center my-10">
                  <button className="p-2 rounded-full bg-blue  hover:bg-blue/80  ">
                    Learn More
                  </button>
                  <button className="text-blue hover:text-blue/80">
                    Buy {">"}{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          If you can dream it, <br /> Mac can do it.
        </h1>

        <div className="relative w-full my-10">
          <div className="overflow-hidden w-full rounded-xl h-[600px]">
            <img
              src="/assets/images/mac-banner.jpg"
              alt="mac-banner"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute text-center w-full max-w-sm p-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 up">
            <h3 className="text-2xl font-semibold mb-2">
              Great ideas start here.
            </h3>
            <h6>See how Mac helps ideas come to life.</h6>
            <div className="flex justify-between items-center my-3">
              <button className="p-2 rounded-full bg-white hover:bg-white/80 text-black">
                Watch the film
              </button>
              <button className="flex items-center hover:bg-slate-800 gap-1 border-2 rounded-full p-2">
                Learn More <ArrowRightCircle />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mac;
