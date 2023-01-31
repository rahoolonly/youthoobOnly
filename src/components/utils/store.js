import { configureStore } from "@reduxjs/toolkit";
import { youthoobApi } from "../Services/apiSlice";
import { particularVideoApi } from "../Services/particularVideoApi";

export default configureStore({
    reducer:{
        [youthoobApi.reducerPath]:youthoobApi.reducer,
        [particularVideoApi.reducerPath]:particularVideoApi.reducer
    },

    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(youthoobApi.middleware)
})