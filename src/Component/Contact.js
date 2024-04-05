import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import logo from "../Assets/Satbeerlogo.png";
import styled from "styled-components";

const ContactData = [
  {
    id: 0,
    name: "Phone",
    contact: "8076591856",
    icon: <FaPhoneAlt />,
  },
  {
    id: 1,
    name: "Email",
    contact: "satbeergautam540@gmail.com",
    icon: <MdEmail />,
  },
  {
    id: 0,
    name: "Adress",
    contact: "SGM Nagar ,Faridabaad",
    icon: <CiLocationOn />,
  },
];

const FlexDiv = styled.div`
  display: flex;
`;
const ContactDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media(max-width:550px){
    flex-direction:column;
    align-items:center;
  }
`;
const IconDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, #371c6b, #7f4bea);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin-top: 20px;
`;
const Div = styled.div`
  color: #fff;
`;
const Contact = React.forwardRef(({ onClick }, ref) => {
  return (
    <div
      style={{
        background: "#2a1454",
        padding: "3rem",
      }}
      ref={ref}
    >
      <ContactDiv>
        <div>
          <img
            src={logo}
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </div>
        <div>
          {ContactData?.map((i) => {
            return (
              <FlexDiv style={{ alignItems: "center" }}>
                <IconDiv>{i?.icon}</IconDiv>
                <div style={{ marginLeft: "5px" }}>
                  <Div>{i?.name}</Div>
                  <Div>{i?.contact}</Div>
                </div>
              </FlexDiv>
            );
          })}
        </div>
      </ContactDiv>
    </div>
  );
});

export default Contact;
