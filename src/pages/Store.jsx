import React, { useRef, useState, useEffect } from "react";
import { storeBox1, storeBox2, storeItems } from "../constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StoreCard from "../components/StoreCard";
import { useDragScroll } from "../utils/useDragScroll";
import Footer from "../components/Footer";

const Store = () => {
  const scrollRef = useDragScroll();
  const scrollContainerRef = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        updateArrowVisibility();
      }, 300);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;

      container.scrollBy({
        left: -scrollAmount, // Fixed: should be negative for left scroll
        behavior: "smooth",
      });

      setTimeout(() => {
        updateArrowVisibility();
      }, 300);
    }
  };

  const updateArrowVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      
      // Show left arrow only if scrolled from the start
      setShowLeftArrow(scrollLeft > 10);
      
      // Show right arrow only if not reached the end
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = () => {
    updateArrowVisibility();
  };

  // Initialize arrow visibility on component mount
  useEffect(() => {
    updateArrowVisibility();
  }, []);

  return (
    <div className="min-h-screen p-4 max-w-7xl mx-auto w-full overflow-hidden relative">
      <section className="py-4 my-8">
        <div className="flex justify-between items-start md:items-center flex-col md:flex-row px-2">
          <h2 className="text-5xl md:text-6xl font-bold">Store</h2>
          <p className="font-medium max-w-[350px] text-left md:text-right text-xl md:text-2xl mt-5">
            The best way to buy the products you love.
          </p>
        </div>
        <div className="relative my-8 pt-8">
          {/* Fixed Arrow */}
          <div className="block md:hidden absolute right-2 top-2 z-10">
            <ArrowRight className="text-white hover:bg-gray-900 animate-side cursor-pointer" />
          </div>

          {/* Scrollable Container */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
            {storeItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col flex-shrink-0 gap-1 items-center bg-gray-800 p-2 rounded-lg min-w-[100px]"
              >
                <img
                  src={`/assets/images/store/${item}.png`}
                  alt={item}
                  className="w-16 h-12 md:w-24 md:h-16 object-contain"
                />
                <p className="text-sm tracking-wide text-center">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-2 md:p-4">
        <h3 className="text-2xl md:text-4xl">
          The latest.{" "}
          <span className="text-slate-500">
            Take a look at what's new right there
          </span>
        </h3>
        <div
          ref={scrollRef}
          className="w-full flex gap-4 overflow-x-auto scrollbar-hide my-8 pb-4 [&>div]:flex-shrink-0 select-none cursor-grab active:cursor-grabbing"
        >
          {storeBox1.map((box, index) => (
            <StoreCard key={index} box={box} />
          ))}
        </div>
      </section>

      <section className="p-2 md:p-4 relative">
        <h3 className="text-2xl md:text-4xl">
          Help is here.{" "}
          <span className="text-slate-500">
            Whenever and however you need it.
          </span>
        </h3>

        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-30 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-30 hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-6 h-6 text-gray-600" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full flex gap-8 overflow-x-auto scrollbar-hide my-8 pb-4 "
        >
          {storeBox2.map((box, index) => (
            <StoreCard key={index} box={box} additionalCls={true} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;