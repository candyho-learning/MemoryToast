import { useState } from "react";
import styled from "styled-components";
import {
  BackgroundMask,
  LoginBox,
  Input,
  FormTitle,
  Button,
} from "../LoginWindow";

const INITIAL_FORM_FIELDS = {
  name: "",
  email: "",
  password: "",
  birthday: "",
  colorCode: "",
  gender: "",
};

const Select = styled.select`
  margin: 10px 0;
  width: 100%;
  border: none;
  background: linear-gradient(135deg, #9c8c7c 30%, #b59f8d);
  padding: 3px 10px;
  color: white;
`;

const FORM_FIELDS = [
  { name: "name", type: "text", placeholder: "Your Full Name" },
  { name: "email", type: "email", placeholder: "Your Email" },
  { name: "password", type: "password", placeholder: "At least 6 characters" },
  { name: "birthday", type: "date" },
  { name: "colorCode", type: "text", placeholder: "Your Lucky Color" },
];
export default function SignUpWindow() {
  const [formState, setFormState] = useState(INITIAL_FORM_FIELDS);

  function handleFormChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <BackgroundMask>
      <LoginBox>
        <div className="left">
          <FormTitle>"Color is the language of fashion."</FormTitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea
            quidem libero nobis quo ullam?
          </p>
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
                key={item.name}
              />
            ))}
            <Select name="gender" onChange={handleFormChange}>
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
    </BackgroundMask>
  );
}
