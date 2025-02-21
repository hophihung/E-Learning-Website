import React from 'react';
import { Card, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row min-h-screen">
      {/* ảnh bên trái  */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-gray-100">
        <img
          src="./image/signup.jpg"
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* form bên phải */}
      <div className="flex flex-1 items-center justify-center min-h-screen p-8">
        <Card  title="Welcome to ITEL...!"
          className="w-full max-w-md p-4 justify-center text-center border-0"
          headStyle={{ borderBottom: 'none' }}>
          <div className="space-y-4">
            {/* button click */}
            <div className="flex justify-center w-full">
              <div className="flex w-64 justify-center items-center rounded-full overflow-hidden bg-gradient-to-r from-purple-300 to-purple-400 p-0.5">
                <Button
                  onClick={() => navigate('/')}
                  className="w-1/2 bg-transparent text-white font-semibold hover:bg-purple-100 rounded-full text-xs py-1"
                >
                  Sign In
                </Button>
                <Button className="w-1/2 bg-purple-600 text-white font-semibold hover:bg-purple-700 rounded-full text-xs py-1">
                  Sign Up
                </Button>
              </div>
            </div>

            {/* giới thiệu */}
            <p className="text-center text-gray-500 max-w-xs mx-auto">
              ITEL is your companion and powerful assistant in the IT industry.
            </p>

            {/* khung */}
            <div>
              <p className="text-left">Email Address</p>
              <Input type="text" placeholder="Enter your Email Address" className="rounded-full" />
            </div>

            <div>
              <p className="text-left">User name</p>
              <Input type="text" placeholder="Enter your User name" className="rounded-full" />
            </div>

            <div>
              <p className="text-left">Password</p>
              <Input.Password
                placeholder="Enter your password"
                className="rounded-full"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </div>

            {/* Sign Up Button */}
            <Button className="w-32 bg-purple-600 text-white hover:bg-purple-700 rounded-full absolute right-10">
              Sign Up
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
