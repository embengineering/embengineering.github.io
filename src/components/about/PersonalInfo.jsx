import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Emmanuel" },
  { meta: "last name", metaInfo: "Morales" },
  { meta: "Age", metaInfo: "35 Years" },
  { meta: "Nationality", metaInfo: "Puerto Rico" },
  { meta: "Address", metaInfo: "Frisco, TX" },
  { meta: "phone", metaInfo: "972.626.3543" },
  { meta: "Email", metaInfo: "contact@embengineering.com" },
  { meta: "langages", metaInfo: "Spanish, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
