import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../../components/hero/HeroLight";
import Index from "../../components/about/index";
import Address from "../../components/Address";
import Social from "../../components/Social";
import AnimatedCursor from "react-animated-cursor";

const menuItem = [
  { id: 'home', icon: "fa-home", menuName: "Home" },
  { id: 'about', icon: "fa-user", menuName: "About" },
  { id: 'contact', icon: "fa-envelope-open", menuName: "Contact" },
];

const HomeLight = () => {
  const [tabSelected, setTabSelected] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [tabSelected]);

  useEffect(() => {
    document.body.classList.add("light");
  }, []);

  return (
    <div className="green">
      <div className="demo-sticker">
        <a href="/home-dark">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </a>
      </div>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="114, 182, 38"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <Tabs selectedIndex={tabSelected} onSelect={tabIndex => setTabSelected(tabIndex)}>
        <div className="header">
          <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item) => (
              <Tab  className="icon-box" key={item.id}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
            {/*Add medium link following style and design but handling redirection with JavaScript*/}
            <Tab key={'contact'} className="icon-box" onClick={() => { document.location = "https://medium.embengineering.com"; return false;}}>
              <i className={`fa fa-medium`}></i>
              <h2>Blog</h2>
            </Tab>
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero onClickHeroBtn={() => setTabSelected(1)} />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="offset-lg-4 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Contact me!
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    hear about new opportunities to help others.
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}
          <TabPanel />
        </div>
      </Tabs>
    </div>
  );
};

export default HomeLight;
