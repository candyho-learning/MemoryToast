import React, { useState, Fragment, useEffect } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function ColorPicker() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [colorName, setColorName] = useState(''); //儲存顏色的名字

  useEffect(() => {
    const setColor = async () => {
      const colorName = await getColorNameFromHSV();
      setColorName(colorName); //在這裡設置顏色名稱的狀態
    };
    setColor();
  }, [hsva]);
  async function getColorNameFromHSV() {
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
      return data.name.value;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  return (
    <Fragment>
      <Wheel
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
      />
      <div
        style={{
          width: '100%',
          height: 34,
          marginTop: 20,
          background: hsvaToHex(hsva),
        }}
      >
        <p>{colorName}</p>
      </div>
    </Fragment>
  );
}

export default ColorPicker;
