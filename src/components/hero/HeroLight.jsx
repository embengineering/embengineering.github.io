import React from "react";

const heroContent = {
  heroImage: "https://res.cloudinary.com/embengineering/image/upload/v1640187021/profile-pic.jpg",
  heroMobileImage: "https://res.cloudinary.com/embengineering/image/upload/v1640271417/bitmoji.png",
  heroTitleName: "Emmanuel Morales",
  heroDesignation: "Software Engineer & Life Enthusiast",
  heroDescriptions: `High‐performing, strategic‐thinking professional with more than 15+ years of experience designing solutions for complex web-based applications to support business objectives and enhance how people live, work, and communicate. Contributed to all levels of the development cycle, from obtaining requirements, documenting, architecture, and delivering high-quality solutions. Experienced in building responsive cross-platform applications using the latest technologies such as HTML, CSS, JavaScript, React, TypeScript, .NET Core, C#, MSSQL, Web API, and Cloud, among others.`,
  heroBtn: "more about me",
};

const HeroLight = () => {
  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + heroContent.heroImage
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            {/* <button className="button" onClick={() => {}}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button> */}
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default HeroLight;
