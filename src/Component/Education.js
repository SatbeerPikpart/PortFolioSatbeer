import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Header } from "./styled";
import styled from "styled-components";

const ExperienceData = [
  {
    id: 0,
    duration: "June 23-Present",
    postion: "Frontend Developer || React Js Developer",
    company: "Pikpart Smart garage",
    locatrion: "sec-8 ,Faridabad",
  },
  {
    id: 1,
    duration: "March 23-June 23",
    postion: " React Js Developer",
    company: "Vocso Technology",
    locatrion: "Industrial Area, Sector 27/A ,Faridabad",
  },
  {
    id: 2,
    duration: "Jan 23-March 23",
    postion: "Intern",
    company: "Vultech Enterprises",
    locatrion: "Sec 62 , Noida",
  },
];
const EducationData = [
  {
    id: 0,
    duration: "2018-2022",
    course: "B.tech ME",
    college:
      "Dr. Akhilesh Das Gupta Institute of Technology & Management(ADGITM)",
  },
  {
    id: 1,
    duration: "2017-2018",
    course: "Senior Secondary",
    college: "Senior Shreeraam Model high School",
  },
  {
    id: 1,
    duration: "2015-2016",
    course: "High",
    college: "Senior Shreeraam Model high School",
  },
];
const Box = styled.div`
  background: #fff;
  padding: 15px 20px;
  margin-top: 1rem;
  border-radius: 15px;
  &:hover {
    background: #6a3dc4;
    color: #fff;
  }
`;
const Education = React.forwardRef(({ onClick }, ref) => {
  return (
    <div
      style={{
        background: "#f6f3fc",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
      ref={ref}
    >
      <div
        style={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Header>My Experience</Header>
          <div style={{ marginTop: "3rem" }}>
            {ExperienceData?.map((i) => {
              return (
                <Box>
                  <div
                    style={{
                      color: "#6a3dc4",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {i?.duration}
                  </div>
                  <div style={{ fontSize: "1.4rem", marginTop: "14px" }}>
                    {i?.postion?.toUpperCase()}
                  </div>
                  <div>{i?.company}</div>
                  <div style={{ marginTop: "14px" }}>{i?.locatrion}</div>
                </Box>
              );
            })}
          </div>
        </div>
        {window.innerWidth <= 550 ? null : (
          <div style={{ width: "50%" }}>
            <Header>My Eduction</Header>
            <div style={{ marginTop: "3rem" }}>
              {EducationData?.map((i) => {
                return (
                  <Box>
                    <div
                      style={{
                        color: "#6a3dc4",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      {i?.duration}
                    </div>
                    <div style={{ fontSize: "1.4rem", marginTop: "14px" }}>
                      {i?.college?.toUpperCase()}
                    </div>
                    <div style={{ marginTop: "14px" }}>{i?.course}</div>
                  </Box>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Education;
