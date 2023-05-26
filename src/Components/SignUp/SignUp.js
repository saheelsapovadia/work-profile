import React, { useState } from "react";
import { GlobalStyle } from "../../globalStyles";
import styled from "styled-components";
import { Modal } from "../Modal/Modal";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  max-width: 200px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const InfoText = styled.p`
  position: absolute;
  top: 10px;
  color: orange;
  text-align: center;
`;

export const SignUp = ({ setUserData }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100% ",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InfoText>
        To visit profile page enter all the details in the sign up form!{" "}
      </InfoText>
      <Button onClick={openModal}>Sign up</Button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setUserData={setUserData}
      ></Modal>
    </div>
  );
};
