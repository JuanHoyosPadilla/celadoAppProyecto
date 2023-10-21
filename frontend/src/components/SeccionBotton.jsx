import React from 'react'
import styled from 'styled-components'

export default function SeccionBotton({setIsModalOpen}) {
  return (
    <ContainerBotton>
        <button>Celadores</button>
        <button>Horarios</button>
        <button onClick={() => setIsModalOpen(true)} >Registrar nuevo Celador</button>
    </ContainerBotton>
  )
}

const ContainerBotton = styled.div `
width: 90%;
height: 20%;

display: flex;
align-items: center;
justify-content: space-around;
button {
    border: none;
    width: 25%;
    height: 80%;
    background-color: #eee9ef;
    cursor: pointer;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 500;
    box-shadow: 10px 10px 10px #b254c143;
    color: #39273e;
    padding: 0 10px;
    transition: all 0.3s ease-out;
    :hover {
       background-color: #c855ef16;
       color: #964dc0;
    }
}
`
