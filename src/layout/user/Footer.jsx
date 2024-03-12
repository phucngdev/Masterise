import React from "react";
import {
  FacebookOutlined,
  TikTokOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className="snap-start">
        <div className="py-10 bg-stone-700 text-center text-white">
          <p className="text-base font-semibold">
            The Premier Service Provider in Vietnam
          </p>
          <h3 className="text-3xl font-bold mt-5 mb-10">MASTERISE</h3>
          <div className="flex gap-5 max-w-[80%] mx-auto">
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">Contact</h4>
              <span className="text-sm">Email</span>
              <span className="text-sm">phucngdev@masterise.com</span>
              <span className="text-sm">Điện thoại : (+84) 793 395 545</span>
            </div>
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">
                TRỤ SỞ CHÍNH - THÁI NGUYỄN
              </h4>
              <span className="text-sm">
                Việt Cường, Hoá Thượng, Đồng Hỷ, Thái Nguyễn
              </span>
            </div>
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">VĂN PHÒNG HÀ NỘI</h4>
              <span className="text-sm">
                Tầng 6, Tòa nhà 8, Xuân Đỉnh, Quận Bắc Từ Liêm, Hà Nội
              </span>
            </div>
            <div className="flex flex-col gap-2 items-start flex-1 text-left">
              <h4 className="text-lg font-medium">KẾT NỐI VỚI CHÚNG TÔI</h4>
              <div className="flex items-center gap-3 *:text-2xl ">
                <YoutubeOutlined />
                <FacebookOutlined />
                <TikTokOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-stone-500 py-8">
          <div className="max-w-[80%] mx-auto flex items-center justify-between">
            <div className="flex flex-col gap-2 items-start flex-1 text-left text-white max-w-[60%]">
              <h4 className="text-lg font-medium">
                A MEMBER OF MASTERISE GROUP
              </h4>
              <span className="text-sm">
                Website thuộc sở hữu bởi: CÔNG TY CỔ PHẦN TẬP ĐOÀN MASTERISE Bản
                quyền ©2024 thuộc về phucngdev
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
