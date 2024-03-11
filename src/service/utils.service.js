import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../api/axios";

// hàm lấy dữ liệu
export const findAllData = createAsyncThunk("findAll", async (data) => {
  try {
    // gọi api lấy dữ liệu
    const response = await baseUrl.get(`${data}.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

// hàm xóa 1 bản ghi theo id
export const removeData = createAsyncThunk("remove", async ({ data, key }) => {
  try {
    let response = await baseUrl.delete(`${data}/${key}.json`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

//hàm tìm kiếm thông tin một bản ghi theo id
export const findOneData = createAsyncThunk(
  "findOne",
  async ({ data, key }) => {
    try {
      let response = await baseUrl.get(`${data}/${key}.json`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const createData = createAsyncThunk(
  "post",
  async ({ data, dataPost }) => {
    try {
      let response = await baseUrl.post(`${data}.json`, dataPost);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const upDateData = createAsyncThunk(
  "patch",
  async ({ data, id, statusUpdate }) => {
    try {
      const response = await baseUrl.patch(`${data}/${id}.json`, statusUpdate);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
