import React, { useState, Fragment, useEffect, useRef } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function ColorPicker() {
  const [hsva, setHsva] = useState({ h: 214, s: 43, v: 90, a: 1 });
  const [colorName, setColorName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timerId;
    if (isLoading) return;
    setIsLoading(true);
    timerId = setTimeout(async () => {
      console.log('open')
      
      const colorData = await getColorDataFromHSV();
      const colorName = colorData.name.value;
      const colorRGB = colorData.rgb
      setColorName(colorName);
      setIsLoading(false);
    }, 40);

    return () => {
      clearTimeout(timerId);
    };
  }, [hsva]);
  // useEffect(() => {
  //   const setColor = async () => {
  //     const colorData = await getColorDataFromHSV();
  //     const colorName = colorData.name.value
  //     console.log(colorData.name.value,colorData.rgb)
  //   };
  //   setColor();
  // }, [hsva]);
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
