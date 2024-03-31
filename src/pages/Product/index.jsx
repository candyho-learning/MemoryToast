import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import styled from 'styled-components';
import api from '../../utils/api';
import ProductVariants from './ProductVariants';
import LoginWindow from '../../components/LoginWindow';
import ReactLoading from 'react-loading';

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
  p {
    margin-top: -4px;
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

  .commentStar,
  .commentEmptyStar {
    background-size: cover;
    cursor: pointer;
    caret-color: transparent;
    height: 20px;
    width: 20px;
  }

  .commentStar {
    background-image: url('/icons/star.png');
  }

  .commentEmptyStar {
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url('/icons/empty_star2.png');
  }

  .commentStar:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
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
    cursor: pointer;
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
    height: 100%;
    font-size: 18px;
    padding: 5px;
  }
`;

const FeedbackCommentWrapper = styled.div`
letter-spacing: 1px;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title{
  
    font-size: 20px;
  }
  .reviewGroup {
    .top {
      display: flex;
      gap: 20px;
      margin: 15px 0;
      .star {
        margin-right: -8px;
        font-size: 14px;
        font-weight: bold;
      }
      .user {
        margin-right: 20px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.8);
      }
    }
    .bottom {
      color: #4b5563;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      min-height: 80px;
      background-color: rgba(255, 166, 0, 0.2);
    }
  }
  .starGroup {
    margin-top: 2px;
    display: flex;
    gap: 10px;
    height: 20px;
    img {
      height: 12px;
      width: 12px;
    }
  }
  .more{
    width:100%;
    height:50px;
    border-radius: 5px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    letter-spacing: 1px;
    cursor: pointer;
    img{
      width: 20px;
      height: 20px;
      opacity: 0.7;
    }
  }
`;
const Loading = styled(ReactLoading)`
  margin-top: 50px;
`;
function Product() {
  const { user, isLogin, login, logout, loading } = useContext(AuthContext);
  const [checkLogin, setCheckLogin] = useState(false);
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [feedbackReview, setFeedbackReview] = useState({
    avgStar: 3.1,
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
  const [feedbackComment, setFeedbackComment] = useState([]);
  const getComment = async () => {
    try {
      const response = await fetch(
        `https://chouyu.site/api/1.0/comments?id=${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    const getcommentData = async () => {
      const { data } = await getComment();
      setFeedbackComment(data);
    };
    getcommentData();
  }, []);
  useEffect(() => {
    async function getProduct() {
      const { data } = await api.getProduct(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);
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
        number: star.clickedNumber,
        clicked: star.clicked,
        clickedNumber: star.clickedNumber,
      });
    }, 80);
  };
  const starReset = () => {
    setStar({
      number: star.clickedNumber,
      clicked: star.clicked,
      clickedNumber: star.clickedNumber,
    });
  };

  const sendReview = async() => {
    if (!isLogin) {
      setCheckLogin(true);
    }
    if (star.number === 0) {
      setErrMsg('記得先給評分哦!');
      return;
    }
    if (!comment) {
      setErrMsg('記得留言再送出評論哦!');
      return;
    }
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
const userId = userProfile.id;
console.log(typeof userId);
    try {
      console.log({userId:userId,
        productId: parseInt(id),
        rate: star.clickedNumber,
        comment: comment});
      const response = await fetch(
        `https://chouyu.site/api/1.0/comment/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId:userId,
            productId: id,
            rate: star.clickedNumber,
            comment: comment
          })
        }
      );
      console.log(response,'成功');
      setStar({number: 0,
        clicked: false,
        clickedNumber: 0,
      })
      setComment('');
      //const data = await response.json();
      console.log(data,'成功');
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const submitComment = (e) => {
    if (errMsg === '記得留言再送出評論哦') {
      setErrMsg('');
    }
    setComment(e.target.value);
  };
  const showMoreComment = async () => {
    const { data } = await getComment();
    console.log(data);
    if (data) setFeedbackComment([...feedbackComment, ...data]);
  };
  if (!product) return null;

  return (
    <>
      {!checkLogin && (
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
                <p className="reviews">
                  Reviews({feedbackReview.totalComments})
                </p>
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
              {isLogin ? '發表評論' : '請先登入'}
              </button>
            </div>
            <TextWrapper>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="請寫下大大寶貴的意見"
                onChange={submitComment}
                value={comment}
              ></textarea>
            </TextWrapper>
          </CommentWrapper>
          <FeedbackCommentWrapper>
            <p className='title'>最新評論</p>
            {feedbackComment &&
              feedbackComment.map((comment, index) => {
                return (
                  <div className="reviewGroup">
                    <div className="top">
                      <p className="user">{comment.name}</p>
                      <p className="star">{comment.rate}.0</p>
                      <div className="starGroup">
                        {[...Array(5)].map((star, index) => (
                          <img
                            src={
                              comment.rate >= index + 1
                                ? '/icons/star.png'
                                : '/icons/empty_star2.png'
                            }
                            alt=""
                          />
                        ))}
                      </div>
                    </div>
                    <div className="bottom">
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                );
              })}
            {/* <button onClick={showMoreComment}>查看更多</button> */}
              <div className='more' onClick={showMoreComment}>
                Show more
                </div>
          </FeedbackCommentWrapper>
        </Wrapper>
      )}

      {checkLogin && <LoginWindow setCheckLogin={setCheckLogin} />}
    </>
  );
}

export default Product;
