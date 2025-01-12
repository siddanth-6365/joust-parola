import './homepage.css';
import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const cursordot = document.querySelector("#cursor-dot");
    const cursoroutline = document.querySelector("#cursor-outline");
    const homeSection = document.querySelector(".homeSection");

    const handleMouseMove = (event) => {
      const posx = event.clientX;
      const posy = event.clientY;

      cursordot.style.left = `${posx}px`;
      cursordot.style.top = `${posy}px`;

      cursoroutline.animate(
        {
          left: `${posx}px`,
          top: `${posy}px`,
        },
        { duration: 500, fill: "backwards" }
      );
    };

    const handleScroll = () => {
      setIsScrolling(true);
      cursordot.style.display = 'none';
      cursoroutline.style.display = 'none';

      setTimeout(() => {
        setIsScrolling(false);
        cursordot.style.display = 'block';
        cursoroutline.style.display = 'block';
      }, 1000);
    };

    homeSection.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      homeSection.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="homeSection" id="homesection">

        <div class="cursor-dot" id="cursor-dot"></div>
        <div class="cursor-outline" id="cursor-outline"></div>

        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <div className="navBar">
          <div className='clubName' id="parola">PAROLA</div>
          <div className='navbar-items'>
            <a href="#homesection">HOME</a>
            <a href="#joust">JOUST</a>
            <a href="#competition">COMPETITIONS</a>
            <a href="#events">EVENTS</a>
            <a href="#contactus">CONTACT US</a>
          </div>
        </div>
        <div className="homePageContent">
          <img className='debsocLogo' src="images/DebsocLogo.png" alt="debsocLogo" />
          <div className='rightSide'>
            <div className='animationsociety'>
              <div className='society'>THE <span>LITERARY</span> SOCIETY</div>
            </div>
            <div className='place'>JIIT - 62</div>
            <div className='homecontent'>
              The official Literary Hub of JIIT Noida. With its highly dedicated and conscientious team, it acts as a catalyst to encourage the passion for literature among the students.<br /><br />
              This Literary Hub isn't just a static library; it's a dynamic space filled with the energy of literary events. Beyond the books and events, it is a hub of intellectual discourse. It's a place where students and faculty gather to engage in meaningful discussions about literature, philosophy, and the written word's impact on society.
            </div>
            <div className="knowMoreButton">Know More</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
