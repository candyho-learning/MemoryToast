import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  BackgroundMask,
  LoginBox,
  Input,
  FormTitle,
  Button,
} from "../LoginWindow";

import ColorPicker from "../ColorPicker";
import { AuthContext } from "../../context/authContext";

const INITIAL_FORM_FIELDS = {
  name: "",
  email: "",
  password: "",
  birthday: "",
  colorCode: "",
  gender: "",
};

const DynamicBackgroundMask = styled(BackgroundMask)`
  background: radial-gradient(
    circle,
    ${(props) => props.color || "#837568"} 10%,
    #313538
  );
`;

const Select = styled.select`
  margin: 10px 0;
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #9c8c7c 30%, #b59f8d);
  padding: 3px 10px;
  color: white;
`;

const SuccessMessage = styled.div`
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  background: radial-gradient(
    circle,
    ${(props) => props.color || "#837568"} 10%,
    #313538
  );
  height: 90vh;
  padding: 150px 50px 50px 50px;
  color: white;

  h1 {
    margin-bottom: 30px;
  }
  a {
    color: white;
    font-size: 24px;
  }
`;

export default function SignUpWindow() {
  const [formState, setFormState] = useState(INITIAL_FORM_FIELDS);
  const [luckyColorCode, setLuckyColorCode] = useState("pink");
  const [luckyColorName, setLuckyColorName] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { login, isLogin, user } = useContext(AuthContext);

  const FORM_FIELDS = [
    { name: "name", type: "text", placeholder: "Your Full Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    {
      name: "password",
      type: "password",
      placeholder: "At least 6 characters",
    },
    { name: "birthday", type: "date" },
    {
      name: "colorCode",
      type: "text",
      placeholder: "Your Lucky Color",
      value: { luckyColorName },
    },
  ];

  function handleFormChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);

    const signUpData = {
      name: formState.name,
      email: formState.email,
      password: formState.password,
      color: formState.colorCode,
      birthday: formState.birthday,
      gender: formState.gender,
    };
    try {
      const response = await fetch("https://chouyu.site/api/1.0/user/signup", {
        body: JSON.stringify(signUpData),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        method: "POST",
      });
      if (!response.ok) {
        throw new error("sign up failed");
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      login({
        provider: "native",
        email: formState.email,
        password: formState.password,
        access_token: "",
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setFormState({
      ...formState,
      colorCode: luckyColorName,
    });
  }, [luckyColorName]);
  if (isLogin) {
    return (
      <SuccessMessage color={luckyColorCode}>
        <h1>{`Glad to Have You On Board!`}</h1>
        <a href="/">Go to hompage</a>
      </SuccessMessage>
    );
  }
  return (
    <DynamicBackgroundMask color={luckyColorCode}>
      <LoginBox>
        <div className="left">
          <div
            className="text-content"
            style={{ display: showColorPicker ? "none" : "block" }}
          >
            <FormTitle>"Color is the language of fashion."</FormTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
              quidem libero nobis quo ullam?
            </p>
          </div>
          <div
            className="color-picker-area"
            style={{ display: showColorPicker ? "block" : "none" }}
          >
            <ColorPicker
              setColorName={setLuckyColorName}
              colorName={luckyColorName}
              setLuckyColorCode={setLuckyColorCode}
            />
            <button
              style={{ height: "30px", marginTop: "30px", marginLeft: "240px" }}
              onClick={() => {
                setShowColorPicker(false);
              }}
            >
              Confirm Color!
            </button>
          </div>
        </div>
        <div className="right">
          {/* TODO: Add form action: login API with username and password */}
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <h3>Hi! JOIN US</h3>
            {FORM_FIELDS.map((item) => (
              <Input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                onChange={handleFormChange}
                value={
                  item.name === "colorCode"
                    ? luckyColorCode
                    : formState[item.name]
                }
                onFocus={
                  item.name === "colorCode"
                    ? () => {
                        setShowColorPicker(true);
                      }
                    : () => {}
                }
                key={item.name}
                required
              />
            ))}
            <Select name="gender" onChange={handleFormChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
            </Select>
            <Button>Sign Up</Button>
          </form>
        </div>

        {/* Color picker */}
      </LoginBox>
    </DynamicBackgroundMask>
  );
}
