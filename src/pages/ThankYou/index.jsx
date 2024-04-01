import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 160px 20px 60px 20px;
  height: calc(100% - 225px);
  background-color: #696969;
  background-image: url('/thankyou.jpg');
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
  margin-top: 24px;
`;

const BuyButton = styled.div`
  margin-top: 40px;
  button {
    --b: 3px;
    --s: 0.15em;
    --c: #bd5532;

    padding: calc(0.05em + var(--s)) calc(0.3em + var(--s));
    color: var(--c);
    --_p: var(--s);
    background: conic-gradient(
        from 90deg at var(--b) var(--b),
        #0000 90deg,
        var(--c) 0
      )
      var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
      calc(100% - var(--b) - 2 * var(--_p));
    transition: 0.3s linear, color 0s, background-color 0s;
    outline: var(--b) solid #0000;
    outline-offset: 0.2em;
  }
  button:hover,
  button:focus-visible {
    --_p: 0px;
    outline-color: var(--c);
    outline-offset: 0.05em;
  }
  button:active {
    background: var(--c);
    color: #fff;
  }

  body {
    height: 100vh;
    margin: 0;
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    place-content: center;
    background: #daedfb;
  }
  button {
    font-family: system-ui, sans-serif;
    font-weight: bold;
    font-size: 2.5rem;
    cursor: pointer;
    border: none;
    margin: 0.1em;
  }
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
        <BuyButton>
          <BackButton onClick={() => navigate('/')}>繼續購物</BackButton>
        </BuyButton>
      </Card>
    </Wrapper>
  );
}

export default ThankYou;
