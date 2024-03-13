import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

// public
import PublicRouter from "./routes/PublicRouter";
import Home from "./pages/user/Home";
import Posts from "./pages/user/Posts";
import Likes from "./pages/user/Likes";
import Contact from "./pages/user/Contact";
import Notification from "./pages/user/Notification";
import Register from "./pages/user/Register";
import Rent from "./pages/user/Rent";
import Login from "./pages/user/Login";
import PostDetail from "./pages/user/PostDetail";

// private
import PrivateRouter from "./routes/PrivateRouter";
import Dashboard from "./pages/admin/main/Dashboard";
import PostsList from "./pages/admin/main/PostsList";
import CreatePost from "./pages/admin/create/CreatePost";
import EditPost from "./pages/admin/edit/EditPost";
import PreviewPost from "./pages/admin/view:id/PreviewPost";
import Camping from "./pages/admin/main/Camping";
import CreateService from "./pages/admin/create/CreateService";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* public */}
        <Route to="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path="dich-vu" element={<Rent />} />
          <Route path="tin-tuc" element={<Posts />} />
          <Route path="tin-tuc/:id" element={<PostDetail />} />
          <Route path="uu-thich" element={<Likes />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="thong-bao" element={<Notification />} />
        </Route>
        {/*  */}
        <Route path="/dang-ky" element={<Register />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/admin" element={<PrivateRouter />}>
          {/* tổng quan */}
          <Route index element={<Dashboard />} />
          {/* bài viết */}
          <Route path="danh-sach-bai-viet" element={<PostsList status={9} />} />
          <Route path="bai-viet-da-tao" element={<PostsList status={0} />} />
          <Route path="bai-viet-da-dang" element={<PostsList status={1} />} />
          <Route path="bai-viet-an" element={<PostsList status={2} />} />
          <Route path="tao-moi-bai-viet" element={<CreatePost />} />
          <Route path="chinh-sua-bai-viet/:id" element={<EditPost />} />
          <Route path="xem-bai-viet/:id" element={<PreviewPost />} />
          {/* dịch vụ */}
          <Route path="camping" element={<Camping />} />
          <Route path="tao-moi-camping" element={<CreateService />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
