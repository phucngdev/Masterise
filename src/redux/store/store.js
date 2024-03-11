import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../useSlice/userSlice";
import postSlice from "../useSlice/postSlice";
import utilsSlice from "../useSlice/utilsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    utils: utilsSlice,
  },
});
export default store;
