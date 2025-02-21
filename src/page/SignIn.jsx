import React from 'react';
import { Card, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Bạn có thể thêm xử lý xác thực người dùng tại đây trước khi điều hướng
    navigate('/home');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left: Illustration */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-gray-100">
        <img
          src="./image/signin.jpg"
          alt="Signup Illustration"
          className="w-full h-[100vh] object-cover"
        />
      </div>

      {/* Right: Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-8">
        <Card
          title="Welcome to ITEL...!"
          className="w-full max-w-md p-4 justify-center text-center border-0"
          headStyle={{ borderBottom: 'none' }}
        >
          <div className="space-y-6">
            <div className="flex justify-center w-full">
              <div className="flex w-64 justify-center items-center rounded-full overflow-hidden bg-gradient-to-r from-purple-300 to-purple-400 p-0.5">
                <Button className="w-1/2 bg-purple-600 text-white font-semibold hover:bg-purple-700 rounded-full text-xs py-1">
                  Sign In
                </Button>
                <Button
                  onClick={() => navigate('/signup')}
                  className="w-1/2 bg-transparent text-white font-semibold hover:bg-purple-100 rounded-full text-xs py-1"
                >
                  Sign Up
                </Button>
              </div>
            </div>

            <div className="flex items-center w-full justify-center">
              <p className="text-center text-gray-500 max-w-xs leading-6">
                ITEL is your companion and powerful assistant in the IT industry.
              </p>
            </div>

            <div>
              <p className="text-left font-semibold">User name</p>
              <Input type="text" placeholder="Enter your User name" className="rounded-full" />
            </div>

            <div>
              <p className="text-left font-semibold">Password</p>
              <Input.Password
                placeholder="input password"
                className="rounded-full"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
            </div>

            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </div>
              <span className="text-blue-600 cursor-pointer">Forgot Password?</span>
            </div>

            <Button 
              onClick={handleSignIn} 
              className="w-32 bg-purple-600 text-white hover:bg-purple-700 rounded-full absolute right-10"
            >
              Sign In
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
