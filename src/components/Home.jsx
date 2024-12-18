import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
      <div className="container mx-auto px-5">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div
            className="lg:w-1/2 text-center lg:text-left space-y-6 animate-fade-in-left"
            style={{ animationDuration: "1.5s" }}
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-snug">
              Build Your <span className="text-blue-500">Dream Website</span>
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl">
              Unlock endless possibilities with cutting-edge designs and
              seamless interactivity. Start your journey today.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="btn btn-primary btn-lg transform hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
              <button className="btn btn-outline btn-accent btn-lg transform hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div
            className="lg:w-1/2 flex justify-center relative animate-fade-in-right"
            style={{ animationDuration: "1.5s" }}
          >
            <div className="relative group">
              <img
                src="https://t4.ftcdn.net/jpg/05/75/29/03/360_F_575290374_OLUtYmX6OCw1kNs5GWO2e4RE1AuOKixG.jpg"
                alt="Hero"
                className="rounded-lg shadow-2xl transition-transform transform group-hover:scale-110 duration-500"
              />
              {/* Glowing Circle Effect */}
              <div className="absolute -inset-4 rounded-full bg-blue-500 opacity-30 blur-3xl group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
