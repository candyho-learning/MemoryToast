import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 160px 20px 60px 20px;
  height: calc(100% - 225px);
  background-color: #696969;
  background-image: url('https://tophinhanhdep.com/wp-content/uploads/2021/10/Black-Gradient-Wallpapers.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Card = styled.div`
  position: relative;
  border-radius: 10px;
  width: 400px;
  height: 420px;
  background-color: white;
  padding-top: 50px;
  .title {
    margin-top: 50px;
    font-size: 30px;
    font-weight: bold;
  }
  img {
    position: absolute;
    left: 120px;
    top: -80px;
    width: 150px;
  }
`;
const Title = styled.div`
  margin-top: 50px;
  padding-bottom: 16px;
  font-size: 24px;
`;

const Content = styled.div`
  margin-top: 24px;
  font-size: 18px;
`;

const BackButton = styled.button`
  margin-top: 70px;
  width: 300px;
  height: 50px;
  font-size: 18px;
  background-color: #000;
  color: #fff;
  letter-spacing: 4px;
  border: none;
  cursor: pointer;
`;



function ThankYou() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Card>
        <img src="/icons/checked.png" alt="" />
        <div className="title">THANK YOU</div>
        <Title>感謝您的購買，我們會盡快送達！</Title>
        <Content>請確認您的購買金額為:{state.data}元</Content>
          <BackButton className="commentButton"  onClick={() => navigate('/')}>
            繼續購物
          </BackButton>
      </Card>
    </Wrapper>
  );
}

export default ThankYou;
