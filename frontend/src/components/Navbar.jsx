import React, { useContext } from "react";
import styled from "styled-components";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { GlobalContext } from "../context/GlobalContext";

import avatarRespaldo from "../assets/perfil.png";

export default function Navbar() {
  const { user, setUser } = useContext(GlobalContext);
  const closeSession = () => {
    window.sessionStorage.removeItem("session");
    setUser(null);
  };
  return (
    <ContainerNavbar>
      <div className="logo">
        <span>CeladorAPP</span>
      </div>
      <div className="avatarContainer">
        <div className="containerImagen">
          <img src={user?.avatar?.secure_url || avatarRespaldo} alt="imagen" />
        </div>
        <span>{user?.name} {user?.last_name} </span>
      </div>
      <RiLogoutBoxRLine className="icon" onClick={closeSession} />
    </ContainerNavbar>
  );
}

const ContainerNavbar = styled.div`
  width: 100%;
  height: 60px;

  z-index: -1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo {
    span {
      font-size: 25px;
      font-weight: 700;
      color: #683378;
    }
  }

  .avatarContainer {
    width: 40%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
    color: #39273e;
    .containerImagen {
      border: solid 1px #c300ff;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .icon {
    font-size: 30px;
    cursor: pointer;
    color: #39273e;
  }
`;
