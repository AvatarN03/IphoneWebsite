import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  view1,
  view2,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    view1,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
  timeline.to(
    view2,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};


export const animateWithGsap = (target, animationProps, scrollProps)=>{
  gsap.to(target, {
    ...animationProps,
    scrollTrigger:{
      trigger: target,
      toggleActions:"restart reverse restart reverse",
      start:'top 85%',
      ...scrollProps
    }
  })
}