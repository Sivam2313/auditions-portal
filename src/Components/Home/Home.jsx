import React from "react";
import Navbar from "../Navbar/Navbar";
import homepageGif from "../../Assets/homepage_gif.gif";
import team from "../../Assets/team.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="w-screen h-screen relative">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover blur-sm"
          style={{ backgroundImage: `url(${team})` }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <div className="text-white text-4xl font-bold mb-4">
            RECursion Auditions 2023
          </div>
          <div className="text-white text-lg mb-8">
            Join us and showcase your talent
          </div>
          <Link to="/form">
            <button className="bg-teal-500 text-white py-3 px-6 rounded-full hover:bg-teal-600">
              Join Now
            </button>
          </Link>
          <div className="flex flex-wrap justify-center mt-5">
            <Card title="Teaching & Problem Setting" />
            <Card title="Web Development" />
            <Card title="App Development" />
            <Card title="Graphic Design" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title }) => {
  return (
    <div className="flex-1 max-w-xs bg-white-900 p-4 m-2 text-center rounded-md backdrop-filter backdrop-blur-md border">
      <div className="text-white font-semibold text-lg">{title}</div>
    </div>
  );
};

export default Home;
