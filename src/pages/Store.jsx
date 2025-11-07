import React from "react";
import { storeBox, storeItems } from "../constants";
import { ArrowRight } from "lucide-react";
import StoreCard from "../components/StoreCard";
import { useDragScroll } from "../utils/useDragScroll";
import Footer from "../components/Footer";

const Store = () => {
  const scrollRef = useDragScroll();
  return (
    <div className="min-h-screen p-4 max-w-7xl mx-auto w-full overflow-hidden relative">
      <section className="py-4 my-8">
        <h2 className="text-5xl md:text-6xl font-bold">Store</h2>
        <p className="font-semibold text-xl md:text-2xl mt-5">The best way to buy the products you love.</p>
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
          {storeBox.map((box, index) => (
            <StoreCard key={index} box={box} />
          ))}
        </div>
      </section>
      <Footer /> 
    </div>
  );
};

export default Store;
