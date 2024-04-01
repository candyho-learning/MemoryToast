import styled, { keyframes } from "styled-components";
import LoginWindow, { Button } from "../../components/LoginWindow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import ReactLoading from "react-loading";
import ScratchCard from "../../components/ScratchCard";
import CarouselCard from "./CarouselCard";

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 30px;

  h1 {
    font-size: 35px;
    margin: 60px 0;
  }

  .birthday-month-only {
    text-align: center;
    width: 100%;
  }

  .recommended-products-section {
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1100px) {
      flex-direction: column;

      .products {
        width: 50%;
      }
    }

    .products {
      width: 100%;
    }

    .texts {
      padding: 50px;

      h1 {
        font-size: 42px;
        font-weight: 550;
        line-height: 1.3;
      }
    }
  }
`;

const marqueeAnimation = keyframes`
  from {
    transform: translateX(30%);
  }
  to {
    transform: translateX(-100%);
  }
`;
const Marquee = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100px;
  overflow-x: hidden;
  margin-bottom: 50px;

  
  }
`;

const Track = styled.div`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  background-color: ${(props) => props.luckycolor || "#8b572a"};
  height: 70px;
  line-height: 2;
  color: white;
  font-weight: 800;
  .content {
    font-size: 34px;
    animation: ${marqueeAnimation} 30s linear infinite;
  }
`;

const GalleryContainer = styled.div`
  background-color: grey;
  width: 550px;
  height: 680px;
  @media screen and (max-width: 1100px) {
    margin: 0 auto;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const GameSection = styled.div`
  background-color: darkgrey;
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;

  button {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04aa6d;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;

    &: hover {
      cursor: pointer;
      background-color: #3e8e41;
    }

    &:active {
      background-color: #3e8e41;
      box-shadow: 0 5px #666;
      transform: translateX(-50%) translateY(4px);
    }
  }
`;

const Loading = styled(ReactLoading)`
  margin-top: 50px;
  margin-left: 50px;
`;

const Carousel = styled.div`
  width: 100%;
  height: 430px;
  overflow: hidden;
  background-color: #f1f1f1;

  .carousel-track {
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 30px 0;
    transition: all 1s ease-in-out;

    .card {
      width: 400px;
      height: 100%;
      background-color: #f1f1f1;
      flex-basis: 400px;
      flex-shrink: 0;
      margin: 0 50px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 20px;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      img {
        height: 70%;
        width: 100%;
        object-fit: cover;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
      }
      .card-text-content {
        padding: 20px 15px;

        h3 {
          margin: 5px 0;
          font-weight: 600;
          font-size: 24px;
        }

        button {
          border: none;
          padding: 5px 15px;
          border-radius: 10px;
          background-color: black;
          color: white;
          margin-top: 15px;

          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin-top: 25px;

  button {
    height: 50px;
    width: 50px;
    font-size: 40px;
    border: none;
    background-color: transparent;
    margin: 0 20px;
  }
`;
const marqueeSentence =
  "今天，星星閃爍著神秘的光芒，預示著你將迎來許多機遇和挑戰。勇敢地面對這些挑戰，並抓住機遇，因為它們將帶給你成長和成功的機會。🎁";

export default function LuckyColorLanding() {
  const { isLogin, user, loading } = useContext(AuthContext);
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1576740488939-3503ae080975?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTE4NzgxMTZ8&ixlib=rb-4.0.3&q=85"
  );
  const [mainProductId, setMainProductId] = useState();
  const [moreProducts, setMoreProducts] = useState();
  const [activeIndex, setActiveIndex] = useState(2);
  const [gameStatus, setGameStatus] = useState("uninitiated");
  const birthdayMonth = user.birthday.split("-")[1];
  const today = new Date();
  const nowMonth = (today.getMonth() + 1).toString().padStart(2, "0");

  const isBirthdayMonth = birthdayMonth === nowMonth;

  const handleScroll = (direction) => {
    setActiveIndex((prevIndex) =>
      direction === "left"
        ? Math.max(prevIndex - 1, 0)
        : Math.min(prevIndex + 1, 4)
    );
  };

  useEffect(() => {
    console.log(user.color.slice(1));
    const getRecommendedProducts = async () => {
      const response = await fetch(
        `https://traviss.beauty/api/1.0/recommendation?color=${user.color.slice(
          1
        )}&gender=men`
      );
      if (!response.ok) {
        console.log("cannot fetch recommended product");
      }
      const { data } = await response.json();
      console.log(data);
      const mainImage = data.main_image;
      const mainProductId = data.id;
      mainImage && setMainImage(mainImage);
      mainProductId && setMainProductId(mainProductId);
    };

    getRecommendedProducts();
  }, [user]);

  useEffect(() => {
    const getOtherProducts = async () => {
      const response = await fetch(
        `https://traviss.beauty/api/1.0/recommendation_by_product?product_id=${mainProductId}`
      );

      if (!response.ok) {
        console.log("cannot fetch other products");
      }

      const { data } = await response.json();
      console.log(data);
      setMoreProducts(data);
    };
    getOtherProducts();
  }, [mainProductId]);
  if (loading)
    return (
      <LandingPageWrapper>
        <h1>Loading your personal colorful experience...</h1>
        <Loading type="spinningBubbles" color="#313538" />
      </LandingPageWrapper>
    );
  if (!isLogin) return <LoginWindow />;
  return (
    <LandingPageWrapper>
      <div
        className="birthday-month-only"
        style={{ display: isBirthdayMonth ? "block" : "none" }}
      >
        <h1>本日運勢 🔮</h1>
        <Marquee>
          <Track luckycolor={user.color}>
            <div className="content">{marqueeSentence}</div>
          </Track>
        </Marquee>
      </div>

      {/* <h1>推薦商品 👍🏻</h1> */}
      <div className="recommended-products-section">
        <div className="products">
          <GalleryContainer>
            <a href={`/products/${mainProductId}`}>
              <img src={mainImage} />
            </a>
          </GalleryContainer>
        </div>
        <div className="texts">
          <p>幸運色商品推薦</p>
          <h1>These would look great on you, don't you think so?</h1>
        </div>
      </div>
      <h1>更多推薦商品</h1>
      <Carousel luckycolor={user.color}>
        <div
          className="carousel-track"
          style={{
            transform: `translateX(${(activeIndex - 2) * -500}px)`,
          }}
        >
          {moreProducts &&
            moreProducts.map((item, i) => (
              <CarouselCard url={item.main_image} key={item.id} />
            ))}
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
          <CarouselCard />
        </div>
      </Carousel>
      <ButtonsWrapper>
        <button onClick={() => handleScroll("left")}>⬅️</button>
        <button onClick={() => handleScroll("right")}>➡️</button>
      </ButtonsWrapper>
      <div
        className="birthday-month-only"
        style={{ display: isBirthdayMonth ? "block" : "none" }}
      >
        <h1>刮刮樂遊戲 🎲</h1>
        <GameSection>
          {gameStatus === "started" && <ScratchCard />}
          {gameStatus === "uninitiated" && (
            <button
              onClick={() => {
                setGameStatus("started");
              }}
            >
              Start Game
            </button>
          )}
        </GameSection>
      </div>
    </LandingPageWrapper>
  );
}
