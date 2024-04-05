import React from "react";
import styled from "styled-components";
import html from "../Assets/skills/Htmllogo.png";
import css from "../Assets/skills/Csslogo.png";
import js from "../Assets/skills/JSLogo.png";
import Nextjs from "../Assets/skills/Nextjslogo.png";
import react from "../Assets/skills/reactlogo.png";
import typeScript from "../Assets/skills/typescriptlogo.png";
import { motion } from "framer-motion";

const SkillsData = [
  {
    id: 0,
    img: html,
    name: "Html",
  },
  {
    id: 1,
    img: css,
    name: "Css",
  },
  {
    id: 2,
    img: js,
    name: "JS",
  },
  {
    id: 3,
    img: react,
    name: "React js",
  },
  {
    id: 4,
    img: typeScript,
    name: "Type Script",
  },
  {
    id: 5,
    img: Nextjs,
    name: "Next js",
  },
];

const SkillBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 4px;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  transition: 0.3s ease-in-out all;
  &: hover {
    transform: scale(1.1);
  }
  @media(max-width:550px){
    margin-top:15px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

// Use React.forwardRef to forward the ref from the parent component
const MySkills = React.forwardRef(({ onClick }, ref) => {
  return (
    <div style={{ marginTop: "3rem", marginBottom: "3rem" }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#6a3dc4",
            fontSize: "3rem",
          }}
        >
          My Skills
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#150d1e",
            fontSize: "1.1rem",
            marginTop: "10px",
            lineHeight: "25px",
          }}
        >
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {SkillsData?.map((i) => {
            return (
              <SkillBox key={i.id}>
                <div>
                  <Img src={i?.img} alt={i?.name}></Img>
                </div>
              </SkillBox>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
});

export default MySkills;
