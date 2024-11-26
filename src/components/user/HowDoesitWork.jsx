import React from "react";

export const HowDoesitWork = () => {
  return (
    <section className="py-20  sm:py-16 lg:py-12">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between ">
        <div className="text-center  transition-transform duration-200 ease-in-out hover:scale-[1.05]  ">
          <p className="mt-4 text-sm leading-7 text-gray-200 font-regular">
            OUR SERVICE
          </p>
          <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-white">
            How Does it <span className="text-amber-500">Works?</span>
          </h3>
        </div>
        <div className="mt-20">
          <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10 shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.05] rounded-xl gap-4">
            <li className=" bg-gray-100 p-5 pb-10 text-center rounded-xl">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-amber-500 text-white border-4 border-white text-xl font-semibold ">
                    1
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">
                    Easy to Order
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    You only need a few staps in Ordering Food.
                  </p>
                </div>
              </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center rounded-xl">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-amber-500 text-white border-4 border-white text-xl font-semibold">
                    2
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">
                    Fastest Delivery
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Delivery thats is always ontime even faster
                  </p>
                </div>
              </div>
            </li>
            <li className=" bg-gray-100 p-5 pb-10 text-center rounded-xl ">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 relative top-0 -mt-16">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-amber-500 text-white border-4 border-white text-xl font-semibold">
                    3
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg leading-6 font-semibold text-gray-900">
                    Best Quality
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Not only fast for us quality is also number one
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
