import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p85", skillPercent: "85", skillName: "REACT" },
  { skillClass: "p75", skillPercent: "75", skillName: "ANGULAR" },
  { skillClass: "p85", skillPercent: "85", skillName: "CSS" },
  { skillClass: "p80", skillPercent: "80", skillName: "SASS/SCSS" },
  { skillClass: "p25", skillPercent: "25", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "JQUERY" },
  { skillClass: "p25", skillPercent: "25", skillName: ".NET CORE" },
  { skillClass: "p95", skillPercent: "95", skillName: "ASP.NET MVC" },
  { skillClass: "p75", skillPercent: "75", skillName: "ASP.NET WEBAPI" },
  { skillClass: "p95", skillPercent: "95", skillName: "C#" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
