import React from "react";

const experienceContent = [
  {
    year: "Apr 2022 - Present",
    position: "Software Product & Platform Engineering Associate Manager",
    compnayName: "Accenture, Remote",
    details: `Led the front-end architecture, design, and development of a microservice integrated into a legacy system. Provided insight, direction, and implementation for building a dynamic form builder using React, Google Material Design, JSONSchema, YUP, C#, .NET Core (Web APIs), and MSSQL.`,
  },
  {
    year: "Jun 2020 — Apr 2022",
    position: "Principal Consultant",
    compnayName: "Headspring - Part of Accenture, Remote",
    details: `Built a plan in collaboration with the client to provide recommendations for the modernization of their suite of applications focused on enhancing flexibility, scalability and performance. Lead the client through best practices while decoupling large monoliths and implement a communication center solution integrating with Twilio SMS/Whatsapp provider.`,
  },
  {
    year: "Dec 2014 — Jun 2022",
    position: " Senior Consultant / Front-End Developer",
    compnayName: "Headspring - Part of Accenture, Dallas TX",
    details: `Provided insight, direction, and implementation to decouple the front-end of an existing React and .NET application using modern architectural principles (microservices) that can scale and be maintained easily.Guided the enhancements of an AngularJS application to improve the architecture, performance, and deployment. Directed the client relationship and project initiatives on a daily basis. Designed and lead the development of an internal tool for evaluating our personnel at the end of a project. The application was built on React and ASP.NET APIs. Headed the front-end development of a Tournament Registration system for the largest bowling championships in the nation. Implemented the architecture using HTML, CSS, SASS, React, Redux, Webpack, Babel, ES6, ESLint, Jest, among others. Delivered APIs with test coverage using ASP.NET MVC, Web API (C#), and Fixie. Front-end developer for a large manufacturing company using HTML, CSS, Bootstrap, jQuery, and RequireJS. Built and enhanced APIs using ASP.NET WebAPI, MSSQL, and Entity Framework.  Established architectural tools to the front-end to ensure quality control, reduce redundancy, and enforce best practices. Guided the front-end development of the workflow automation for a leading provider of online marketing services and products in the direct-to-consumer credit monitoring industry. Built the new architecture using AngularJS, HTML, and CSS. Created simple and attractive user interfaces using Google Material Design and Balsamic.  Delivered new APIs using ASP. NET Web API, and interactive graphs using Tableau. Enhanced and built new features, using AngularJS, HTML, CSS, and ASP.NET Web API, for an Electronic Change Order system that integrates with existing systems of record (SOR).`,
  },
  {
    year: "May 2012 — Dec 2014",
    position: "Sr. Developer / UI Architect",
    compnayName: "SabiaMed, Caguas PR",
    details: `Directed the front-end architecture of an HTML5 web-based application for Hospitals and Clinical Centers.  Designed, prototyped, and documented using Axure prototyping tool with a primary focus on mobile-first approach and flexible design. Built rich user experiences using jQuery, RequireJS, and KendoUI. Supported and enhanced back-end features using ASP.NET MVC, C#, Entity Framework, and MSSQL.`,
  },
  {
    year: "Nov 2010 — May 2012",
    position: "Sr. System Analyst",
    compnayName: "Intechsol Corporation, San Juan PR",
    details: `Consultancy, project management, development and maintenance of web applications for Time & Attendance, Payroll Services, Human Resources, Accruals, and Tax Services. Built specifications, designs, and web applications using MVC, C#, jQuery, MSSQL, Oracle, Telerik, and JavaScript.`,
  },
  {
    year: "Aug 2007 — Nov 2010",
    position: "Software Architect",
    compnayName: "JOFCO Consulting Group, San Juan PR",
    details: `Consultancy, project management, development and maintenance of web and Windows applications. Designed and developed complex web-based solutions, using the latest technology to reduce time, costs, and avoid human error. Directed the migration of several web applications, leading the re-design of the front-end to provide rich user experiences using JavaScript.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
