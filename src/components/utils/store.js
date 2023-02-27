import { configureStore } from "@reduxjs/toolkit";
import { youthoobApi } from "../Services/apiSlice";

export default configureStore({
    reducer:{
        [youthoobApi.reducerPath]:youthoobApi.reducer,
    },

    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(youthoobApi.middleware)
})