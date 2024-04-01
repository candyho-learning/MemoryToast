import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import ThankYou from "./pages/ThankYou";
import LoginWindow from "./components/LoginWindow";
import SignUpWindow from "./components/SignUpWindow";
import LuckyColorLanding from "./pages/LuckyColorLanding";
import ScratchCard from "./components/ScratchCard";
import ProtectedComponent from "./components/ProtectedComponent/ProtectedComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ScratchCard />}>
        <Route index element={<Home />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="login" element={<LoginWindow />} />
        <Route path="signup" element={<SignUpWindow />} />

        <Route path="profile" element={<Profile />} />
        <Route path="myluckycolor" element={<LuckyColorLanding />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
