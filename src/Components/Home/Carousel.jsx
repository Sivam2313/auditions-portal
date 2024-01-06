import React, { useEffect } from "react";
import "../../App.css";
import green from '../../Assets/greenery.svg';
import blue from '../../Assets/blue.svg';
import yellow from '../../Assets/yellow.svg';
import brown from '../../Assets/brown.svg';
import appweb from '../../Assets/appweb.svg';
import ps from '../../Assets/ps.svg';
import teaching from '../../Assets/teaching.svg';
import gd from '../../Assets/gd.svg';



const Carousel = () => {
  const myacti = [{
    key: 1,
    title: "Teaching",
    background: blue,
    image: teaching,
  },
  {
    key: 2,
    title: "Problem Setting",
    background: yellow,
    image: ps,
    color:"#06A8F9",
  },
  {
    key: 3,
    title: "Web/App Development",
    background: green,
    image: appweb,
  },
  {
    key: 4,
    title: "Graphics Design",
    background: brown,
    image: gd,
  },
]

  const activate = (e) => {
    const slider = document.querySelector(".slider");
    const items = document.querySelectorAll(".item");

    if (e.target.matches(".next")) {
      slider.append(items[0]);
    } else if (e.target.matches(".prev")) {
      slider.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", activate);

    return () => {
      document.removeEventListener("click", activate);
    };
  }, []);

  return (
    <div className="lg:h-[150vh] pb-12 w-screen flex flex-col bg-black items-center">
      <div className="text-primary font-title text-5xl lg:text-7xl pt-32 lg:mb-12 mb-6">
        ROLES
      </div>
      <div className="main">
        <ul className="slider">
          {myacti.map((item) => (
            <li
              key={item.key}
              className="item"
              style={{
                backgroundImage: `url(${item.background})`,
              }}
            >
              <div className="co">
                <h2 className="title">{item.title}</h2>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <button className="btn prev">Prev</button>
          <button className="btn next">Next</button>
        </nav>
      </div>
    </div>
  );
};

export default Carousel;
