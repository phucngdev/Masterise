import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import {
  findAllData,
  removeData,
  upDateData,
} from "../../../service/utils.service";

const PostsList = ({ status }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // lấy data
  const dataPost = useSelector((state) => state.utils.data);
  const [filterAll, setFilterAll] = useState();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalUploadOpen, setIsModalUploadOpen] = useState(false);
  const [isModalHiddenOpen, setIsModalHiddenOpen] = useState(false);
  const [isModalUnHiddenOpen, setIsModalUnHiddenOpen] = useState(false);
  const [key, setKey] = useState("");

  // hàm lấy data
  const loadData = () => {
    dispatch(findAllData("posts"));
  };

  // load data lần đầu tien render
  useEffect(() => {
    loadData();
  }, []);

  // lọc data qua status
  useEffect(() => {
    if (dataPost && Object.keys(dataPost).length > 0) {
      const filteredData = {};
      for (const [key, value] of Object.entries(dataPost)) {
        if (value?.status === status) {
          filteredData[key] = value;
        }
      }
      setFilterAll(status === 9 ? dataPost : filteredData);
    } else {
      setFilterAll(null); // Đặt filterAll thành null khi không có dữ liệu
    }
  }, [status, dataPost]);

  // hiển thị modal xoá
  const showModalDelete = (key) => {
    setIsModalDeleteOpen(true);
    setKey(key);
  };

  // hàm xác nhận xoá
  const handleOkDelete = () => {
    dispatch(removeData({ data: "posts", key: key }))
      .then(() => {
        message.success({
          content: "Delete successfully",
        });
        setIsModalDeleteOpen(false);
        const updatedData = { ...filterAll };
        delete updatedData[key];
        setFilterAll(updatedData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // hiển thị modal ẩn
  const showModalHidden = (key) => {
    setIsModalHiddenOpen(true);
    setKey(key);
  };

  // hiển thị modal huỷ ẩn
  const showModalUnHidden = (key) => {
    setIsModalUnHiddenOpen(true);
    setKey(key);
  };

  // hàm tắt modal
  const handleCancel = () => {
    setIsModalDeleteOpen(false);
    setIsModalUploadOpen(false);
  };

  // hiển thị modal đăng
  const showModalUpload = (key) => {
    setIsModalUploadOpen(true);
    setKey(key);
  };

  // hàm đăng bài
  const handleOkUpload = (statusUpload) => {
    dispatch(
      upDateData({
        data: "posts",
        id: key,
        statusUpdate: { status: statusUpload },
      })
    )
      .then(() => {
        message.success({
          content: `${statusUpload === 1 ? "Upload" : "Hidden"} successfully`,
        });
        setIsModalUploadOpen(false);
        setIsModalHiddenOpen(false);
        setIsModalUnHiddenOpen(false);
        loadData();
      })
      .catch((error) => {
        console.log("Error uploading post:", error);
        message.error({
          content: "Failed to upload post",
        });
      });
  };

  // hàm chuyển hướng đến trang sửa
  const handleEdit = (key) => {
    navigate(`/admin/chinh-sua-bai-viet/${key}`);
  };

  return (
    <>
      <Modal
        title="Confirm delete?"
        open={isModalDeleteOpen}
        okType="danger"
        onOk={handleOkDelete}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <Modal
        title="Confirm upload?"
        open={isModalUploadOpen}
        okType="danger"
        onOk={() => handleOkUpload(1)}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <Modal
        title="Confirm hidden?"
        open={isModalHiddenOpen}
        okType="danger"
        onOk={() => handleOkUpload(2)}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <Modal
        title="Confirm unhidden?"
        open={isModalUnHiddenOpen}
        okType="danger"
        onOk={() => handleOkUpload(1)}
        onCancel={handleCancel}
        width={400}
      ></Modal>
      <div className="w-full h-[100vh] overflow-auto p-4">
        <h3 className="text-2xl font-semibold text-black mb-3">Create post</h3>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border">
            <div className="w-[5%] text-center">Stt</div>
            <div className="w-[55%] border-x  text-center">Post</div>
            <div className="w-[20%] border-e  text-center">Author</div>
            <div className="w-[20%]  text-center">Feture</div>
          </div>
          <div className="flex flex-col">
            {filterAll &&
              Object.entries(filterAll).map(([key, item]) => (
                <div key={key} className="h-[200px] flex items-center border">
                  <div className="w-[5%] text-center">{}</div>
                  <Link
                    to={`/admin/xem-bai-viet/${key}`}
                    className="w-[55%] border-x p-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="w-[40%] h-[180px] rounded-xl object-cover"
                        src={item?.cover_img}
                        alt=""
                      />
                      <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-base">{item?.title}</h3>
                        <p className="text-sm">{item?.created_at}</p>
                      </div>
                    </div>
                  </Link>
                  <div className="w-[20%] border-e h-full flex items-center justify-center text-center">
                    {item?.author}
                  </div>
                  <div className="w-[20%] flex flex-col gap-2 items-center justify-around">
                    <Button
                      // onClick={() => handleEdit(key)}
                      onClick={() =>
                        navigate(`/admin/chinh-sua-bai-viet/${key}`)
                      }
                      className="w-[70%] "
                      type="default"
                      htmlType="button"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => showModalDelete(key)}
                      className="w-[70%] "
                      danger
                      htmlType="button"
                    >
                      Delete
                    </Button>
                    {item?.status === 0 ? (
                      <Button
                        onClick={() => showModalUpload(key)}
                        className="w-[70%] bg-blue-500"
                        type="primary"
                        htmlType="button"
                      >
                        Upload
                      </Button>
                    ) : item?.status === 1 ? (
                      <Button
                        onClick={() => showModalHidden(key)}
                        className="w-[70%] bg-blue-500"
                        type="primary"
                        htmlType="button"
                      >
                        Hidden
                      </Button>
                    ) : (
                      <Button
                        onClick={() => showModalUnHidden(key)}
                        className="w-[70%] bg-blue-500"
                        type="primary"
                        htmlType="button"
                      >
                        Un hidden
                      </Button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsList;
