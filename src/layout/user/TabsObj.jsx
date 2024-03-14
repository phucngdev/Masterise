import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { findAllData } from "../../service/utils.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDataActions from "../../hooks/useDataActions";

const TabsObj = ({ category }) => {
  const navogate = useNavigate();
  const { data, status, error, handleGetAll } = useDataActions(category);

  useEffect(() => {
    handleGetAll(category);
  }, [category]);
  console.log(data);
  return (
    <>
      <div className="mt-5 grid grid-cols-5 gap-5">
        {/* {data &&
          Object.entries(data).map(([key, item]) => (
            <div
              key={key}
              className="flex items-center flex-col justify-center shadow-xl hover:shadow-2xl cursor-pointer border border-blue-200 rounded-xl"
            >
              <img
                className="w-full h-[300px] object-cover rounded-xl"
                src={item.img_cover}
                alt=""
              />
              <h3 className="mt-4 text-base font-medium">{item.name}</h3>
              <Button
                onClick={() => navogate("/nghi-duong/:id")}
                className="bg-blue-400 text-white my-4"
              >
                ĐẶT NGAY
              </Button>
            </div>
          ))} */}
      </div>
    </>
  );
};

export default TabsObj;
