import styled, { keyframes } from "styled-components";
import LoginWindow, { Button } from "../../components/LoginWindow";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

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
  background-color: #8b572a;
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
  display: grid;
  grid-column-template: 200px 200px;
  grid-row-template: 200px 200px;
  background-color: grey;

  .product.main {
    grid-row: 1/3;
    grid-column: 2/3;
    background-color: pink;
  }

  .product {
    background-color: skyblue;
    border: 2px solid white;
    overflow: hidden;
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

const marqueeSentence = "Infinite Marquee with long sentence";

export default function LuckyColorLanding() {
  const { isLogin } = useContext(AuthContext);
  if (!isLogin) return <LoginWindow />;
  return (
    <LandingPageWrapper>
      <h1>本日運勢 🔮</h1>
      <Marquee>
        <Track>
          <div className="content">{marqueeSentence.repeat(10)}</div>
        </Track>
      </Marquee>
      {/* <h1>推薦商品 👍🏻</h1> */}
      <div className="recommended-products-section">
        <div className="products">
          <GalleryContainer>
            <div className="product main">
              <img src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTE3NzM5MDN8&ixlib=rb-4.0.3&q=85" />
            </div>
            <div className="product">
              <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTE3NzM5MDN8&ixlib=rb-4.0.3&q=85" />
            </div>
            <div className="product">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTE3NzQ1OTJ8&ixlib=rb-4.0.3&q=85" />
            </div>
          </GalleryContainer>
        </div>
        <div className="texts">
          <p>幸運色商品推薦</p>
          <h1>These would look great on you, don't you think so?</h1>
        </div>
      </div>

      <h1>刮刮樂遊戲 🎲</h1>
      <GameSection>
        <button>Start Game</button>
      </GameSection>
    </LandingPageWrapper>
  );
}
