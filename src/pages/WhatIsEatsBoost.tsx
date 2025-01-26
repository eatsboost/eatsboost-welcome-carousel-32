import React from "react";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const WhatIsEatsBoost = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <BackButton />
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <Logo />
        </div>
        
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 
              className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-black animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              One App. The Eateries You Love. Personalized Offers.
            </h1>
            <p 
              className="text-xl md:text-2xl text-black animate-fade-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              Experience Dining Like <span className="font-bold">Never</span> Before
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="aspect-[9/16] rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/d2d0e8a1-a3b5-427a-b908-58bb15fb8475.png"
                alt="EatsBoost My Eateries Screen"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="aspect-[9/16] rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/33d854dd-8ae5-4c4d-ba72-bef4d3a072a1.png"
                alt="EatsBoost Generate Offers Screen"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="aspect-[9/16] rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/628f9c1f-ad53-4b7d-9cf0-15cbe43447f1.png"
                alt="EatsBoost My Offers Screen"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            className="animate-fade-up opacity-0 bg-eatsboost-orange text-white hover:bg-eatsboost-orange/90"
            style={{ animationDelay: "0.8s" }}
            onClick={() => navigate("/how-it-works")}
          >
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatIsEatsBoost;