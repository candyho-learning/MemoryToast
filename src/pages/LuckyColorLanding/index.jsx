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
  padding: 0 30px;

  h1 {
    font-size: 35px;
    margin: 60px 0;
  }

  .recommended-products-section {
    display: flex;
    justify-content: center;
    align-items: center;

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
    transform: translateX(0%);
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
    animation: ${marqueeAnimation} 100s linear infinite;
  }
`;

const GalleryContainer = styled.div`
  background-color: grey;
  width: 550px;
  height: 680px;

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
  width: 1000px;
  height: 430px;
  overflow: hidden;
  background-color: #f1f1f1;

  .carousel-track {
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 30px 0;

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
        padding: 20px 10px;

        h3 {
          margin: 15px 0;
          font-weight: 600;
          font-size: 24px;
        }

        button {
          border: none;
          padding: 5px 15px;
          border-radius: 10px;
          background-color: black;
          color: white;
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
const marqueeSentence = "Infinite Marquee with long sentence";

export default function LuckyColorLanding() {
  const { isLogin, user, loading } = useContext(AuthContext);
  const [mainImage, setMainImage] = useState(
    "https://images.unsplash.com/photo-1576740488939-3503ae080975?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTE4NzgxMTZ8&ixlib=rb-4.0.3&q=85"
  );
  const [moreProducts, setMoreProducts] = useState();

  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 400; // Match this with your actual card width + margin/gap
  const handleScroll = (direction) => {
    setActiveIndex((prevIndex) =>
      direction === "left" ? prevIndex - 1 : prevIndex + 1
    );
  };
  console.log(activeIndex);

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
      const moreProducts = data.images;
      mainImage && setMainImage(mainImage);
      moreProducts && setMoreProducts(moreProducts);
    };
    getRecommendedProducts();
  }, [user]);
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
      <h1>本日運勢 🔮</h1>
      <Marquee>
        <Track luckycolor={user.color}>
          <div className="content">{marqueeSentence.repeat(10)}</div>
        </Track>
      </Marquee>
      {/* <h1>推薦商品 👍🏻</h1> */}
      <div className="recommended-products-section">
        <div className="products">
          <GalleryContainer>
            <img src={mainImage} />
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
            transform: `translateX(${(activeIndex + 2) * cardWidth + 50}px)`,
          }}
        >
          {moreProducts &&
            moreProducts.map((img) => <CarouselCard url={img} />)}
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

      <h1>刮刮樂遊戲 🎲</h1>
      <GameSection>
        <ScratchCard />
        <button>Start Game</button>
      </GameSection>
    </LandingPageWrapper>
  );
}
