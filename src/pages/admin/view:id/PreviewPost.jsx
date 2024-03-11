import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { findOneData } from "../../../service/utils.service";

const PreviewPost = () => {
  const dispatch = useDispatch();
  const dataPost = useSelector((state) => state.utils.dataEdit);
  const { id } = useParams();

  const handleCancel = () => {
    window.history.back();
  };

  const loadData = () => {
    dispatch(findOneData({ data: "posts", key: id }));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div className="flex justify-start p-10">
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
      <div className="flex flex-col max-w-[80%] mx-auto ">
        <h1 className="text-4xl font-bold text-center text-[#a96b10]">
          {dataPost?.title}
        </h1>
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: dataPost?.content }}
        />
      </div>
    </>
  );
};

export default PreviewPost;
