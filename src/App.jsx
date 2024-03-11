import { useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import Home from "./pages/user/Home";
import Posts from "./pages/user/Posts";
import Likes from "./pages/user/Likes";
import Contact from "./pages/user/Contact";
import Notification from "./pages/user/Notification";
import Register from "./pages/user/Register";
import Rent from "./pages/user/Rent";
import Login from "./pages/user/Login";
import PrivateRouter from "./routes/PrivateRouter";
import Dashboard from "./pages/admin/Dashboard";
import PostsList from "./pages/admin/PostsList";
import CreatePost from "./pages/admin/CreatePost";
import PostDetail from "./pages/user/PostDetail";
import EditPost from "./pages/admin/EditPost";
import PreviewPost from "./pages/admin/PreviewPost";
import Camping from "./pages/admin/Camping";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route to="/" element={<PublicRouter />}>
          <Route index element={<Home />} />
          <Route path="dich-vu" element={<Rent />} />
          <Route path="tin-tuc" element={<Posts />} />
          <Route path="tin-tuc/:id" element={<PostDetail />} />
          <Route path="uu-thich" element={<Likes />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="thong-bao" element={<Notification />} />
        </Route>
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
          <Route path="edit-post/:id" element={<EditPost />} />
          <Route path="preview-post/:id" element={<PreviewPost />} />
          {/* dịch vụ */}
          <Route path="camping" element={<Camping />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
