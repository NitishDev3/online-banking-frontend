import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInfoSlice"


const appStore = configureStore({
    reducer: {
        userInfo : userReducer,
    }
})

export default appStore;