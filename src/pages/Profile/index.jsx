import { useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { AuthContext } from "../../context/authContext";
import LoginWindow from "../../components/LoginWindow";
import "./index.css";
import { render } from "react-dom";

const Wrapper = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  width: 1280px;
  margin: 100px auto;
  display: flex;
  gap: 40px;

  @media screen and (max-width: 1280px) {
    width: 100%;
    flex-direction: column;
  }
`;

const MemberWrapper = styled.div`
  border-radius: 10px;
  padding-top: 50px;
  flex-grow: 0.3;
  align-items: center;
  display: flex;
  flex-direction: column;

  button.logout {
    background-color: blue;
    background: none;
    border: none;
    text-decoration: underline;
    font-size: 18px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const MemberPicWrapper = styled.div`
  width: 300px;
`;

const MemberPic = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  &:hover .circle-1 {
    transform: rotate(360deg);
  }

  &:hover .circle-2 {
    transform: rotate(-360deg);
  }
`;

const Circle1 = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: -3px;
  left: -3px;
  border-width: 10px;
  border-style: solid;
  border-color: #786450 #786450 #786450 transparent;
  border-radius: 50%;
  transition: all 1.5s ease-in-out;
`;

const Circle2 = styled.div`
  position: absolute;
  box-sizing: border-box;
  width: 110%;
  height: 110%;
  top: -6px;
  left: -6px;
  border-width: 10px;
  border-style: solid;
  border-color: #786450 transparent #786450 #786450;
  border-radius: 50%;
  transition: all 1.5s ease-in-out;
`;

const MemberPicImg = styled.img`
  width: 96%;
  height: 98%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 0;
  background: #f5e8df;
  display: block;
`;
const FuncWrapper = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const IconWrapper = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

const Loading = styled(ReactLoading)`
  margin-top: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

function Profile() {
  const { user, isLogin, login, logout, loading } = useContext(AuthContext);
  const servicesArr = [
    { service: "地址", path: "Address" },
    { service: "待付款", path: "AwaitingPayment" },
    { service: "待評價", path: "AwaitingReview" },
    { service: "待出貨", path: "AwaitingShipment" },
    { service: "待簽收", path: "Shipped" },
    { service: "客服訊息", path: "CustomerService" },
    { service: "退換貨", path: "Exchange" },
    { service: "貨到通知", path: "Notification" },
    { service: "帳戶退款", path: "Refunded" },
    { service: "手機綁定", path: "RegisterCellphone" },
    { service: "設定", path: "Settings" },
    { service: "收藏", path: "Starred" },
  ];

  const renderContent = () => {
    if (loading) return <Loading type="spinningBubbles" color="#313538" />;
    if (isLogin && user) {
      return (
        <>
          <ProfileWrapper>
            <MemberWrapper style={{ backgroundColor: `${user.color}` }}>
              <MemberPicWrapper>
                <MemberPic>
                  <Circle1 className="circle-1"></Circle1>
                  <Circle2 className="circle-2"></Circle2>
                  <MemberPicImg
                    src="https://previews.123rf.com/images/virtosmedia/virtosmedia2302/virtosmedia230209170/197936185-portrait-of-a-beautiful-young-woman-lying-on-the-grass-with-flowers.jpg"
                    alt=""
                  />
                </MemberPic>
              </MemberPicWrapper>
              <div className="memberInfoWrapper">
                <p>{`Name: ${user.name}`}</p>
                <p>{`Lucky color: ${user.color}`}</p>
                <p>{`Coupons: ${user.coupon}`}</p>
                <button class="blobby-button">
                  Change lucky color{" "}
                  <span class="inner">
                    <span class="blobs">
                      <span class="blob"></span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                      <span class="blob"></span>
                    </span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <filter id="goo">
                        <feGaussianBlur
                          in="SourceGraphic"
                          result="blur"
                          stdDeviation="10"
                        ></feGaussianBlur>
                        <feColorMatrix
                          in="blur"
                          mode="matrix"
                          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                          result="goo"
                        ></feColorMatrix>
                        <feBlend
                          in2="goo"
                          in="SourceGraphic"
                          result="mix"
                        ></feBlend>
                      </filter>
                    </defs>
                  </svg>
                </button>
              </div>
              <button className="logout" onClick={logout}>
                登出
              </button>
            </MemberWrapper>
            <FuncWrapper>
              {servicesArr.map((service) => (
                <IconWrapper key={service.service}>
                  <img src={`/icons/Icons_24px_${service.path}3x.png`} alt="" />
                  <p>{service.service}</p>
                </IconWrapper>
              ))}
            </FuncWrapper>
          </ProfileWrapper>
        </>
      );
    }

    // return <LogoutButton onClick={login}>登入</LogoutButton>;
    return <LoginWindow />;
  };
  return <Wrapper>{renderContent()}</Wrapper>;
}

export default Profile;
