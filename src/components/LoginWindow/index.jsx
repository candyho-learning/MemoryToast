import styled from "styled-components";
import { AuthContext } from "../../context/authContext";
import { useState, useContext } from "react";
import logo from "../Header/logo.png";
import api from "../../utils/api";

export const BackgroundMask = styled.div`
  background: radial-gradient(circle, #837568 50%, #313538);
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
  inset: 0;
  padding: 70px 10px;
  margin-top: 100px;
  opacity: 1;
`;

export const LoginBox = styled.div`
  display: flex;
  background-color: white;
  border: none;
  min-width: 300px;
  min-height: 500px;
  width: 70%;
  height: 65%;
  max-width: 800px;
  max-height: 800px;
  z-index: 5;
  margin: 0 auto;
  align-items: center;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  .left {
    width: 60%;
    background-color: #313538;
    height: 100%;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 40px;
    color: white;

    p {
      width: 300px;
      margin-top: 15px;
    }
  }

  .right {
    padding: 40px;
    text-align: center;
    height: 100%;
    width: 40%;

    img {
      height: auto;
      width: 70%;
      margin: 40px auto 0 auto;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 60px;
      color: #313538;
      algin-items: center;
      & * {
        height: 30px;
        border-radius: 20px;
      }

      h3 {
        font-weight: 600;
        margin-bottom: 15px;
        font-size: 22px;
      }

      a {
        margin-top: 10px;
        font-size: 11px;
        color: #313538;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
export const Input = styled.input`
  margin: 10px 0;
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #9c8c7c 30%, #b59f8d);
  padding: 3px 10px;
  color: white;
`;

export const FormTitle = styled.h1`
  font-size: 52px;
  margin-top: 120px;
  margin-bottom: 30px;
  text-align: left;
  font-weight: 800;
  line-height: 1.2;
`;

export const Button = styled.button`
  width: 100px;
  margin: 20px auto;
  background: linear-gradient(135deg, #9c8c7c 30%, #b59f8d);
  color: white;
  border: none;
  font-weight: 800;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    cursor: pointer;
  }
`;

export default function LoginWindow() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { login } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmail, userPassword);

    const loginData = {
      provider: "native",
      email: userEmail,
      password: userPassword,
      access_token: "",
    };

    const { data } = await api.signin(loginData);
    console.log(data);
    localStorage.setItem("accessToken", JSON.stringify(data.access_token));
    localStorage.setItem("userProfile", JSON.stringify(data.user));

    // try {
    //   const response = await fetch("http://50.16.87.98/api/1.0/user/signin", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(loginData),
    //   });

    //   const data = await response.json();
    //   console.log(data);
    // } catch (err) {
    //   console.error(err);
    // }
  }
  return (
    <BackgroundMask>
      <LoginBox>
        <div className="left">
          <FormTitle>Ready to Get STYLiSH?</FormTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
            quidem libero nobis quo ullam?
          </p>
        </div>
        <div className="right">
          {/* TODO: Add form action: login API with username and password */}
          <img src={logo} />

          <form onSubmit={handleSubmit}>
            <h3>WELCOME BACK...</h3>
            <Input
              type="email"
              name="email"
              placeholder="Your email..."
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <Input
              type="password"
              name="password"
              placeholder="Your password..."
              required
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
            <a href="#">Forgot Password?</a>
            <Button>Log In</Button>
          </form>
        </div>

        {/* Color picker */}
      </LoginBox>
    </BackgroundMask>
  );
}
