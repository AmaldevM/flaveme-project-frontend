import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Velvet, Cafecrush, Crumbz } from "@/assets";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

export const RestCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="bg-white/0 p-10 md:flex relative  mx-auto">
      <Carousel
        plugins={[plugin.current]}
        className="relative max-w-full mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-900 rounded-full p-3 shadow-lg" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-900 rounded-full p-3 shadow-lg" />

        {/* Carousel Content */}
        <CarouselContent className="flex items-center">
          <CarouselItem className="px-2 flex justify-center">
            <Link to="/velvet">
              <img
                src={Velvet}
                alt="Velvet"
                className="transition-transform duration-200 ease-in-out hover:scale-[1.02] object-cover max-w-screen-xl h-auto max-h-96 rounded-lg shadow-lg"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="px-2 flex justify-center">
            <Link to="/cafecrush">
              <img
                src={Cafecrush}
                alt="Cafe Crush"
                className="transition-transform duration-200 ease-in-out hover:scale-[1.02] object-cover max-w-screen-xl h-auto max-h-96 rounded-lg shadow-lg"
              />
            </Link>
          </CarouselItem>
          <CarouselItem className="px-2 flex justify-center">
            <Link to="/crumbz">
              <img
                src={Crumbz}
                alt="Crumbz"
                className="transition-transform duration-200 ease-in-out hover:scale-[1.02] object-cover max-w-screen-xl h-auto max-h-96 rounded-lg shadow-lg"
              />
            </Link>
          </CarouselItem>
        </CarouselContent>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
          <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
          <span className="block w-3 h-3 bg-white rounded-full opacity-50"></span>
        </div>
      </Carousel>
    </div>
  );
};
