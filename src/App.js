import React, { useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import AddCoupon from './components/private/addcoupon';
import Footer from './components/footer';
import LandingPage from './components/home';
import AlertDelete from './components/utils/delete';
import { useDisclosure } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Coupons from './components/coupons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfileData } from './components/auth/fetchProfileData';
import { fetchCouponsData } from './components/coupons/fetchCoupons';
import Profile from './components/profile';
import ChangePassword from './components/private/changepassword';
import ForgetPassword from './components/forget password';
import SendOtpForm from './components/register/components/sendOtp';
import VerifyMobileForm from './components/register/components/verifyOtp';
import ChatroomMain from './components/chats';
import ChatModel from './components/chats/chatModel';
import ForgetChangePassword from './components/forget password/change';
import ProtectedRoute from './components/private/utils/protectedRoute';

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.VERIFY_AUTH).result;
  const { token } = useSelector(state => state.getuser).result | { token: {} };
  useEffect(() => {
    fetchCouponsData(dispatch);
    if (isLoggedIn) {
      fetchProfileData(token?.refresh, token?.access, dispatch);
    }
    try {
      if (token?.access && isLoggedIn) {
        dispatch({ type: 'VERIFY_AUTH_ACTION', payload: { isLoggedIn: true } });
      }
    } catch {}
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route
          path="create-coupon"
          element={
            !isLoggedIn ? (
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                redirectPath={'/create-coupon'}
              />
            ) : (
              <AddCoupon />
            )
          }
        />
        <Route
          path="change-password"
          element={
            !isLoggedIn ? (
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                redirectPath={'/change-password'}
              />
            ) : (
              <ChangePassword />
            )
          }
        />
        {!isLoggedIn && (
          <>
            <Route path="login" element={<Login />} />
            <Route path="send-otp" element={<SendOtpForm />} />
            <Route path="verify-otp/:mobile" element={<VerifyMobileForm />} />
            <Route path="forget-password" element={<ForgetPassword />} />
            <Route
              path="password/reset/:uid/:token"
              element={<ForgetChangePassword />}
            />
            <Route path="register/:mobile" element={<Register />} />
          </>
        )}
        <Route path="coupons" element={<Coupons />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="chatroom/:id" element={<ChatModel />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
