import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../utils/api';
import ProductVariants from './ProductVariants';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 65px 0 49px;
  display: flex;
  flex-wrap: wrap;
  hr {
    margin-top: 20px;
    width: 100%;
    background-color: #ccc;
  }

  @media screen and (max-width: 1279px) {
    padding: 0 0 32px;
  }
`;

const MainImage = styled.img`
  width: 460px;

  @media screen and (max-width: 1279px) {
    width: 100%;
  }
`;

const Details = styled.div`
  margin-left: 42px;
  flex-grow: 1;

  @media screen and (max-width: 1279px) {
    margin: 17px 24px 0;
  }
`;

const Title = styled.div`
  line-height: 38px;
  font-size: 32px;
  letter-spacing: 6.4px;
  color: #3f3a3a;
  width: 400px;
  white-space: wrap;
  @media screen and (max-width: 1279px) {
    line-height: 24px;
    font-size: 20px;
    letter-spacing: 4px;
  }
`;

const ID = styled.div`
  line-height: 24px;
  margin-top: 16px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #bababa;

  @media screen and (max-width: 1279px) {
    line-height: 19px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 3.2px;
  }
`;

const Price = styled.div`
  line-height: 36px;
  margin-top: 10px;
  font-size: 30px;
  color: #3f3a3a;
  padding-bottom: 20px;
  border-bottom: 1px solid #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    margin-top: 20px;
    font-size: 20px;
    padding-bottom: 10px;
  }
`;

const Detail = styled.div`
  line-height: 30px;
  font-size: 20px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 24px;
    font-size: 14px;
  }
`;

const Note = styled(Detail)`
  margin-top: 40px;

  @media screen and (max-width: 1279px) {
    margin-top: 28px;
  }
`;

const Texture = styled(Detail)`
  margin-top: 30px;

  @media screen and (max-width: 1279px) {
    margin-top: 24px;
  }
`;

const Description = styled(Detail)`
  white-space: pre;
`;

const Place = styled(Detail)`
  ${Description} + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 24px;
    }
  }
`;

const Story = styled.div`
  margin: 50px 0 0;
  width: 100%;

  @media screen and (max-width: 1279px) {
    margin: 28px 24px 0;
  }
`;

const StoryTitle = styled.div`
  line-height: 30px;
  font-size: 20px;
  letter-spacing: 4px;
  color: #8b572a;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1279px) {
    font-size: 16px;
    letter-spacing: 3.2px;
  }

  &::after {
    content: '';
    height: 1px;
    flex-grow: 1;
    background-color: #3f3a3a;
    margin-left: 64px;

    @media screen and (max-width: 1279px) {
      margin-left: 35px;
    }
  }
`;

const StoryContent = styled.div`
  line-height: 30px;
  margin-top: 28px;
  font-size: 20px;
  color: #3f3a3a;

  @media screen and (max-width: 1279px) {
    line-height: 25px;
    margin-top: 12px;
    font-size: 14px;
  }
`;

const Images = styled.div`
  margin: 30px 0 0;

  @media screen and (max-width: 1279px) {
    margin: 20px 24px 0;
    width: 100%;
  }
`;

const Image = styled.img`
  @media screen and (max-width: 1279px) {
    width: 100%;
  }

  & + & {
    margin-top: 30px;

    @media screen and (max-width: 1279px) {
      margin-top: 20px;
    }
  }
`;
const ReviewWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-bottom: 20px;
  align-items: end;
  gap: 20px;
  .score {
    display: block;
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  .reviews {
    margin-left: 10px;
    font-size: 20px;
    letter-spacing: 1.5px;
  }
`;
const AvgStarGroup = styled.div`
  position: relative;
  width: 140px;
  height: 20px;
  margin-bottom: 2px;
  display: flex;
  gap: 10px;
  opacity: 0.8;
  justify-content: space-between;
  img {
    height: 100%;
  }
  .star {
    width: 20px;
    height: 20px;
    background-size: cover;
    clip-path: polygon(0 0, 20% 0, 20% 100%, 0 100%);
    /* clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%) 50%*/
  }

  .empty-star {
    position: absolute;
    left: 0;
    z-index: -1;
    width: 20px;
    height: 20px;
  }
`;

const CommentWrapper = styled.div`
  width: 100%;

  .commentStar {
    background-image: url('/icons/star.png');
    height: 20px;
    width: 20px;
    background-size: cover;
    opacity: 0;
    cursor: pointer;
    caret-color: transparent;
  }
  .commentEmptyStar {
    z-index: -1;
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    background-image: url('/icons/empty_star2.png');
    background-size: cover;
    cursor: pointer;
    caret-color: transparent;
  }
  .commentStar:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
  .title {
    height: 50px;
    width: 100%;
    line-height: 30px;
    font-size: 20px;
    letter-spacing: 4px;
    color: #8b572a;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    margin-top: -2px;
  }
  .titleLeft {
    display: flex;
    gap: 20px;
  }
  .commentButton {
    width: 200px;
    height: 100%;
    font-size: 18px;
    background-color: #000;
    color: #fff;
    letter-spacing: 4px;
    border: none;
  }
  .errMsg {
    font-size: 15px;
    color: #ea0000;
    letter-spacing: 2px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 20px;
  textarea {
    width: 100%;
    font-size: 18px;
    padding: 5px;
  }
`;
function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [feedbackReview, setFeedbackReview] = useState({
    avgStar: 2.4,
    totalComments: 50,
  });
  const [star, setStar] = useState({
    number: 0,
    clicked: false,
    clickedNumber: 0,
  });
  const [comment, setComment] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const starTimer = useRef(null);
  const checkStarTimer = () => {
    if (starTimer.current) {
      clearTimeout(starTimer.current);
    }
  };
  const hoverStar = (index) => {
    checkStarTimer();
    setStar({
      number: index + 1,
      clicked: star.clicked,
      clickedNumber: star.clickedNumber,
    });
  };
  const leaveStar = () => {
    if (star.clicked) return;
    checkStarTimer();
    starTimer.current = setTimeout(() => {
      setStar({
        number: clickedNumber,
        clicked: star.clicked,
        clickedNumber: star.clickedNumber,
      });
    }, 80);
  };
  useEffect(() => {
    async function getProduct() {
      const { data } = await api.getProduct(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);

  const sendReview = () => {
    if (star.number === 0) {
      setErrMsg('記得先給評分哦!');
      return;
    }
    if (!comment) {
      setErrMsg('記得留言再送出評論哦!');
      return;
    }
  };

  const handleComment = (e) => {
    if (errMsg === '記得留言再送出評論哦') {
      setErrMsg('');
    }
    setComment(e.target.value);
  };

  const starReset = () => {
    setStar({
      number: star.clickedNumber,
      clicked: star.clicked,
      clickedNumber: star.clickedNumber,
    });
  };
  if (!product) return null;

  return (
    <Wrapper>
      <MainImage src={product.main_image} />
      <Details>
        <Title>{product.title}</Title>
        <ID>{product.id}</ID>
        <ReviewWrapper>
          <p className="score">{feedbackReview.avgStar}</p>
          <AvgStarGroup>
            {[...Array(5)].map((_, index) => {
              const { avgStar } = feedbackReview;
              const starPercent =
                avgStar > index && avgStar < index + 1
                  ? (avgStar - index) * 100
                  : avgStar < index
                  ? 0
                  : 100;
              return (
                <div key={index}>
                  <img
                    className="star"
                    src="/icons/star.png"
                    alt=""
                    style={{
                      clipPath: `polygon(0 0, ${starPercent}% 0, ${starPercent}% 100%, 0 100%)`,
                    }}
                  />
                  <img
                    className="empty-star"
                    src="/icons/empty_star2.png"
                    alt=""
                    style={{ marginLeft: `${index * 30}px` }}
                  />
                </div>
              );
            })}
            <p className="reviews">Reviews({feedbackReview.totalComments})</p>
          </AvgStarGroup>
        </ReviewWrapper>

        <Price>TWD.{product.price}</Price>
        <ProductVariants product={product} />
        <Note>{product.note}</Note>
        <Texture>{product.texture}</Texture>
        <Description>{product.description}</Description>
        <Place>素材產地 / {product.place}</Place>
        <Place>加工產地 / {product.place}</Place>
      </Details>
      <Story>
        <StoryTitle>細部說明</StoryTitle>
        <StoryContent>{product.story}</StoryContent>
      </Story>
      <Images>
        {product.images.map((image, index) => (
          <Image src={image} key={index} />
        ))}
      </Images>
      <hr />
      <CommentWrapper>
        <div className="title">
          <div className="titleLeft">
            <p>評論</p>
            <AvgStarGroup onMouseLeave={starReset}>
              {[...Array(5)].map((_, index) => {
                return (
                  <div>
                    <div
                      key={index}
                      className="commentStar"
                      style={{ opacity: index < star.number ? '1' : 0 }}
                      onMouseEnter={() => {
                        hoverStar(index);
                      }}
                      onMouseLeave={leaveStar}
                      onClick={() => {
                        setStar({
                          number: index + 1,
                          clicked: true,
                          clickedNumber: index + 1,
                        });
                        if (errMsg === '記得先給評分哦!') {
                          setErrMsg('');
                        }
                      }}
                    ></div>
                    <div key={index + 6} className="commentEmptyStar"></div>
                  </div>
                );
              })}
            </AvgStarGroup>
            <p className="errMsg">{errMsg}</p>
          </div>

          <button className="commentButton" onClick={sendReview}>
            發表評論
          </button>
        </div>
        <TextWrapper>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="請寫下大大寶貴的意見"
            onChange={handleComment}
            value={comment}
          ></textarea>
        </TextWrapper>
      </CommentWrapper>
    </Wrapper>
  );
}

export default Product;
