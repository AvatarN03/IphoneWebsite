import { useRef, useEffect } from 'react';

export const useDragScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      scrollElement.classList.add('active');
      startX = e.pageX - scrollElement.offsetLeft;
      scrollLeft = scrollElement.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollElement.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollElement.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollElement.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      scrollElement.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    scrollElement.addEventListener('mousedown', handleMouseDown);
    scrollElement.addEventListener('mouseleave', handleMouseLeave);
    scrollElement.addEventListener('mouseup', handleMouseUp);
    scrollElement.addEventListener('mousemove', handleMouseMove);

    // Touch events for mobile
    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - scrollElement.offsetLeft;
      scrollLeft = scrollElement.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - scrollElement.offsetLeft;
      const walk = (x - startX) * 2;
      scrollElement.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    scrollElement.addEventListener('touchstart', handleTouchStart);
    scrollElement.addEventListener('touchmove', handleTouchMove);
    scrollElement.addEventListener('touchend', handleTouchEnd);

    return () => {
      // Cleanup mouse events
      scrollElement.removeEventListener('mousedown', handleMouseDown);
      scrollElement.removeEventListener('mouseleave', handleMouseLeave);
      scrollElement.removeEventListener('mouseup', handleMouseUp);
      scrollElement.removeEventListener('mousemove', handleMouseMove);
      
      // Cleanup touch events
      scrollElement.removeEventListener('touchstart', handleTouchStart);
      scrollElement.removeEventListener('touchmove', handleTouchMove);
      scrollElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return scrollRef;
};