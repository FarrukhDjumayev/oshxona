import React from "react";
import { Button, Form, Input, notification } from "antd";
import { users } from "../../constants";
import { useNavigate } from "react-router-dom";
import Particles from "./Particles/Particles";
import SplitText from "./SplitText";

const Login = () => {
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    console.log("Login yozuvi to'liq animatsiya qilindi!");
  };

  const loginHandle = (values) => {
    let findUser = users.find(
      (user) =>
        user.full_name === values.full_name && user.password === values.password
    );

    if (!findUser) {
      notification.error({
        message: "Login yoki parol noto‘g‘ri kiritilgan",
        description: "Marhamat, qayta urinib ko‘ring",
      });
      return;
    }

    localStorage.setItem("isAuth", "true");

    switch (findUser.role) {
      case "oshpaz":
        navigate("/oshpaz");
        break;
      case "girgitton":
        navigate("/girgitton");
        break;
      default:
        notification.warning({
          message: "Noma’lum rol",
          description: "Administratorga murojaat qiling",
        });
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center flex-col gap-3 items-center bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>
      <div className="w-[90%] max-w-[400px] bg-white/10 backdrop-blur-md border border-green-500 rounded-2xl p-6 relative z-10 shadow-xl mx-auto mt-10">
        <div className="flex justify-center p-2">
          <SplitText
            text="Login"
            className="text-3xl font-bold text-center text-green-500"
            delay={500}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        <Form layout="vertical" size="large" onFinish={loginHandle}>
          <Form.Item
            label={
              <span className="text-white text-sm">Ismingizni kiriting</span>
            }
            name="full_name"
            rules={[
              { required: true, message: "Ismingizni kiritish majburiy" },
            ]}
          >
            <Input className="bg-gray-900/20 border border-red-600 text-white placeholder-gray-400 focus:border-green-500" />
          </Form.Item>

          <Form.Item
            label={<span className="text-white text-sm">Parolni kiriting</span>}
            name="password"
            rules={[{ required: true, message: "Parol kiritish majburiy" }]}
          >
            <Input.Password className="bg-gray-900/20 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500" />
          </Form.Item>

          <Form.Item className="flex justify-center mt-4">
            <Button
              htmlType="submit"
              className="kirish_button"
            >
              Kirish
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
