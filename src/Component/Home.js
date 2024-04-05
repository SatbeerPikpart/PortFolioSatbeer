import React from "react";
import styled from "styled-components";
import { GoDownload } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import user from "../Assets/user.jpg";
import { motion } from "framer-motion";

const DownloadCv = styled.div`
  width: 200px;
  text-align: center;
  border: 1px solid #8750f7;
  padding: 10px 20px;
  border-radius: 40px;
  cursor: pointer;
  &: hover {
    background: #8750f7;
    color: #fff;
  }
`;

const MainDiv = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  @media (max-width: 550px) {
    width: 95%;
    flex-direction: column-reverse;
  }
`;

const DescriptionDiv = styled.div`
  width: 50%;
  @media (max-width: 550px) {
    width: 90%;
  }
`;

const ImageDiv = styled.div`
  width: 30%;
  cursor: pointer;
   @media(max-width:550px){
    width:90%;
   }
`;
const CircularDiv = styled.div`
  border: 1px solid #8750f7;
  padding: 5px 10px;
  border-radius: 10px;
  &: hover {
    background: #8750f7;
    color: #fff;
  }
  cursor: pointer;
`;

const Img = styled.img`
  width: 90%;
  height: 400px;
  border-radius: 15px;
  transition: 0.3s ease-in-out all;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 550px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;
const Home = React.forwardRef(({ onClick }, ref) => {
  const handleWhatsappClick = () => {
    const phoneNumber = "8076591856";
    const message = encodeURIComponent(
      "Hello, I would like to connect with you!"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/satbeer-gautam-a4491123b/",
      "_blank"
    );
  };
  const handleGitHubClick = () => {
    window.open("https://github.com/satbeergithub", "_blank");
  };
  const handleInstaClick = () => {
    window.open("https://www.instagram.com/satbeer144/", "_/blank");
  };
  return (
    <MainDiv ref={ref}>
      <DescriptionDiv>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ color: "#2a1454", fontSize: "2rem" }}>I am Satbeer</div>
          <div
            style={{ fontSize: "4rem", color: "#6a3dc4", marginTop: "10px" }}
          >
            Frontend Developer{" "}
          </div>
          <p
            style={{
              color: "#150d1e",
              fontSize: "1.1rem",
              marginTop: "10px",
              lineHeight: "25px",
            }}
          >
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people
          </p>

          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <DownloadCv>
              DownLoad Cv <GoDownload />
            </DownloadCv>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "50%",
              }}
            >
              <CircularDiv onClick={handleWhatsappClick}>
                <FaWhatsapp />
              </CircularDiv>
              <CircularDiv onClick={handleInstaClick}>
                <FaInstagram />
              </CircularDiv>
              <CircularDiv onClick={handleLinkedInClick}>
                <FaLinkedinIn />
              </CircularDiv>
              <CircularDiv onClick={handleGitHubClick}>
                <FaGithub />
              </CircularDiv>
            </div>
          </div>
        </motion.div>
      </DescriptionDiv>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Img src={user} />
      </motion.div>
    </MainDiv>
  );
});

export default Home;
