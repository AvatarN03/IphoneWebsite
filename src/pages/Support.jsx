import React from "react";
import Footer from "../components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Support = () => {
  useGSAP(() => {
    gsap.from(".scale-down", {
      scale: 2.9,
      opacity: 0,
      duration: 1.3,
      ease: "power3.inOut",
    });

    gsap.from(".box-gsap", {
      x: -150,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
      stagger: 0.4,
    });

  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <section className="p-4">
        <div className="rounded-md overflow-hidden pointer-events-none w-full h-[300px] md:h-[450px] lg:h-full scale-down">
          <img
            src="/assets/images/support/support-banner.jpg"
            alt="support banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="flex flex-col justify-end mt-32 items-center min-h-60">
          <h1 className="text-4xl md:text-5xl font-semibold text-center scale-down">
            Apple Support
          </h1>
          <div className="flex flex-wrap gap-12 my-20 justify-center">
            <div className="flex flex-col  text-center gap-2 box-gsap">
              <img
                src="/assets/images/support/support-phone.png"
                alt="img"
                className="w-10 md:w-16"
              />
              <h4 className="mt-auto font-medium">iPhone</h4>
            </div>
            <div className="flex flex-col text-center gap-2 box-gsap">
              <img
                src="/assets/images/support/support-airpod.png"
                alt="img"
                className="w-24 md:w-28"
              />
              <h4 className="mt-auto font-medium">AirPod</h4>
            </div>
            <div className="flex flex-col text-center gap-2 box-gsap">
              <img
                src="/assets/images/support/support-music.png"
                alt="img"
                className="w-20 md:w-24"
              />
              <h4 className="mt-auto font-medium">Music</h4>
            </div>
            <div className="flex flex-col text-center gap-2 box-gsap">
              <img
                src="/assets/images/support/support-tv.png"
                alt="img"
                className="w-20 md:w-24"
              />
              <h4 className="mt-auto font-medium">TV</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
