import React, { useState } from "react";
import styled from "styled-components";
import { createUser } from "../services/servicesUsers";

export default function ModalForm({ setIsModalOpen,toast }) {
  const [isClick, setIsClick] = useState(false);
  const [newUser, setNewUser] = useState();
  const [file, setFile] = useState();

  const handelChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handelSubmitNewUser =async (e) => {
    e.preventDefault();
    setIsClick(true);
    const formData = new FormData();
    formData.append('avatar',file)
    formData.append('email',newUser.email)
    formData.append('password',newUser.password)
    formData.append('name',newUser.name)
    formData.append('last_name',newUser.last_name)
    formData.append('birthdate',newUser.birthdate)
    formData.append('phone',newUser.phone)
    formData.append('Address',newUser.Address)

    console.log(formData)
    try {
      await createUser(formData)
      
      setIsModalOpen(false)
      
      toast("Usuario Creado", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'foo-bar'
      });
      
    } catch (error) {
      console.error(error)
    }
  };
  

  return (
    <ContainerModal>
      <div className="modalbody">
        <form onSubmit={handelSubmitNewUser}>
          <h3>Registro Nuevo Celador</h3>
          <div className="inputs">
            <div>
              <label>Avatar</label>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={(e) =>
                  setFile( e.target.files[0])
                }
              />
            </div>

            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                onChange={(e) => handelChange(e)}
              />
            </div>

            <div>
              <input
                type="text"
                name="last_name"
                placeholder="Apellidos"
                onChange={(e) => handelChange(e)}
              />
            </div>

            <div>
              <input
                type="date"
                name="birthdate"
                placeholder="Fecha de nacimiento"
                onChange={(e) => handelChange(e)}
              />
            </div>

            <div>
              <input
                type="number"
                name="phone"
                placeholder="Telefono"
                onChange={(e) => handelChange(e)}
              />
            </div>

            <div>
              <input
                type="text"
                name="Address"
                placeholder="Direccion"
                onChange={(e) => handelChange(e)}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Correo"
                onChange={(e) => handelChange(e)}
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={(e) => handelChange(e)}
              />
            </div>
          </div>
          <div className="container-botton">
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
            {!isClick ? (
              <button type="submit">Guardar</button>
            ) : (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Loading...</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </ContainerModal>
  );
}

const ContainerModal = styled.div`
  position: fixed;
  background-color: #30243a2c;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalbody {
    background-color: #eee9ef;
    width: 80%;
    height: 80%;
    border-radius: 10px;
    box-shadow: 10px 10px 50px #b254c126;

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #683378;
        font-size: 25px;
      }
      .inputs {
        width: 90%;
        height: 50%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        div {
          width: 90%;
          height: 50px;
          justify-content: center;
          input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            background-color: transparent;
            border-bottom: 1px solid rgba(62, 52, 72, 0.712);
            color: #683378;
          }
        }
      }

      .container-botton {
        width: 90%;
        height: 50px;
        display: flex;
        justify-content: end;
        gap: 1rem;
        button {
          border: none;
          background-color: #683378;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
    }
  }
`;
