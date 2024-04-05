import React, { useRef } from "react";
import logo from "../Assets/Satbeerlogo.png";
import styled from "styled-components";
import { MobileHeader } from "./MobileHeader";
import { Work } from "../Component/Work";

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
`;

const NavlinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;
export const NavLink = styled.div`
  font-size: 1.2rem;
  color: #2a1454;
  cursor: pointer;
  transition: text-decoration 0.3s ease;
  margin-top: 15px;
  &:hover {
    text-decoration: underline;
    color: #462686;
  }
`;

const HireMeButton = styled.div`
  color: #fff;
  background: linear-gradient(to right, #371c6b, #7f4bea);
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
`;
const Header = ({ skillRef, homeRef, workRef, educationRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleWhatsappClick = () => {
    const phoneNumber = "8076591856";
    const message = encodeURIComponent(
      "Hello, I would like to connect with you!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        top: "0",
        background: "#fff",
        zIndex: "3",
      }}
    >
      <LogoDiv>
        <div
          onClick={() => {
            scrollToSection(homeRef);
          }}
        >
          <img src={logo} style={{ width: "100px" }} />
        </div>
        <a
          href="mailto:satbeergautam540@gmail.com"
          style={{ textDecoration: "none", color: "#000" }}
        >
          satbeergautam540@gmail.com
        </a>
      </LogoDiv>
      {window.innerWidth <= 550 ? (
        <MobileHeader
          skillRef={skillRef}
          homeRef={homeRef}
          workRef={workRef}
          educationRef={educationRef}
          contactRef={contactRef}
        />
      ) : (
        <NavlinkDiv>
          <NavLink
            onClick={() => {
              scrollToSection(homeRef);
            }}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToSection(workRef);
            }}
          >
            Work
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToSection(educationRef);
            }}
          >
            Experience
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToSection(skillRef);
            }}
          >
            Skills
          </NavLink>
          <NavLink
            onClick={() => {
              scrollToSection(contactRef);
            }}
          >
            Contact
          </NavLink>
          <HireMeButton onClick={handleWhatsappClick}>Hire me !</HireMeButton>
        </NavlinkDiv>
      )}
    </div>
  );
};

export default Header;
