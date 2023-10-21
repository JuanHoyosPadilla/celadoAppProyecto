import React,{useState,useEffect} from "react";
import styled from "styled-components";
import ViewUser from "./ViewUser";
import {getUsers} from '../services/servicesUsers'

export default function ViewUsers({toast}) {
  const [users,setUsers] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      getUsers().then((response) => setUsers(response.data) )
      
    }, 500);
    return () => clearInterval(interval);
  },[]);

  console.log(users)

  return (
    <ContainerViewUsers>
      <h2>Listado De Celadores</h2>
      <table className="table ">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Email</th>
            <th>Disponible</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody >
          {
            users.map(user => <ViewUser key={user._id} user={user} toast={toast} />)
          }
        </tbody>
      </table>
    </ContainerViewUsers>
  );
}

const ContainerViewUsers = styled.div`
  background-color: #eee9ef;
  width: 90%;
  height: 80%;
  box-shadow: 0px 0px 15px #b254c143;
  border-radius: 5px;
  padding: 10px 30px;

  h2 {
    font-size: 20px;
    font-weight: 400;
    
    /* ::after {
      position: absolute;
      content: "";
      border: 0.5px solid #39273e19;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      border-radius: 10px;
    } */
  }
`;
