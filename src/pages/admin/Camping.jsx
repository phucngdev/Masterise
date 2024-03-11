import React from "react";
import { Button, Tabs } from "antd";
import CampingTab from "../../layout/admin/CampingTab";
const items = [
  {
    key: "1",
    label: "Còn trống",
    children: (
      <>
        <CampingTab status={1}></CampingTab>
      </>
    ),
  },
  {
    key: "2",
    label: "Đã đặt lịch",
    children: (
      <>
        <CampingTab status={2}></CampingTab>
      </>
    ),
  },
  {
    key: "3",
    label: "Đang sử dụng",
    children: (
      <>
        <CampingTab status={3}></CampingTab>
      </>
    ),
  },
];
const Camping = () => {
  return (
    <>
      <div className="w-full h-[100vh] p-4">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-2xl font-semibold text-black">Camping</h3>
          <Button className="bg-blue-500 text-white">+ Thêm mới camping</Button>
        </div>
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    </>
  );
};

export default Camping;
