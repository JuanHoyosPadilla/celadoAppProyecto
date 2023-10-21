import { useContext, useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";


import styled from "styled-components";
import SeccionBotton from "../components/SeccionBotton";
import ViewUsers from "../components/ViewUsers";
import ModalForm from "../components/ModalForm";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PanelAdmin() {
  const { user,setUser } = useContext(GlobalContext);
  const [isModalopen,setIsModalOpen] = useState(false)
  const [isLoading,setIsLoading] = useState(true)


  const Loading = () => {
    return <div>cargando...</div>
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(false)
    }, 500);
    return () => clearInterval(interval);
  },[])

  
  return (
    <ContainerAdmin>
      <ToastContainer autoClose={500} />
      {
        isModalopen && <ModalForm setIsModalOpen={setIsModalOpen} toast={toast} />
      }
      <SeccionBotton setIsModalOpen={setIsModalOpen} />
      <div className="containerData">
        {
          isLoading ? <Loading/>: <ViewUsers toast={toast} />
        }
        
        
        
      </div>
    </ContainerAdmin>
  );
}

const ContainerAdmin = styled.div `
  
  width: 100%;
  height: 100vh;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .containerData{
    
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

`