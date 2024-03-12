import React from "react";
import Footer from "../../layout/user/Footer";
import ic01 from "../../../public/ic01.png";
import ic02 from "../../../public/ic02.png";
import ic03 from "../../../public/ic03.png";
import ic04 from "../../../public/ic04.png";
import ic05 from "../../../public/ic05.png";
import ic06 from "../../../public/ic06.png";
import line2 from "../../../public/line2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Button, Tabs } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: "Camping",
    children: <></>,
  },
  {
    key: "2",
    label: "Camping",
    children: <></>,
  },
  {
    key: "3",
    label: "Camping",
    children: <></>,
  },
  {
    key: "4",
    label: "Camping",
  },
  // {
  //   key: "2",
  //   label: (
  //     <>
  //       <Navigate
  //         navigate={"/dich-vu"}
  //         icon={<ShopOutlined />}
  //         text={"Dịch vụ"}
  //       />
  //     </>
  //   ),
  // },
  // {
  //   key: "3",
  //   label: (
  //     <>
  //       <Navigate
  //         navigate={"/tin-tuc"}
  //         icon={<ProfileOutlined />}
  //         text={"Tin tức"}
  //       />
  //     </>
  //   ),
  // },
  // {
  //   key: "4",
  //   label: (
  //     <>
  //       <Navigate
  //         navigate={"/uu-thich"}
  //         icon={<HeartOutlined />}
  //         text={"Ưu thích"}
  //       />
  //     </>
  //   ),
  // },
  // {
  //   key: "5",
  //   label: (
  //     <>
  //       <Navigate
  //         navigate={"/lien-he"}
  //         icon={<TabletOutlined />}
  //         text={"Liên hệ"}
  //       />
  //     </>
  //   ),
  // },
];
const Home = () => {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-scroll">
        <section className="w-full h-screen flex items-center justify-center snap-start relative">
          <img
            src="https://images.pexels.com/photos/15375832/pexels-photo-15375832/free-photo-of-tuy-t-nha-c-a-cay-mua-dong.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full z-[-1]"
          />
          <div className="flex items-center justify-center relative px-10 py-5 rounded-full bg-blue-100 bg-opacity-15 ">
            <h3 className="text-[50px] font-medium text-center text-white max-w-[550px]">
              Mang tới trải nghiệm và dịch vụ tốt nhất <br />
              <span className="text-[60px] text-[#cbe040]">FOR YOU</span>
            </h3>
            <div className="uppercase px-5 py-1 text-white rounded-full bg-blue-200 bg-opacity-70 absolute top-[-7%] rotate-3 left-[50%] translate-x-[-50%]">
              We have an offer for you!
            </div>
          </div>
        </section>
        <section className="w-full h-screen flex flex-col gap-10 items-center justify-center snap-start bg-[#7a4e4e]">
          <div className="flex items-center justify-center gap-7">
            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-5 w-[30%] text-white text-center"
            >
              <img className="w-[80px] h-full object-cover" src={ic01} alt="" />
              <h3 className="text-xl font-semibold">Ẩm thực đa dạng</h3>
              <p>
                Đến với Masterise, du khách sẽ được thưởng thức những món ăn
                ngon, những trải nghiệm ẩm thực đa dạng, độc đáo
              </p>
            </Link>
            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-5 w-[30%] text-white text-center"
            >
              <img className="w-[80px] h-full object-cover" src={ic02} alt="" />
              <h3 className="text-xl font-semibold">Không gian thiên nhiên</h3>
              <p>
                Masterise nằm trọn trong quần thể du lịch Đồng Mô, sở hữu cảnh
                quan, không gian thiên nhiên ấn tượng và trong lành
              </p>
            </Link>
            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-5 w-[30%] text-white text-center"
            >
              <img className="w-[80px] h-full object-cover" src={ic03} alt="" />
              <h3 className="text-xl font-semibold">Vị trí tốt nhất</h3>
              <p>
                Chúng tôi chỉ cách trung tâm Hà Nội hơn 45 phút lái xe, bạn có
                thể trải nghiệm mọi cùng thời gian bạn có, dù nửa ngày hay 1
                ngày
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-7">
            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-5 w-[30%] text-white text-center"
            >
              <img className="w-[80px] h-full object-cover" src={ic04} alt="" />
              <h3 className="text-xl font-semibold">Đặt phòng đơn giản</h3>
              <p>
                Đến với Masterise các bạn có thể trải nghiệm được tất cả các mùa
                trong năm của khí hậu Miền Bắc.
              </p>
            </Link>
            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-5 w-[30%] text-white text-center"
            >
              <img className="w-[80px] h-full object-cover" src={ic05} alt="" />
              <h3 className="text-xl font-semibold">Phục vụ tận tình</h3>
              <p>
                Chúng tôi luôn lấy trải nghiệm khách hàng làm trung tâm, là
                thước đo cho sự thành công của mình, cho nên các dịch vụ đều
                được phục vụ ở mức tốt nhất
              </p>
            </Link>
            <Link
              to="/"
              className="flex flex-col items-center justify-center gap-5 w-[30%] text-white text-center"
            >
              <img className="w-[80px] h-full object-cover" src={ic06} alt="" />
              <h3 className="text-xl font-semibold">Phòng nghỉ độc đáo</h3>
              <p>
                Đến với Masterise bạn sẽ được trải nghiệm các loại hình lưu trú
                độc đáo, mới lạ như nhà container house, glamping tent, camping
              </p>
            </Link>
          </div>
        </section>
        <section className="w-full h-[100vh]  flex flex-col gap-5 items-center justify-center snap-start px-10">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold font-sans">CẮM TRẠI</h2>
            <img className="w-[200px] mb-5" src={line2} alt="" />
          </div>
          <Tabs defaultActiveKey="1" items={items} />
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
