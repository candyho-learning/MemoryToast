import React, { useEffect } from 'react';
import './index.css';

const ScratchCard = () => {
  useEffect(() => {
    const canvasElement = document.getElementById('scratch');
    const canvasContext = canvasElement.getContext('2d');

    const initializeCanvas = () => {
      const gradient = canvasContext.createLinearGradient(0, 0, 135, 135);
      gradient.addColorStop(0, '#dddddd'); // 开始颜色为灰色
      gradient.addColorStop(1, '#888888');
      canvasContext.fillStyle = gradient;
      canvasContext.fillRect(0, 0, 200, 200);
    };

    let isDragging = false;

    const eventTypes = {
      mouse: {
        down: 'mousedown',
        move: 'mousemove',
        up: 'mouseup',
      },
      touch: {
        down: 'touchstart',
        move: 'touchmove',
        up: 'touchend',
      },
    };

    let deviceType = '';

    const checkIfTouchDevice = () => {
      try {
        document.createEvent('TouchEvent');
        deviceType = 'touch';
        return true;
      } catch (e) {
        deviceType = 'mouse';
        return false;
      }
    };

    const getMouseCoordinates = (event) => {
      const rect = canvasElement.getBoundingClientRect();
      const x = (event.clientX - rect.left) / (rect.right - rect.left) * canvasElement.width;
      const y = (event.clientY - rect.top) / (rect.bottom - rect.top) * canvasElement.height;
      return { x, y };
    };

    checkIfTouchDevice();

    const handleMouseDown = (event) => {
      isDragging = true;
      event.preventDefault();
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        event.preventDefault();
        const { x, y } = getMouseCoordinates(event);
        scratch(x, y);
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    canvasElement.addEventListener(eventTypes[deviceType].down, handleMouseDown);
    canvasElement.addEventListener(eventTypes[deviceType].move, handleMouseMove);
    canvasElement.addEventListener(eventTypes[deviceType].up, handleMouseUp);
    canvasElement.addEventListener('mouseleave', handleMouseUp);

    const scratch = (x, y) => {
        canvasContext.globalCompositeOperation = 'destination-out';
        canvasContext.beginPath();
        canvasContext.arc(x, y, 12, 0, 2 * Math.PI);
        canvasContext.fill();
      
        const pixels = canvasContext.getImageData(0, 0, 200, 200).data;
        let transparentPixelCount = 0;
        for (let i = 0; i < pixels.length; i += 4) {
          if (pixels[i + 3] === 0) {
            transparentPixelCount++;
          }
        }
        const transparentPercentage = (transparentPixelCount / (200 * 200)) * 100;
      
        if (transparentPercentage >= 40) {
          canvasContext.clearRect(0, 0, 200, 200);
          onComplete(); 
        }
      };

    initializeCanvas();
  }, []);

  return (
    <div className="container">
      <canvas
        id="scratch"
        className="scratch-canvas"
        width="200"
        height="200"
        style={{ width: '100%', height: '100%', cursor: 'url("https://cdn-icons-png.flaticon.com/32/5219/5219370.png"), auto' }}
      ></canvas>
      <div className="scratch-overlay">
        <img className="scratchimg" src="../../../public/card.jpg" alt="Scratch Card" />
      </div>
    </div>
  );
};

export default ScratchCard;
