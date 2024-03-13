import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllData } from "../../service/utils.service";

const useDataByCategory = (category) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.utils.data);

  useEffect(() => {
    dispatch(findAllData(category));
  }, [category, dispatch]);

  return data[category];
};

export default useDataByCategory;
