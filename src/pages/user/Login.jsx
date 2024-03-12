import React, { useEffect, useMemo, useState } from "react";
import { Button, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import logo from "../../../public/logo-white.svg";
import { findAllData } from "../../service/utils.service";

const Login = () => {
  const navigate = useNavigate();
  // state chua du lieu
  const dispatch = useDispatch();
  // lấy dữ liệu trong kho lưu trữ
  const dataUser = useSelector((state) => state.utils.data);
  const [dataChangeArr, setDataChangeArr] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const loadData = () => {
    dispatch(findAllData("users"));
  };
  useEffect(() => {
    loadData();
  }, []);

  const memoData = useMemo(() => {
    return setDataChangeArr(Object.values(dataUser));
  }, [dataUser]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (userEmail === "") {
      message.info({
        content: "Vui lòng nhập email",
      });
    } else if (password === "") {
      message.info({
        content: "Vui lòng nhập mật khẩu",
      });
    } else {
      const findUser = dataChangeArr?.find(
        (user) => user.email === userEmail && user.password === password
      );
      if (findUser) {
        message.success({
          content: "Welcome back",
        });
        findUser.type === "user"
          ? navigate("/") +
            localStorage.setItem("userLogin", JSON.stringify(findUser))
          : navigate("/admin") +
            localStorage.setItem("adminLogin", JSON.stringify(findUser));
      } else {
        message.error({
          content: "Vui lòng kiểm tra lại thông tin đăng nhập",
        });
      }
    }
  };

  return (
    <>
      <img
        className="w-[100vw] h-[100vh] object-cover fixed top-0 left-0 bottom-0 right-0 z-[-10]"
        src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?t=st=1708784218~exp=1708787818~hmac=a0565cd9f1ac0147adf0d0ac10b29a8653021811343cd37128965768347550a8&w=1800"
        alt=""
      />
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="flex justify-around items-center rounded-2xl w-[80%] h-[80%] bg-blue-200 bg-opacity-50">
          <div className="w-[60%] flex flex-col gap-3 items-center justify-center">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <Link to="/" className="text-5xl mb-5 text-white font-extrabold">
              MASTERISE LAND
            </Link>
            <h3 className="text-3xl text-[#cbe040] font-extrabold">
              Turn your dreams into reality
            </h3>
            <h3 className="text-3xl text-white font-extrabold">
              Delivering the finest services
            </h3>
          </div>
          <div className="flex-1 flex flex-col py-5 px-10 bg-white h-full">
            <h3 className="text-3xl text-black font-medium">Welcome Back</h3>
            <span className="mt-3">Vui lòng nhập thông tin của bạn</span>
            <form onSubmit={handleLogin} className="mt-3 flex flex-col">
              <Input
                className="py-2 my-2 border-black"
                type="text"
                placeholder="Your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <Input
                className="py-2 my-2 border-black"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link className="my-2">Quên mật khẩu?</Link>
              <Button
                htmlType="submit"
                className="text-lg py-5 font-medium bg-blue-600 text-white flex items-center justify-center"
              >
                Đăng nhập
              </Button>
            </form>
            <div className="my-5 flex items-center justify-between">
              <div className="w-[40%] h-[1px] bg-black"></div>
              <div className="">OR</div>
              <div className="w-[40%] h-[1px] bg-black"></div>
            </div>
            <Button className=" mb-3 text-lg py-5 font-medium bg-blue-600 text-white flex items-center justify-center">
              <GoogleOutlined />
              Gooogle
            </Button>
            <Button className="text-lg py-5 font-medium bg-blue-600 text-white flex items-center justify-center">
              <FacebookOutlined />
              Facebook
            </Button>
            <span className="mt-5 text-center">
              Bạn chưa có tài khoản?{" "}
              <Link to="/dang-ky" className="text-blue-600">
                Đăng ký
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
