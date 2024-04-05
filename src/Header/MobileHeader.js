import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Box, Drawer } from "@mui/material";
import { NavLink } from "./Header";
import { MdOutlineCancel } from "react-icons/md";

export const MobileHeader = ({
  skillRef,
  homeRef,
  workRef,
  educationRef,
  contactRef,
}) => {
  const [open, setOpen] = useState(false);
  const toggleLogin = () => {
    setOpen(false);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <div style={{ padding: "20px 30px" }}>
      <div
        style={{ fontSize: "2rem" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <CiMenuBurger />
      </div>
      {open && (
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleLogin}
          PaperProps={{
            style: {
              width: "90%",
              padding: "10px",
            },
          }}
        >
          <div
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={toggleLogin}
          >
            <MdOutlineCancel />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
          </div>
        </Drawer>
      )}
    </div>
  );
};
