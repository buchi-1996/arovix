import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-auto bg-contain">
      <div className="container mx-auto pt-24 pb-6 md:pb-12 md:pt-28 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 mb-10">
          {/* <div className="rounded-lg shadow-2xl hover:scale-105 transition duration-300 ease-out hover:ease-in overflow-hidden">
            <img
            src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg"
            className="w-full h-full"
            alt=""
            />
        </div> */}
                  <div className="my_work">
                  <h1 className="text-5xl max-w-3xl pb-8 mx-auto">Join the fastest growing tech community</h1>
                  <p className="text-xl mb-8 font-medium left-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem illo corrupti eaque eum minus perferendis eligendi explicabo amet, nulla repellendus vel error fugit! Maiores incidunt dignissimos nobis adipisci totam.</p>
                  <Button text="Join the league" />
                  
                 </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="rounded-lg shadow-2xl hover:scale-105 transition duration-300 ease-out hover:ease-in overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="rounded-lg shadow-2xl hover:scale-105 transition duration-300 ease-out hover:ease-in overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="rounded-lg shadow-2xl hover:scale-105 transition duration-300 ease-out hover:ease-in overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="rounded-lg shadow-2xl hover:scale-105 transition duration-300 ease-out hover:ease-in overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1724888/pexels-photo-1724888.jpeg?cs=srgb&dl=pexels-steve-johnson-1724888.jpg&fm=jpg"
                className="w-full h-full"
                alt=""
              />
            </div>
                  </div>
                  <img src="../../public/dot-seamless-pattern.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
