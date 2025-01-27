import React from "react";
import Logo from "../components/Logo";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[100dvh] flex flex-col items-center p-6 gradient-background">
      <BackButton />
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center">
          <Logo />
        </div>
        
        <div className="mt-12 space-y-8 text-center">
          <h1 
            className="text-2xl md:text-4xl font-bold text-black animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            Buy a Boost Card, Complete & Log Visits, Enter a Boost Cycle, Generate Offers, Redeem, Repeat.
            <span className="block mt-2 text-xl md:text-2xl italic">Reshape Your Dining Experience</span>
          </h1>

          <div 
            className="mt-16 space-y-24 text-left animate-fade-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">1</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Buy a Boost Card</h2>
                <p className="text-black text-lg">Each eatery has an <span className="font-bold">exclusive</span> Boost Card available for purchase. Buy your very own for <span className="font-bold">$8</span>. The Boost Card is a one time purchase, and gives you <span className="font-bold">lifelong</span> offers!</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
                    <span className="font-bold">Note:</span> Each eatery has a limited number of Boost Cards. Once they're gone, they're gone!
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">2</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Scan the QR Code in the App</h2>
                <p className="text-black text-lg">Add the eatery by scanning the QR code on the back of your <span className="font-bold">Boost Card</span></p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm italic">
                    <span className="font-bold">Note:</span> Keep your Boost Card safe, each boost card is unique to you and you will need it for exciting new features, soon to be launched.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">3</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Complete Regular Visits</h2>
                <p className="text-black text-lg">Each eatery will have a few number of regular visits (<span className="font-bold">with a minimum spend</span>) to complete before being able to generate offers. Log your visits in the app to enter a <span className="font-bold">Boost Cycle*</span>, and begin generating offers.</p>
                <div className="mt-4 space-y-4">
                  <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                    <p className="text-black text-sm">
                      <span className="font-bold">Example</span>: Papa's Pizzeria - 2 regular visits & $9.99 spend per visit to unlock a <span className="font-bold">Boost Cycle</span>.
                    </p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg border border-white/20">
                    <p className="text-black text-sm">
                      <span className="font-bold">Boost Cycle</span>: A period of 30 days where you can generate 2 offers every 7 days. Once a <span className="font-bold">Boost Cycle</span> ends, complete your visits again to begin a new <span className="font-bold">Boost Cycle</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">4</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Generate Offers</h2>
                <p className="text-black text-lg">You can generate <span className="font-bold">two offers</span> once every <span className="font-bold">7 days</span> (redeem before they expire!)</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20">
                  <p className="text-black text-sm">
                    Each offer is either <span className="font-bold">Level 1</span>, <span className="font-bold">Level 2</span>, or <span className="font-bold">Level 3</span>. The higher the level, the more <span className="font-bold">rare and valuable</span> the offer
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pl-16 md:pl-20">
              <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-eatsboost-orange">5</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">Redeem</h2>
                <p className="text-black text-lg">When ready to redeem, activate the offer in the app and show the server</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Button 
            className="animate-fade-up opacity-0 bg-white text-black hover:bg-gray-100"
            style={{ animationDelay: "0.6s" }}
            onClick={() => navigate("/download")}
          >
            Next
            <ArrowRight className="ml-2" />
          </Button>
        </div>

        <div className="mt-16 w-full">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full bg-white/10 rounded-lg border border-white/20 divide-y divide-white/20">
            <AccordionItem value="item-1" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                How Many Eateries Can I Have On My Profile?
              </AccordionTrigger>
              <AccordionContent>
                You can have up to <span className="font-bold">3 eateries</span> on your profile.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                How Do I Redeem Offers?
              </AccordionTrigger>
              <AccordionContent>
                First, make sure that you are at the <span className="font-bold">eatery</span>, otherwise, you will not be able to redeem the offer. In the <span className="font-bold">EatsBoost app</span>, navigate to the "<span className="font-bold">My Offers</span>" page and tap "<span className="font-bold">Activate</span>" beside the offer. A confirmation screen will appear. Upon confirming, you will have <span className="font-bold">15 seconds</span> to show the server, and they will process the offer for you. Enjoy!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                How Many Offers Can I Redeem per Day?
              </AccordionTrigger>
              <AccordionContent>
                There is no limit on how many offers you can redeem per day
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                Can I Remove Eateries From My Profile?
              </AccordionTrigger>
              <AccordionContent>
                Yes. However, please note that when you remove an eatery, your <span className="font-bold">Boost Card is deactivated</span> and you must <span className="font-bold">purchase another Boost Card</span> to add the same eatery again
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                When Do Offers Expire?
              </AccordionTrigger>
              <AccordionContent>
                Offers expire <span className="font-bold">7 days</span> after they were generated
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                What Kind Of Offers Can I Expect To Get?
              </AccordionTrigger>
              <AccordionContent>
                We aim to create offers for <span className="font-bold">30% - 40%</span> of an eatery&apos;s menu, and target popular items. Offers are either <span className="font-bold">Level 1 / Level 2 / Level 3</span>. Level 1 offers are <span className="font-bold">base</span> offers and are <span className="font-bold">common</span>, and Level 3 are the most <span className="font-bold">valuable</span> and <span className="font-bold">rare</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                How Long Can I Generate Offers For?
              </AccordionTrigger>
              <AccordionContent>
                There is <span className="font-bold">no limit</span> to how many offers you can generate over time. As long as you keep an eatery in your profile, you can continue entering <span className="font-bold">Boost Cycles</span> and generate <span className="font-bold">2 offers every 7 days</span> until the Boost Cycle ends. If you would like to start another Boost Cycle, you can do so right after your visits are <span className="font-bold">complete and approved</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="px-4 border-none">
              <AccordionTrigger className="text-center justify-center">
                Can I Use Someone Else's Boost Card to Add an Eatery?
              </AccordionTrigger>
              <AccordionContent>
                No. Each Boost Card is <span className="font-bold">unique to a user</span>. To add an eatery, you must <span className="font-bold">purchase a Boost Card</span> from the eatery, and scan the QR code on the back of the Boost Card in the EatsBoost App
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
