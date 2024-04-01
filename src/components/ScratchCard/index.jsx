import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";
const Container = styled.div`
  position: relative;
  border-radius: 0.6em;
  width: 600px;
  height: 400px;
`;

const ScratchCanvas = styled.canvas`
  height: 200px;
  width: 200px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  text-align: center;
  cursor: grabbing;
  border-radius: 2em;
`;

const ScratchOverlay = styled.div`
  border-radius: 40px;
  width: 100%;
  height: 100%;
`;

const ScratchImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  background-color: #6b5c5b;
  border-radius: 40px;
  color: #fff;
  width: 100%;
  height: 100%;
  margin-top: 1px;
  p {
    margin: 0;
    padding: 0;
  }
`;
const ScratchCard = () => {
  const [coupon, setCoupon] = useState();
  const [gameOver, setGameOver] = useState(false);
  const { setUser } = useContext(AuthContext);

  const randomCoupon = () => {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      setCoupon({
        text: "再接再厲! 可悲仔～～",
        bingo: false,
      });
    } else {
      setCoupon({
        text: "恭喜中獎！ 全館商品5折",
        bingo: true,
      });
    }
  };
  useEffect(() => {
    randomCoupon();
    const canvasElement = document.getElementById("scratch");
    const canvasContext = canvasElement.getContext("2d");

    const initializeCanvas = () => {
      const gradient = canvasContext.createLinearGradient(0, 0, 135, 135);
      gradient.addColorStop(0, "#dddddd");
      gradient.addColorStop(1, "#888888");
      canvasContext.fillStyle = gradient;
      canvasContext.fillRect(0, 0, 200, 200);
    };

    let isDragging = false;

    const eventTypes = {
      mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
      },
      touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
      },
    };

    let deviceType = "";

    const checkIfTouchDevice = () => {
      try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
      } catch (e) {
        deviceType = "mouse";
        return false;
      }
    };

    const getMouseCoordinates = (event) => {
      const rect = canvasElement.getBoundingClientRect();
      const x =
        ((event.clientX - rect.left) / (rect.right - rect.left)) *
        canvasElement.width;
      const y =
        ((event.clientY - rect.top) / (rect.bottom - rect.top)) *
        canvasElement.height;
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

    window.addEventListener(eventTypes[deviceType].down, handleMouseDown);
    window.addEventListener(eventTypes[deviceType].move, handleMouseMove);
    window.addEventListener(eventTypes[deviceType].up, handleMouseUp);
    window.addEventListener("mouseleave", handleMouseUp);

    const scratch = (x, y) => {
      canvasContext.globalCompositeOperation = "destination-out";
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

      if (transparentPercentage >= 45) {
        canvasContext.clearRect(0, 0, 200, 200);
        setGameOver(true);
      }
    };

    initializeCanvas();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (coupon) {
        if (coupon.bingo) {
          addCoupon();
          alert("太神啦，準備購物囉!");
        } else {
          alert("再接再厲，下次一定!");
        }
      }
    }, 100);
  }, [gameOver]);

  const addCoupon = async () => {
    const userProfileString = localStorage.getItem("userProfile");
    const userProfile = JSON.parse(userProfileString);
    const userId = userProfile.id;
    console.log("使用者", userId);
    try {
      const response = await fetch(
        `https://chouyu.site/api/1.0/coupon/update?num=1&userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data, "添加優惠券成功");
      setUser((prevUser) => {
        return {
          ...prevUser,
          coupon: prevUser.coupon + 1,
        };
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Container>
      <ScratchCanvas
        id="scratch"
        className="scratch-canvas"
        width="200"
        height="200"
        style={{
          width: "100%",
          height: "100%",
          cursor:
            'url("https://cdn-icons-png.flaticon.com/32/5219/5219370.png"), auto',
        }}
      ></ScratchCanvas>
      <ScratchOverlay>
        {coupon && (
          <ScratchImage>
            <p>{coupon.text}</p>
          </ScratchImage>
        )}
      </ScratchOverlay>
    </Container>
  );
};

export default ScratchCard;
