import React from "react";
import shoppingCartIcon from "../../assets/icons/icons8-shopping-cart-96-removebg-preview.png";
import deliveryIcon from "../../assets/icons/icons8-delivery-96-removebg-preview.png";
import thumbsUpIcon from "../../assets/icons/icons8-thumbs-up-96-removebg-preview.png";

export const HowDoesitWork = () => {
  const steps = [
    {
      id: 1,
      image: shoppingCartIcon,
      title: "Easy to Order",
      description: "You only need a few steps to order food.",
    },
    {
      id: 2,
      image: deliveryIcon,
      title: "Fastest Delivery",
      description: "Delivery that is always on time, even faster.",
    },
    {
      id: 3,
      image: thumbsUpIcon,
      title: "Best Quality",
      description: "Not only fast, but for us, quality is also number one.",
    },
  ];

  return (
    <section className="py-20 sm:py-16 lg:py-12 bg- text-white/10">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center transition-transform duration-200 ease-in-out hover:scale-[1.05]">
          <p className="mt-4 text-sm text-gray-200 font-bold">OUR SERVICE</p>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            How Does it <span className="text-amber-500">Work?</span>
          </h3>
        </div>

        {/* Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white/10 p-6 text-center rounded-xl shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.05]"
            >
              <div className="flex flex-col items-center">
                {/* Step Image */}
                <div className="flex items-center justify-center h-20 w-20 -mt-16 ">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>

                {/* Title and Description */}
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-base font-semibold text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
