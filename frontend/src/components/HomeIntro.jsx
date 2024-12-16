import React from "react";
import bgImg from "../assets/homeIntroBg.jpg";
import HomeIntroCards from "./HomeIntroCards";

function HomeIntro() {
  return (
    <>
      <div
        className="relative w-full h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Centered text */}
        <p className="relative text-white text-3xl md:text-5xl font-bold z-10">
          Welcome to YogaLife
        </p>
      </div>

      <h1 className="text-3xl text-center my-8">
        Transform Your Life Through Yoga 
        {/* Tip: In quotes ui */}
      </h1>
      <p className="text-lg mx-auto w-[84vw]">
        Welcome to YogaLife Studio, your sanctuary for holistic well-being. Our classes, tailored for all levels, bring together the wisdom of yoga with the convenience of online learning. Whether you're a beginner or an advanced practitioner, join us to rejuvenate your body, mind, and soul.
      </p>
      <div className="flex w-[80vw] mx-auto my-5 justify-around items-center">
        <div>
            View Online Classes
        </div>
        <div>
            Contact Us
        </div>
      </div>
      {/* Intro Cards  */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-2">

      <HomeIntroCards icon="TbCertificate2" content="Certified Instructors" />
    <HomeIntroCards icon="RiCalendarScheduleLine" content="Flexible Schedule" />
    <HomeIntroCards icon="TbYoga" content="Personalized Programs" />
      </div>
    </>
  );
}

export default HomeIntro;
