import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-markdown-editor-lite/lib/index.css";
import { Button, Input, message } from "antd";
import UploadSingle from "../../../components/admin/UploadSingle";
import TextEditor from "../../../components/admin/TextEditor";
import TextArea from "antd/es/input/TextArea";
import { createPost } from "../../../service/post.service";

const CreateCamping = () => {
  return (
    <>
      <div className="w-full h-[100vh] p-4"></div>
    </>
  );
};

export default CreateCamping;
