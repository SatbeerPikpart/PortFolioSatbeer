import React, { useState } from "react";
import styled from "styled-components";
import { WorkData } from "./styled";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const Workbox = styled.div`
  display: flex;
  justify-content: center;
  background: #f6f3fc;
  width: 300px;
  padding: 10px 20px;
  border-radius: 30px;
`;

const Workboxdiv = styled.div`
  color: #8750f7;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  &.active {
    background: linear-gradient(to right, #371c6b, #7f4bea);
    color: #fff;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: linear-gradient(
  //   to top,
  //   rgba(0, 0, 0, 0.7) 0%,
  //   rgba(0, 0, 0, 0) 100%
  // );
`;

const Img = styled.img`
  width: 50%;
  border-radius: 18px;
  cursor: pointer;
`;

const LinkBox = styled.div`
  width: 80%;
  margin: auto;
  background: linear-gradient(to right, #371c6b, #7f4bea);
  color: #ffffff;
  padding: 20px 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const WorkDiv = styled.div`
  width: 30%;
  @media (max-width: 550px) {
    width: 80%;
  }
`;
const Work = React.forwardRef(({ onClick }, ref) => {
  const [activeBox, setActiveBox] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [data, setData] = useState(WorkData);

  const handleTabclick = (clickedtab) => {
    setActiveBox(clickedtab);
    if (clickedtab === "All") {
      setData(WorkData);
    } else if (clickedtab == "live") {
      const liveData = WorkData?.filter((i) => i?.type === "live");
      setData(liveData);
    } else if (clickedtab === "personal") {
      const personalData = WorkData?.filter((i) => i?.type === "personal");
      setData(personalData);
    }
  };
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    window.open(link, "_blank");
  };

  return (
    <div
      ref={ref}
      style={{
        marginTop: "3rem",
        paddingBottom: "3rem",
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition:
          "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s , color 0.5s",
        background: "#f6f3fc",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "#6a3dc4",
          fontSize: "3rem",
          paddingTop: "2rem",
        }}
      >
        My Recent Work
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Workbox>
          <Workboxdiv
            onClick={() => {
              handleTabclick("All");
            }}
            className={activeBox === "All" ? "active" : ""}
          >
            All
          </Workboxdiv>
          <Workboxdiv
            onClick={() => {
              handleTabclick("live");
            }}
            className={activeBox === "live" ? "active" : ""}
          >
            Live
          </Workboxdiv>
          <Workboxdiv
            onClick={() => {
              handleTabclick("personal");
            }}
            className={activeBox === "personal" ? "active" : ""}
          >
            Personal
          </Workboxdiv>
        </Workbox>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {data?.map((i, index) => {
          return (
            <WorkDiv
              key={index}
              style={{ margin: "20px", position: "relative" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* <GradientOverlay /> */}
              <div
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "12px",
                  boxShadow: "rgba(0,0,0,0.1) 4px 4px 4px",
                }}
              >
                <Img src={i?.img} />
              </div>
              {/* {hoveredIndex === index && (
                <LinkBox show={true}>
                  <div style={{ fontSize: "1.1rem" }}>{i?.description}</div>
                  <a
                    href={i?.link}
                    style={{ color: "#fff" }}
                    onClick={(e) => handleLinkClick(e, i?.link)}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </LinkBox>
              )} */}
            </WorkDiv>
          );
        })}
      </div>
    </div>
  );
});

export default Work;
