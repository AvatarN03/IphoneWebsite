import React from "react";

const StoreCard = ({ box, additionalCls = false }) => {
  return (
    <div className={`h-[420px] box-gsap-reverse w-[300px] md:h-[600px] ${additionalCls ? "md:w-[500px]" : "md:w-[400px]"} flex-shrink-0 relative rounded-3xl overflow-hidden bg-gray-900`}>
      <div className="w-full h-full pointer-events-none ">
        <img
          src={box.img}
          alt={box.title}
          className="w-full h-full object-cover object-center "
        />
      </div>
      <div
        className={`absolute top-2 left-0 right-0 z-10 p-3 md:p-6 ${
          box.clss ? "text-white" : "text-black"
        }`}
      >
        {additionalCls && <p className="mb-2 uppercase font-bold text-gray-700 text-sm tracking-wide">{box.desc2}</p>}

        <h3 className="text-xl md:text-4xl font-bold">{box.title}</h3>
        <p className="mt-2 text-base font-medium  rounded">{box.desc1}</p>
        {!additionalCls && <p className="mt-2">{box.desc2}</p>}
      </div>
    </div>
  );
};

export default StoreCard;
