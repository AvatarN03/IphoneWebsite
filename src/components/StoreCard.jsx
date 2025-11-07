import React from "react";

const StoreCard = ({ box }) => {
  return (
    <div className="h-[400px] w-[300px] md:h-[600px] md:w-[400px] flex-shrink-0 relative rounded-3xl overflow-hidden bg-gray-900">
      <div className="w-full h-full">
        <img
          src={box.img}
          alt={box.title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div
        className={`absolute top-2 left-0 right-0 z-10 p-6 ${
          box.clss ? "text-white" : "text-black"
        }`}
      >
        <h3 className="text-2xl md:text-4xl font-bold">{box.title}</h3>
        <p className="mt-2 font-bold max-w-[250px] rounded">
          {box.desc}
        </p>
        <p className="mt-2">{box.price}</p>
      </div>
    </div>
  );
};

export default StoreCard;
