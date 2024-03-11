import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  CarryOutOutlined,
  CheckSquareOutlined,
  ContainerOutlined,
  EditOutlined,
  FormOutlined,
  MailOutlined,
  MergeCellsOutlined,
  ProjectOutlined,
  SelectOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <>
      <NavLink to="/admin" className="text-black bg-transparent">
        Tổng quan
      </NavLink>
    </>,
    "sub1",
    <AppstoreOutlined />
  ),
  getItem("Bài viết", "sub2", <FormOutlined />, [
    getItem("Danh sách", "sub2-1", <ContainerOutlined />, [
      getItem(
        <NavLink
          to="/admin/danh-sach-bai-viet"
          className="text-black bg-transparent"
        >
          Danh sách bài viết
        </NavLink>,
        "2-1",
        <ProjectOutlined />
      ),
      getItem(
        <NavLink
          to="/admin/bai-viet-da-dang"
          className="text-black bg-transparent"
        >
          Bài viết đã đăng
        </NavLink>,
        "2-2",
        <CarryOutOutlined />
      ),
      getItem(
        <NavLink
          to="/admin/bai-viet-da-tao"
          className="text-black bg-transparent"
        >
          Bài viết đã tạo
        </NavLink>,
        "2-3",
        <SelectOutlined />
      ),
      getItem(
        <NavLink to="/admin/bai-viet-an" className="text-black bg-transparent">
          Bài viết ẩn
        </NavLink>,
        "2-4",
        <MergeCellsOutlined />
      ),
    ]),
    getItem(
      <NavLink
        to="/admin/tao-moi-bai-viet"
        className="text-black bg-transparent"
      >
        Tạo mới bài viết
      </NavLink>,
      "2-5",
      <EditOutlined />
    ),
  ]),
  getItem("Dịch vụ", "sub3", <FormOutlined />, [
    getItem(
      <NavLink to="/admin/camping" className="text-black bg-transparent">
        Camping
      </NavLink>,
      "3-1",
      <ContainerOutlined />
    ),
    getItem(
      <NavLink to="/admin/phong-nghi" className="text-black bg-transparent">
        Phòng nghỉ
      </NavLink>,
      "3-2",
      <EditOutlined />
    ),
  ]),
];
const onClick = (e) => {
  // console.log("click ", e);
};
const SideBar = () => {
  return (
    <>
      <Menu
        className="fixed top-[56px] left-0 py-5 w-[256px] h-[100vh] "
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SideBar;
