import React from 'react'
import styled from 'styled-components'

export default function Loader() {
  return (
    <ContainerLoader><div><h2>CARGANDO...</h2></div></ContainerLoader>
  )
}

const ContainerLoader = styled.div `
background-color: #76478947;
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

div {
  width: 30%;
  height: 30%;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d613f4;
  box-shadow: 10px 10px 30px #d46ede5c;

}

`
