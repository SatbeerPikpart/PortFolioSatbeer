import React from "react";
import Spare from "../Assets/Projects/spare.png";
import Sg from "../Assets/Projects/Sg.png";
import x from "../Assets/Projects/spcex.png";
import dashboard from "../Assets/Projects/dashboaard.png";
import styled from "styled-components";

export const WorkData = [
  {
    name: "Spare",
    img: Spare,
    link: "https://pikpart.com/",
    description: "Ecommerce Project where user can buy bike spare parts",
    type: "live",
  },
  {
    name: "SG",
    img: Sg,
    link: "https://www.mysmartgarage.in/",
    description:
      "Customer Website where user can easily book bike for service ",
    type: "live",
  },
  {
    name: "Spaace",
    img: x,
    link: "https://spacexlauches8076.netlify.app/",
    description: "List of Space x launches",
    type: "personal",
  },
  {
    name: "SG",
    img: dashboard,
    link: "https://wowtalentdashboard8076.netlify.app/",
    description: "Dashboard which shows the users activity on apps",
    type: "personal",
  },
];

export const Header = styled.div`
  color: #6a3dc4;
  font-size: 3rem;
`;
