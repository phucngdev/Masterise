import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  findAllData,
  findOneData,
  removeData,
  upDateData,
  createData,
} from "../service/utils.service";

const useDataActions = (category) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.utils.data);
  const status = useSelector((state) => state.utils.status);
  const error = useSelector((state) => state.utils.error);
  const dataEdit = useSelector((state) => state.utils.dataEdit);

  const handleGetAll = () => {
    dispatch(findAllData(category));
  };

  const handleDelete = (id) => {
    dispatch(removeData({ data: category, key: id }));
  };

  const handleGetOne = (id) => {
    dispatch(findOneData({ data: category, key: id }));
  };

  const handleCreate = (dataPost) => {
    dispatch(createData({ data: category, dataPost }));
  };

  const handleUpdate = (id, statusUpdate) => {
    dispatch(upDateData({ data: category, id, statusUpdate }));
  };

  return {
    data,
    status,
    error,
    dataEdit,
    handleGetAll,
    handleDelete,
    handleGetOne,
    handleCreate,
    handleUpdate,
  };
};

export default useDataActions;
