import { useEffect, useState } from 'react';
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

  @media screen and (max-width: 1279px) {
    padding: 0 0 32px;
  }
`;

const MainImage = styled.img`
  width: 560px;

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
  display: flex;
  align-items: end;
  gap: 20px;
`;
const AvgStarGroup = styled.div`
  position: relative;
  width: 140px;
  height: 20px;
  margin-top: 10px;
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

const AvgRating = styled.div`
  height: 20px;
  display: flex;
  gap: 10px;
  padding-top: 2px;
  span {
    font-size: 14px;
  }
`;

function Product() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    avgStar: 2.4,
    totalComments: 50,
  });

  useEffect(() => {
    async function getProduct() {
      const { data } = await api.getProduct(id);
      setProduct(data);
    }
    getProduct();
  }, [id]);

  if (!product) return null;

  return (
    <Wrapper>
      <MainImage src={product.main_image} />
      <Details>
        <Title>{product.title}</Title>
        <ID>{product.id}</ID>
        <ReviewWrapper>
          <AvgStarGroup>
            {[...Array(5)].map((_, index) => {
              const { avgStar } = reviewData;
              console.log(avgStar);
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
                    src="/public/icons/star.png"
                    alt=""
                    style={{
                      clipPath: `polygon(0 0, ${starPercent}% 0, ${starPercent}% 100%, 0 100%)`,
                    }}
                  />
                  <img
                    className="empty-star"
                    src="/public/icons/empty_star2.png"
                    alt=""
                    style={{ marginLeft: `${index * 30}px` }}
                  />
                </div>
              );
            })}
          </AvgStarGroup>
          <AvgRating>
            <p>{reviewData.avgStar}</p>
            <span>/</span>
            <p>{reviewData.totalComments}</p>
          </AvgRating>
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
    </Wrapper>
  );
}

export default Product;
