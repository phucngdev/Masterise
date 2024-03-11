import React, { useState } from "react";
import {
  BellOutlined,
  CrownOutlined,
  DollarOutlined,
  HeartOutlined,
  ProfileOutlined,
  ShopOutlined,
  TabletOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Navigate from "../../components/user/Navigate";
import { Button, Modal, Popconfirm, Tabs, message } from "antd";
import Home from "../../pages/user/Home";

const items = [
  {
    key: "1",
    label: (
      <>
        <Navigate navigate={"/"} icon={<CrownOutlined />} text={"Trang chủ"} />
      </>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <Navigate
          navigate={"/dich-vu"}
          icon={<ShopOutlined />}
          text={"Dịch vụ"}
        />
      </>
    ),
  },
  {
    key: "3",
    label: (
      <>
        <Navigate
          navigate={"/tin-tuc"}
          icon={<ProfileOutlined />}
          text={"Tin tức"}
        />
      </>
    ),
  },
  {
    key: "4",
    label: (
      <>
        <Navigate
          navigate={"/uu-thich"}
          icon={<HeartOutlined />}
          text={"Ưu thích"}
        />
      </>
    ),
  },
  {
    key: "5",
    label: (
      <>
        <Navigate
          navigate={"/lien-he"}
          icon={<TabletOutlined />}
          text={"Liên hệ"}
        />
      </>
    ),
  },
];
const Header = ({ userLogin, setUserLogin }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    localStorage.removeItem("userLogin");
    setUserLogin(false);
    message.success({
      content: "Logged out successfully",
    });
    navigate("/");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="w-full z-[999] px-[5%] fixed top-0 shadow-xl bg-white bg-opacity-90 mx-auto h-[60px] flex items-center justify-between ">
        <Link to="/" className=" font-bold text-3xl ">
          Masterise
        </Link>
        <div className="flex items-center gap-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Tabs defaultActiveKey="1" items={items} />
          {/* <Navigate
            navigate={"/"}
            icon={<CrownOutlined />}
            text={"Trang chủ"}
          /> */}

          {/* <Navigate
            navigate={"/dich-vu"}
            icon={<ShopOutlined />}
            text={"Dịch vụ"}
          /> */}
          {/* <Navigate
            navigate={"/tin-tuc"}
            icon={<ProfileOutlined />}
            text={"Tin tức"}
          /> */}
          {/* <Navigate
            navigate={"/uu-thich"}
            icon={<HeartOutlined />}
            text={"Ưu thích"}
          /> */}
          {/* <Navigate
            navigate={"/lien-he"}
            icon={<TabletOutlined />}
            text={"Liên hệ"}
          /> */}
        </div>
        <div className="flex items-center gap-3 max-w-[200px]">
          <Navigate navigate={"/thong-bao"} icon={<BellOutlined />} />
          {userLogin ? (
            <Popconfirm
              title={
                <>
                  <h3 className="text-center">Xác nhận đăng xuất</h3>
                </>
              }
              description={
                <>
                  <Button
                    onClick={showModal}
                    danger
                    className="mt-5 px-8 py-5 flex items-center justify-center"
                  >
                    Đăng xuất
                  </Button>
                </>
              }
              showCancel={false}
              icon={false}
            >
              <Button danger>{userLogin?.email}</Button>
            </Popconfirm>
          ) : (
            <Navigate
              navigate={"/dang-nhap"}
              icon={<UserOutlined />}
              text={"Đăng nhập"}
            />
          )}
        </div>
      </div>
      <Modal
        title="Confirm Logout?"
        open={isModalOpen}
        okType="danger"
        onOk={handleOk}
        onCancel={handleCancel}
        width={400}
      ></Modal>
    </>
  );
};

export default Header;
