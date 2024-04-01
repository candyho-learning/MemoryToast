import React, { useState, Fragment, useEffect, useRef } from "react";
import Wheel from "@uiw/react-color-wheel";
import { hsvaToHex } from "@uiw/color-convert";
import styled from "styled-components";
const ColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  .wheel {
    display: flex;
    justify-content: flex-end;
  }
`;

const PanetoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 165px;
`;
const ColorDiv = styled.div`
  width: 100%;
  background-color: #fff;
  height: 140px;
`;
const WhiteDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  height: 90px;
  padding: 8px;
  p:nth-of-type(1) {
    font-weight: bold;
    font-size: 20px;
  }
  p {
    display: block;
    width: 100%;
    margin: 0 !important;
    color: black;
    font-size: 14px;
  }
`;
function ColorPicker({ setColorName, colorName, setLuckyColorCode }) {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [hex, setHex] = useState("");
  // const [colorName, setColorName] = useState("");
  const isLoading = useRef(false);
  const firstLoading = useRef(true);
  useEffect(() => {
    let timerId;
    if (isLoading.current) return;

    timerId = setTimeout(async () => {
      if (firstLoading.current) {
        firstLoading.current = false;
        return;
      }
      isLoading.current = true;
      const colorData = await getColorDataFromHSV();
      isLoading.current = false;
      const colorName = colorData.name.value; //color name
      const colorHex = colorData.hex.value; //rgb color code
      setHex(colorHex);
      setLuckyColorCode(colorHex);
      setColorName(colorName);
    }, 50);

    return () => {
      clearTimeout(timerId);
    };
  }, [hsva, hex]);

  async function getColorDataFromHSV() {
    const hsvQueryString = `hsv=${hsva.h},${hsva.s},${hsva.v}`;
    const apiUrl = `https://www.thecolorapi.com/id?${hsvQueryString}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data from ${apiUrl}. Status: ${response.status}`
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

  return (
    <ColorPickerWrapper>
      <div className="wheel">
        <Wheel
          color={hsva}
          onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
        />
      </div>

      <PanetoneWrapper>
        <ColorDiv
          style={{
            background: hsvaToHex(hsva),
          }}
        ></ColorDiv>
        <WhiteDiv>
          <p>Lucky Color</p>
          <p>{hex}</p>
          <p>{colorName}</p>
        </WhiteDiv>
      </PanetoneWrapper>
    </ColorPickerWrapper>
  );
}

export default ColorPicker;
