import React, { useEffect, useState, useCallback } from 'react';
import { useWindowSize } from 'react-use';

import yatra from '../assets/yatra.png';
import godrej from '../assets/godrej.png';
import rapido from '../assets/rapido.png';
import innisfree from '../assets/innisfree.png';

const BrandCarousel = () => {
  const [position, setPosition] = useState(0);
  const { width } = useWindowSize();
  
  const brands = [
    { id: 1, name: 'Yatra', image: yatra },
    { id: 2, name: 'Godrej', image: godrej },
    { id: 3, name: 'Rapido', image: rapido },
    { id: 4, name: 'Innisfree', image: innisfree },
    { id: 5, name: 'Yatra', image: yatra },
    { id: 6, name: 'Godrej', image: godrej },
    { id: 7, name: 'Rapido', image: rapido },
    { id: 8, name: 'Innisfree', image: innisfree },
  ];

  // Determine number of visible items based on screen width
  const getVisibleItemCount = useCallback(() => {
    if (width < 640) return 3; // mobile
    if (width < 768) return 4; // tablet
    return 5; // desktop
  }, [width]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [brands.length]);

  const getVisibleBrands = () => {
    const visibleCount = getVisibleItemCount();
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (position + i) % brands.length;
      items.push(brands[index]);
    }
    return items;
  };

  const getFocusClass = (index) => {
    const visibleCount = getVisibleItemCount();
    const centerIndex = Math.floor(visibleCount / 2);

    // Mobile view (3 items)
    if (visibleCount === 3) {
      switch (index) {
        case 0: return 'opacity-60 scale-75';
        case 1: return 'opacity-100 scale-100';
        case 2: return 'opacity-60 scale-75';
        default: return 'opacity-60 scale-75';
      }
    }
    
    // Tablet view (4 items)
    if (visibleCount === 4) {
      switch (index) {
        case 0: return 'opacity-40 scale-75';
        case 1: return 'opacity-100 scale-100';
        case 2: return 'opacity-100 scale-100';
        case 3: return 'opacity-40 scale-75';
        default: return 'opacity-40 scale-75';
      }
    }
    
    // Desktop view (5 items)
    return index === centerIndex 
      ? 'opacity-100 scale-110'
      : index === centerIndex - 1 || index === centerIndex + 1
      ? 'opacity-70 scale-90'
      : 'opacity-40 scale-75';
  };

  return (
    <div className="w-full bg-black overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 md:px-6">
        <div className="relative flex justify-center items-center">
          <div className="flex justify-center items-center 
                        gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 
                        py-2 xs:py-3 sm:py-4 md:py-6">
            {getVisibleBrands().map((brand, index) => (
              <div
                key={brand.id}
                className={`transition-all duration-500 ease-in-out ${getFocusClass(index)}`}
              >
                <div className="w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 
                              h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 
                              flex items-center justify-center">
                  <img 
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;