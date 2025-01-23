import React from "react";
import Logo from "../components/Logo";
import BackButton from "../components/BackButton";

const CallToAction = () => {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6">
      <BackButton />
      <div className="w-full max-w-4xl mx-auto">
        <Logo />
        <div className="mt-12 space-y-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
            Got Offers?
          </h1>
          <h2 className="text-3xl font-semibold text-black animate-fade-up opacity-0" style={{ animationDelay: "0.3s" }}>
            Join EatsBoost Today and Redefine Your Eating Out Experience
          </h2>
          
          <div className="relative py-4 px-6 bg-gradient-to-r from-eatsboost-orange/10 to-eatsboost-yellow/10 rounded-lg border-2 border-eatsboost-orange/20 shadow-lg animate-scale-in opacity-0" style={{ animationDelay: "0.35s" }}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
              <span className="text-eatsboost-orange">✨ Special Offer ✨</span>
            </div>
            <p className="text-lg text-gray-800">
              Get a <span className="font-bold">Level 2 welcome offer</span> when you purchase a Boost Card and add an eatery
            </p>
          </div>

          <div className="mt-16 p-6 border-2 border-gray-200 rounded-lg shadow-sm animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
            <p className="text-xl text-gray-700">
              Ask the server for a Boost Card and Download the App!
            </p>
            <p className="text-sm text-gray-600 mt-4">
              Available on iOS and Android
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;