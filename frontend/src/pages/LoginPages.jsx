import { useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import styled from "styled-components";
import imagenContainer from "../assets/imagen.png";
import { loginSubmit } from "../services/servicesLogin";
import { GlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(GlobalContext);

  const [inputsValue, setInputsValue] = useState();
  const [isClick, setIsClick] = useState(false);

  //const [role, setRole] = useState(null);

  const handelChange = (e) => {
    setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
  };

  const loginFuction = (e) => {
    e.preventDefault();
    loginSubmit(inputsValue)
      .then((res) => {
        console.log(res.data)
        if (!res.data.token) {
          return alert(res.data.message);
        } else {
          setTimeout(() => {
            setIsClick(true);
          }, 500);
          setUser(res.data);
          window.sessionStorage.setItem("session", JSON.stringify(res.data));

        }
      })
      .catch((error) => console.error(error));
    
  };

  return (
    <>
      <ContainerLogin>
        <div className="container-form">
          <div className="form">
            <form onSubmit={loginFuction}>
              <h3>Login</h3>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => handelChange(e)}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => handelChange(e)}
                />
              </div>
              <div className="container-botton">
                {!isClick ? (
                  <button type="submit">Enter</button>
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
        </div>
        <div className="container-img">
          <h1>Celador App</h1>
          <img src={imagenContainer} alt="imagen" />
          <p>Gestiona el horario de tus celadores.</p>
        </div>
      </ContainerLogin>
    </>
  );
}

const ContainerLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 1rem;
  .container-form {
    width: 40%;
    background-color: #c300ff;
    display: flex;
    justify-content: center;
    align-items: center;
    .form {
      width: 80%;
      height: 50%;
      background-color: rgb(237, 230, 244);
      border-radius: 10px;
      box-shadow: 10px 10px 30px rgba(62, 52, 72, 0.712);
      padding: 10px;

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

        .container-botton {
          width: 90%;
          height: 50px;
          display: flex;
          justify-content: end;
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
  }
  .container-img {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: #683378;
      font-weight: 800;
      font-size: 50px;
    }
    img {
      width: 50%;
      height: 70%;
    }
    p {
      color: #4b2157;
      font-size: 17px;
      font-weight: 500;
    }
  }
`;
