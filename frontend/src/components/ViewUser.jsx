import React from "react";
import styled from "styled-components";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";
import avatarRespaldo from '../assets/perfil.png'
import {deletedUserId} from '../services/servicesUsers'


export default function ViewUser({ user,toast }) {
  const deleteUser = async (id) => {
    try {
      await deletedUserId(id)
      toast("Usuario Eliminado...", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
      
    } catch (error) {
      console.error(error)
    } 
  }
  return (
    <ContainerUser>
      <td>
        <div className="avatar">
          <img src={user.avatar?.secure_url || avatarRespaldo} alt="avatar" />
        </div>
      </td>
      <td>
        {user.name} {user.last_name}
      </td>
      <td>{user.phone}</td>
      <td> {user.email} </td>
      <td>
        {
          user.available ? <span className="disponible">Si</span> : <span className="noDisponible" >No</span>
        }
      </td>
      <td>
        {user.roles[0].name != 'admin' ? 
        <div className="opciones">
          <RiEdit2Fill className="icon1" />
          <RiDeleteBin6Line className="icon2" onClick={() => deleteUser(user._id)} />
        </div> : ''
        }
      
        
      </td>
    </ContainerUser>
  );
}

const ContainerUser = styled.tr`
  td {
    .avatar {
      
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
    .opciones {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;

      .icon1 {
        color: #8805f3;
        cursor: pointer;
      }
      .icon2 {
        color: #d22222;
        cursor: pointer;
      }
    }

    .disponible{
      color: green;
      font-weight: 700;
    }
    .noDisponible{
      color: red;
      font-weight: 700;
    }
  }
`;
